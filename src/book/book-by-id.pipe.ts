import { PipeTransform, Injectable, ArgumentMetadata, NotFoundException, BadRequestException } from '@nestjs/common';
import { BookService } from '@book/book.service';

@Injectable()
export class BookByIdPipe implements PipeTransform<string> {
  constructor(private readonly bookService: BookService) {}

  transform(value: string, metadata: ArgumentMetadata) {
    return this.bookService.findOneById(value).then(
      book => {
        if (book === undefined) {
          throw new NotFoundException();
        }

        return book;
      }, () => {
        throw new BadRequestException();
      });
  }
}
