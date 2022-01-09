import { Injectable } from '@nestjs/common';
import { ClientOptions, ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

const host = process.env.POSTS_MICROSERVICE ? process.env.POSTS_MICROSERVICE : "localhost"

@Injectable()
export class FilterService {

    private microservicesOptions: ClientOptions = {
        transport: Transport.TCP,
        options: {
            host: host,
            port: 3005
        }
    }

    private postMicroserviceProxy: ClientProxy;

    constructor() {
        this.postMicroserviceProxy = ClientProxyFactory.create(this.microservicesOptions);
    }

    async getPostsWithTags(tags: any) {
        const posts = this.postMicroserviceProxy.send<any>("get_posts", "");
        let selectedPosts = []

        posts.forEach((post) => {
            for (let tag in post) {
                if (tags.includes(tag)) {
                    selectedPosts.push(post)
                    break;
                }
            }
        })

        return selectedPosts;
    }
    async getAllTags() {
        let tags = []
        this.postMicroserviceProxy.send<any>("get_posts", "").subscribe(response => {
            response.forEach(element => {
                element.tags.forEach(tag => {
                    tags.push(tag)
                })
            });
        });
        return tags;
    }
}
