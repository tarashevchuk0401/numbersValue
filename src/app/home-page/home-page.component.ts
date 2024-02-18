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
import { HttpClient } from '@angular/common/http';
import { Apollo, gql } from 'apollo-angular';
import { nanoid } from 'nanoid'


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  formNumbers!: FormGroup;
  allNumbers: ResponseNumberValues[] = [];

  rates: any;
  loading = true;
  error: any;

  public client: any;

  constructor(private fb: FormBuilder, private apollo: Apollo) {
    this.client = generateClient();
  }

  public async ngOnInit() {
    this.formNumbers = this.fb.group({
      number: ['', [Validators.required, Validators.maxLength(10)]],
    });

    this.onReport();

    // this.apollo
    // .watchQuery({
    //   query: gql`
    //     {
    //       rates(currency: "USD") {
    //         currency
    //         rate
    //       }
    //     }
    //   `,
    // })
    // .valueChanges.subscribe((result: any) => {
    //   this.rates = result.data?.rates;
    //   this.loading = result.loading;
    //   this.error = result.error;
    // });
}

    
  


  public async onSubmit() {
    if (this.formNumbers.invalid) {
      return;
    }
    const newData = {
      id: nanoid(),
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
    this.allNumbers = response.data.listNumberValues.items.map((item: any) => item.value)
  }
}
