import { ApiResponseProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  @ApiResponseProperty({ example: 1 })
  id: number;

  @Column()
  @ApiResponseProperty({ example: 'John Doe' })
  name: string;

  @Column()
  @ApiResponseProperty({ example: false })
  isProcessed?: boolean;
}
