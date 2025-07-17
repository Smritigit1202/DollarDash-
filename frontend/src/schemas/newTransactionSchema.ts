import dayjs, { Dayjs } from "dayjs";
import { z } from "zod";
import { TypeOption } from "../enums/Enums";

export const newTransactionFormSchema = z.object({
  title: z.string().min(1, "Title must be at least 1 character long."),
  
  value: z
    .number()
    .min(1, "Please enter an amount >= 1."), // ✅ changed from string to number
  
  label: z.object({
    id: z.number(),
    name: z.string().min(1, "Please select a label."),
    color: z.string(),
  }),

  date: z.custom<Dayjs>(
    (val) => dayjs.isDayjs(val),
    "Please select a valid date"
  ),

  type: z.nativeEnum(TypeOption).default(TypeOption.EXPENSE),
  updateWallet: z.boolean().default(false),
  recurring: z.boolean().default(false),
});

export type NewTransactionFormData = z.infer<typeof newTransactionFormSchema>;
