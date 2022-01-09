import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { FilterService } from './filter.service';


@Controller('filter')
export class FilterController {

    constructor(private readonly filterService: FilterService) { }

    @MessagePattern("get_tags")
    async getAllTags() {
        console.log("get tags micro")
        return await this.filterService.getAllTags();
    }

    @MessagePattern("get_posts")
    getPostsWithTags(tags: any) {
        return this.filterService.getPostsWithTags(tags);
    }
}
