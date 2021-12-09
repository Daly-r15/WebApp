import { Component, OnInit } from '@angular/core';
import { post } from '../post.component';
import { PostService } from '../post.service';
import { FormBuilder, FormControl, FormGroup  } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-upload-post',
  templateUrl: './upload-post.component.html',
  styleUrls: ['./upload-post.component.css']
})
export class UploadPostComponent implements OnInit {
  
  form: FormGroup;
  
  constructor(private router: Router, private http: HttpClient, private postService: PostService, public fb: FormBuilder) { 
    this.form = this.fb.group({
      username:[''],
      post: ['']
    })
  }

  ngOnInit(): void {
  }
  
  submitForm(){
  var headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
    var formData: any = new FormData();
    formData.append("username", this.form.get('username')?.value);
    formData.append("post", this.form.get('post')?.value);
    var data = JSON.stringify(Object.fromEntries(formData))
    console.log(data)
    this.http.post('https://prod-05.northcentralus.logic.azure.com/workflows/a19b913a3ea04b3581b3365d8b25ad74/triggers/manual/paths/invoke/rest/v1/upload?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=ECmHj6_o2V4A-3i4M6vO1jse5dv7S_9A1JN3IvsjhZU',
    data,{headers}).subscribe(
      (response) => console.log(response)
    
    )
    this.router.navigate(['/Home']);
  };
    
}
  // add(post: string):void{
  //   post = post.trim();
  //   if (!post) {  return; }
  //   this.postService.addPost({ post } as post).subscribe(post => {
  //     this.postService.push(post);
  //   });
  //}
