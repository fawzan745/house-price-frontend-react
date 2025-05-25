import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";

const formSchema = z.object({
  bedroom: z.coerce.number().min(1, {
    message: "Number of bedroom must be at least 1.",
  }),
  bathroom: z.coerce.number().min(1, {
    message: "Number of bathroom must be at least 1.",
  }),
  land_area: z.coerce.number().min(15, {
    message: "Land area must be at least 15m².",
  }),
  building_area: z.coerce.number().min(15, {
    message: "Land area must be at least 15m².",
  }),
});

export default function PredictForm({ onSubmit }) {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bedroom: 2,
      bathroom: 1,
      land_area: 50,
      building_area: 56,
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-y-8 gap-x-4"
      >
        <FormField
          control={form.control}
          name="location_id"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Location</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem className="cursor-pointer" value="m@example.com">
                    Kebraon, Surabaya
                  </SelectItem>
                  <SelectItem className="cursor-pointer" value="m@example.com">
                    m@example.com
                  </SelectItem>
                  <SelectItem className="cursor-pointer" value="m@google.com">
                    m@google.com
                  </SelectItem>
                  <SelectItem className="cursor-pointer" value="m@support.com">
                    m@support.com
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bedroom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bedroom</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Number of bedroom"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bathroom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bathroom</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Number of bathroom"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="land_area"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Land Area</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Land area in m²" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="building_area"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Building Area</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Building area in m²"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="col-span-2 cursor-pointer" type="submit">
          Predict
        </Button>
      </form>
    </Form>
  );
}
