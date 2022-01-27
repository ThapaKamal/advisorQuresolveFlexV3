import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesAndPublicationsComponent } from './articles-and-publications.component';

describe('ArticlesAndPublicationsComponent', () => {
  let component: ArticlesAndPublicationsComponent;
  let fixture: ComponentFixture<ArticlesAndPublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesAndPublicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesAndPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
