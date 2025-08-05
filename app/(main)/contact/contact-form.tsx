'use client';

import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';

const referralOptions = [
  { value: 'google', label: 'Google' },
  { value: 'friend', label: 'Friend' },
  { value: 'social', label: 'Social Media' },
  { value: 'event', label: 'Event' },
  { value: 'database', label: 'Wedding Database' },
  { value: 'other', label: 'Other' },
];

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Name is required',
    })
    .max(64, {
      message: 'Name is too long',
    }),
  partnerName: z
    .string()
    .min(2, {
      message: 'Partner name is required',
    })
    .max(64, {
      message: 'Partner name is too long',
    }),
  email: z.string().email(),
  phone: z.string().optional(),
  weddingDate: z.date().optional(),
  referral: z.string().optional(),
  message: z
    .string()
    .min(10, {
      message: 'Message is required',
    })
    .max(500, {
      message: 'Message is too long',
    }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      partnerName: '',
      email: '',
      phone: '',
      weddingDate: new Date(),
      referral: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          weddingDate: values.weddingDate?.toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast({
        title: `Thanks, ${values.name.split(' ')[0]}!`,
        description: 'Austin + Emily will be in touch with you soon.',
      });

      form.reset();
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: 'Something went wrong',
        description: 'Please try again or contact us directly.',
        variant: 'destructive',
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-3"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Your full name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="partnerName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Partner Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Your partner's full name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Your email address" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Your phone number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="weddingDate"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 mt-1.5">
              <FormLabel>Wedding date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'pl-3 text-left font-normal bg-darkBackground/50',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="referral"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How did you hear about us?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {referralOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <aside className="col-span-2">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="Tell us everything" />
                </FormControl>
                <div className="flex justify-between text-sm">
                  <FormMessage />
                  <span
                    className={
                      field.value.length > 500 ? 'text-destructive' : ''
                    }
                  >
                    {field.value.length}/500
                  </span>
                </div>
              </FormItem>
            )}
          />
        </aside>

        <Button type="submit" className="col-span-2">
          Send
        </Button>
      </form>
    </Form>
  );
}
