import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'id' })
  id: number;

  @Column()
  @ApiProperty({ example: 'John Doe', description: 'name' })
  name: string;

  @Column()
  @ApiProperty({ example: false, description: 'isProcessed' })
  isProcessed?: boolean;
}
