import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDefined, IsOptional, IsString } from 'class-validator';

export class CreateItemDto {
  @IsDefined()
  @IsString()
  @ApiProperty({ example: 'John Doe', description: 'name' })
  name!: string;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({ example: false, description: 'isProcessed' })
  isProcessed?: boolean;
}
