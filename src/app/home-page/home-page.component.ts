import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { generateClient, type Client } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import * as subscriptions from '../../graphql/subscriptions'
import { NumberValue, ListNumberValuesQuery } from '../../API';





@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  formNumbers!: FormGroup;
  allNumbers: number[] = [];

  public client: any;

  constructor(private fb: FormBuilder) {
    this.client = generateClient();
  }

  public async ngOnInit() {
    this.formNumbers = this.fb.group({
      number: [''],
    });


    this.onReport()
  }



  public async onSubmit(todo: any) {
    console.log(this.formNumbers.value);
    const newData = {
      id: new Date().toString(),
      value: Number(this.formNumbers.value.number),
    };
    try {
      const response = await this.client.graphql({
        query: mutations.createNumberValue,
        variables: {
          input: newData,
        },
      });
      console.log('item created!', response);
      this.formNumbers.reset();
    } catch (e) {
      console.log('error creating todo...', e);
    }
  }

  public async onReport(){
    const response = await this.client.graphql({
      query: queries.listNumberValues
    });
    this.allNumbers = response.data.listNumberValues.items.map((i:any) => i.value);
    console.log(this.allNumbers)
    console.log(response.data.listNumberValues.items)
  }
}
