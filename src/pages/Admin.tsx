import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, Phone, Mail, MessageSquare, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface Appointment {
  id: string;
  name: string;
  email: string;
  phone: string;
  appointment_date: string;
  appointment_time: string;
  service?: string;
  message?: string;
  status: string;
  created_at: string;
}

const Admin = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchAppointments();
    
    // Set up real-time subscription for new appointments
    const channel = supabase
      .channel('appointments-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'appointments'
        },
        (payload) => {
          console.log('New appointment:', payload);
          setAppointments(prev => [payload.new as Appointment, ...prev]);
          
          // Play notification sound for new appointments
          import('@/utils/notification').then(({ playNotificationSound }) => {
            playNotificationSound();
          });
          
          toast({
            title: "New Appointment!",
            description: `${(payload.new as Appointment).name} booked an appointment`,
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [toast]);

  const fetchAppointments = async () => {
    try {
      const { data, error } = await supabase
        .from('appointments')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setAppointments(data || []);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      toast({
        title: "Error",
        description: "Failed to fetch appointments",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const updateAppointmentStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('appointments')
        .update({ status })
        .eq('id', id);

      if (error) throw error;

      setAppointments(prev => 
        prev.map(apt => apt.id === id ? { ...apt, status } : apt)
      );

      toast({
        title: "Success",
        description: "Appointment status updated",
      });
    } catch (error) {
      console.error('Error updating appointment:', error);
      toast({
        title: "Error",
        description: "Failed to update appointment status",
        variant: "destructive"
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-500';
      case 'cancelled': return 'bg-red-500';
      case 'completed': return 'bg-blue-500';
      default: return 'bg-yellow-500';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading appointments...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Website
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-secondary">Admin Panel</h1>
          </div>
          <div className="text-sm text-muted-foreground">
            Total Appointments: {appointments.length}
          </div>
        </div>

        <div className="grid gap-6">
          {appointments.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-secondary mb-2">No Appointments Yet</h3>
                <p className="text-muted-foreground">Appointments will appear here once patients start booking.</p>
              </CardContent>
            </Card>
          ) : (
            appointments.map((appointment) => (
              <Card key={appointment.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      <User className="w-5 h-5 text-primary" />
                      <span>{appointment.name}</span>
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge className={`${getStatusColor(appointment.status)} text-white`}>
                        {appointment.status.toUpperCase()}
                      </Badge>
                      <Select
                        value={appointment.status}
                        onValueChange={(value) => updateAppointmentStatus(appointment.id, value)}
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="confirmed">Confirmed</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{appointment.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{appointment.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{formatDate(appointment.appointment_date)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{appointment.appointment_time}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {appointment.service && (
                        <div>
                          <p className="text-sm font-medium text-secondary">Service:</p>
                          <p className="text-sm text-muted-foreground">{appointment.service}</p>
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-medium text-secondary">Booked:</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(appointment.created_at).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {appointment.message && (
                    <div className="pt-4 border-t">
                      <div className="flex items-start space-x-2">
                        <MessageSquare className="w-4 h-4 text-muted-foreground mt-1" />
                        <div>
                          <p className="text-sm font-medium text-secondary mb-1">Additional Information:</p>
                          <p className="text-sm text-muted-foreground">{appointment.message}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;