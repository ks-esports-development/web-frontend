import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSite } from './web-site';

describe('WebSite', () => {
  let component: WebSite;
  let fixture: ComponentFixture<WebSite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebSite]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebSite);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
