import { PipeTransform, Injectable, ArgumentMetadata, NotFoundException, BadRequestException } from '@nestjs/common';
import { AuthorService } from '@author/author.service';

@Injectable()
export class AuthorByIdPipe implements PipeTransform<string> {
  constructor(private readonly authorService: AuthorService) {}

  transform(value: string, metadata: ArgumentMetadata) {
    return this.authorService.findOneById(value).then(
      author => {
        if (author === undefined) {
          throw new NotFoundException();
        }

        return author;
      }, () => {
        throw new BadRequestException();
      });
  }
}
