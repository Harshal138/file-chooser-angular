import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileChooserLibraryComponent } from './file-chooser-library.component';

describe('FileChooserLibraryComponent', () => {
  let component: FileChooserLibraryComponent;
  let fixture: ComponentFixture<FileChooserLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileChooserLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileChooserLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
