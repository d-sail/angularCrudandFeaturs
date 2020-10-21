import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ObservableOperatorService } from '../services/observable-operator.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-observable-operator',
  templateUrl: './observable-operator.component.html',
  styleUrls: ['./observable-operator.component.scss']
})
export class ObservableOperatorComponent implements OnInit {

  postData: FormGroup;
  postArray = [];
  isLoading = false;
  error = null;
  serverTitle = '';

  errorMessage = new Subject<string>();

  constructor(private httpClient: HttpClient,
              private fbForm: FormBuilder,
              private observableOperatorService: ObservableOperatorService) { }

  ngOnInit(): void {
    this.postData = this.fbForm.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
    this.getPostData();
  }

  onSubmit() {
    const sentData = this.postData.value;
    this.observableOperatorService.postData(sentData)
      .subscribe(() => { },
        (error) => {
          alert(JSON.stringify(error.message));
        });
    // this.onHttpCallPost(sentData);
    this.postData.reset();
    // this.getPostData();
  }

  getPostData() {
    this.isLoading = true;
    this.observableOperatorService.getPostData()
      .subscribe(data => {
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            this.postArray.push(data[key]);
          }
        }
        this.isLoading = false;
      }, (error) => {
        const err = error.status;
        console.log(err);
        alert(`Server side error ${err}, Please try again later`);
        this.isLoading = false;
      });
  }

  trackById(index: number, data: any) {
    return data.id;
  }


  onDeletePost() {
    this.observableOperatorService.deletePostData().subscribe(() => {
      this.postArray = [];
    }, (error) => {
      this.error = error.message;
    });
  }

  // this is to practice the databinding $event property porvided by angular
  onTitleEntered(event: Event) {
    this.serverTitle = (event.target as HTMLInputElement).value;
  }

}
