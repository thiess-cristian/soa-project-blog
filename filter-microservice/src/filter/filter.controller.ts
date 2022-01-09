import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { FilterService } from './filter.service';


@Controller('filter')
export class FilterController {

    constructor(private readonly filterService: FilterService) { }

    @MessagePattern("get_tags")
    async getAllTags() {
        return await this.filterService.getAllTags();
    }

    @MessagePattern("get_posts")
    async getPostsWithTags(tags: any) {
        console.log(await this.filterService.getPostsWithTags(tags))
        return this.filterService.getPostsWithTags(tags);
    }
}
