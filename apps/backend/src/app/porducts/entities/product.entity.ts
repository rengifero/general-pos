import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => String, { description: 'Example field (placeholder)' })
  id!: number;

  @Field(() => String, { description: 'nombre' })
  name!: string;

  @Field(() => String, { description: 'description' })
  description!: string;

  @Field(() => Float, { description: 'price' })
  price!: number;

  @Field(() => String, { description: 'image' })
  image!: string;

  @Field(() => String, { description: 'strip price id' })
  stripePriceId!: string;

  @Field(() => Boolean)
  isFeatured!: boolean;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
