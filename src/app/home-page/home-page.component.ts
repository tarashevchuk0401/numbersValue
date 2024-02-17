import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { generateClient, type Client } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import * as subscriptions from '../../graphql/subscriptions';
import { NumberValue, ListNumberValuesQuery } from '../../API';
import { ResponseNumberValues } from '../types/response.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  formNumbers!: FormGroup;
  allNumbers: ResponseNumberValues[] = [];

  public client: any;

  constructor(private fb: FormBuilder) {
    this.client = generateClient();
  }

  public async ngOnInit() {
    this.formNumbers = this.fb.group({
      number: ['', [Validators.required, Validators.maxLength(10)]],
    });

    this.onReport();
  }

  public async onSubmit() {
    if (this.formNumbers.invalid) {
      return;
    }
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
      console.log('Number added', response);
      this.formNumbers.reset();
    } catch (e) {
      console.log('Error adding a number...', e);
    }
  }

  public async onReport() {
    const response = await this.client.graphql({
      query: queries.listNumberValues,
    });
    this.allNumbers = response.data.listNumberValues.items.map(
      (i: ResponseNumberValues) => i.value
    );
  }
}
