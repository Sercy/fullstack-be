import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './entities/item.entity';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService {
  private items: Array<Item> = [
    { id: 1, name: 'Test1', isProcessed: false },
    { id: 2, name: 'Test2', isProcessed: true },
    { id: 3, name: 'Test3' },
    { id: 4, name: 'Test4', isProcessed: true },
    { id: 5, name: 'Test5' },
  ];

  // constructor(
  //   @InjectRepository(Item) private itemsRepository: Repository<Item>
  // ) { }

  create(createItemDto: CreateItemDto): Promise<CreateItemDto & Item> {
    return new Promise((res) => {
      const createdItem = { id: this.items.length + 1, ...createItemDto };
      this.items.push(createdItem);
      return res(createdItem);
    });
    // return this.itemsRepository.save(createItemDto);
  }

  findAll(): Promise<Item[]> {
    return new Promise(res => res(this.items));
    // return this.itemsRepository.find();
  }

  findOne(id: number): Promise<Item> {
    return new Promise((res, rej) => {
      try {
        const item = this.items.find((item) => item.id === id);
        if (item) {
          return res(item);
        } else {
          return { code: 400, message: `item#${id} not found` };
        }
      } catch (e) {
        return rej(e);
      }
    });
    // return this.itemsRepository.findOneBy({ id });
  }

  update(id: number, updateItemDto: UpdateItemDto): Promise<UpdateResult> {
    return new Promise(res => {
      this.items = this.items.map(item => item.id === id ? { ...item, updateItemDto } : item);
      return res(new UpdateResult());
    })
    // return this.itemsRepository.update(id, updateItemDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return new Promise(res => {
      this.items = this.items.filter(item => item.id === id);
      return res(new DeleteResult());
    });
    // return this.itemsRepository.delete(id);
  }
}
