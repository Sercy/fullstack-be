import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  // ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './entities/item.entity';

// @ApiBearerAuth()
@ApiTags('items')
@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) { }

  @Post()
  @ApiOperation({ summary: 'Create new item' })
  @ApiResponse({
    status: 201,
    description: 'The found all records',
    type: Item,
  })
  // @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() request: CreateItemDto): Promise<Item> {
    return this.itemService.create(request);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'All records',
    type: [Item],
  })
  async findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Found record by id',
    type: Item,
  })
  async findOne(@Param('id') id: string): Promise<Item> {
    return this.itemService.findOne(+id);
  }
}
