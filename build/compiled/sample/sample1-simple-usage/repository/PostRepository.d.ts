import { Repository } from "typeorm";
import { Post } from "../entity/Post";
export declare class PostRepository {
    private InjectRepository;
    private entityManager;
    constructor(InjectRepository: Repository<Post>);
    saveUsingRepository(post: Post): Promise<Post>;
    saveUsingManager(post: Post): Promise<Post>;
    findAll(): Promise<Post[]>;
}
