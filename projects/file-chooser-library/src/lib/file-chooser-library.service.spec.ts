import { TestBed } from '@angular/core/testing';

import { FileChooserLibraryService } from './file-chooser-library.service';

describe('FileChooserLibraryService', () => {
  let service: FileChooserLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileChooserLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
