import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Check, ChevronsUpDown, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { useLoaderData } from "react-router";

const formSchema = z.object({
  location_id: z.number({
    required_error: "Please select a location.",
  }),
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
  const [open, setOpen] = useState(false);
  const locations = useLoaderData();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location_id: undefined,
      bedroom: undefined,
      bathroom: undefined,
      land_area: undefined,
      building_area: undefined,
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
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild className="cursor-pointer">
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={cn(
                      "justify-between",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value
                      ? locations.find((loc) => loc.id === field.value)
                          ?.district
                      : "Select location"}
                    <ChevronsUpDown className="opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-[var(--radix-popover-trigger-width)]">
                  <Command>
                    <CommandInput
                      placeholder="Search locations..."
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>No location found.</CommandEmpty>
                      <CommandGroup>
                        {locations.map((loc) => (
                          <CommandItem
                            key={loc.id}
                            value={loc.district}
                            onSelect={() => {
                              form.setValue("location_id", loc.id);
                              setOpen(false);
                            }}
                          >
                            {loc.district}
                            <Check
                              className={cn(
                                "ml-auto",
                                field.value === loc.id
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
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
        <Button
          className="col-span-2 cursor-pointer"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="animate-spin" />
              <span>Please wait...</span>
            </>
          ) : (
            "Predict"
          )}
        </Button>
      </form>
    </Form>
  );
}
