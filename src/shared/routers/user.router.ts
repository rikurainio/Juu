import { publicProcedure, router } from "@src/trpc";
import { users } from "../db/schema/index.schema";
import { eq } from "drizzle-orm";
import { db } from "../db/db";
import { z } from "zod";

export const userRouter = router({
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await db.insert(users).values({
        name: input.name,
      });
    }),

  get: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      await db.select().from(users).where(eq(users.id, input.id));
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    return await db.select().from(users);
  }),

  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        newName: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await db
        .update(users)
        .set({
          name: input.newName,
        })
        .where(eq(users.id, input.id));
    }),

  delete: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await db.delete(users).where(eq(users.id, input.id));
    }),

  deleteAll: publicProcedure.mutation(async ({ ctx }) => {
    await db.delete(users);
  }),
});
