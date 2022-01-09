import { Body, Controller, Get, Post } from '@nestjs/common';
import { FilterService } from './filter.service';


@Controller('filter')
export class FilterController {

    constructor(private readonly filterService: FilterService) { }

    @Get()
    async getTags() {
        console.log("gettags")
        return this.filterService.getTags();
    }

    @Post()
    async getPosts(@Body("tags") tags: string[],) {
        return this.filterService.getPosts(tags);
    }
}
