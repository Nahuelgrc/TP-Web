<template>
  <q-page class="row justify-center items-center">
    <div class="column">
      <q-form class="q-gutter-md" 
            style="min-width: 350px"
            ref="form">
        <q-select
          filled
          v-model="paymentMethod"
          :options="paymentMethodOptions"
          label="Payment Method"
          transition-show="flip-up"
          transition-hide="flip-down"
          @input="inputChange"
        />

        <q-input
          square
          filled
          clearable
          v-model="cardNumber"
          type="number"
          label="Card Number (16 numbers)"
          :rules="[cardNumberRule]"
          v-show="!isCash"
        />
        <!-- :rules="[ val => val.length < 16 || 'Incorrect card number' ]" -->
        <q-input
          square
          filled
          clearable
          v-model="cardCode"
          type="number"
          label="Card Code (3 numbers)"
          v-show="!isCash"
          :rules="[cardCodeRule]"
        />
        <q-input
          square
          filled
          clearable
          v-model="ownerCard"
          type="text"
          label="Card Owner"
          v-show="!isCash"
          :rules="[cardOwnerRule]"
        />
        <q-input
          class="q-m-b-xs"
          label="Expiration Date (YYYY/MM/DD)"
          filled
          v-model="expirationDate"
          mask="date"
           :rules="[cardExpirationDateRule]"
          v-show="!isCash"
        >
        <!-- :rules="['date']" -->
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date
                  v-model="expirationDate"
                  :options="optionsDates"
                  minimal
                >
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <div class="q-pa-xs q-m-t-xs full-width row q-gutter-md">
          <q-select
            class="col q-m-t-xs q-pa-t-xs"
            filled
            v-model="payments"
            :options="paymentsOptions"
            label="Payments"
            transition-show="flip-up"
            transition-hide="flip-down"
            v-show="isCreditCard"
            @input="paymentChange"
          />
          <q-input
            class="col"
            square
            filled
            clearable
            v-model="price"
            type="currency"
            label="Payment Price"
            readonly
            v-show="isCreditCard"
            prefix="$"
          />
        </div>
        <q-input
            square
            filled
            clearable
            v-model="total"
            type="currency"
            label="Total"
            readonly
            prefix="$"
          />
        <q-btn
          color="light-green-7"
          size="md"
          class="q-mt-md"
          label="Buy"
          v-on:click="handleBuy"
        />
      </q-form>
    </div>
    <q-item-label />
  </q-page>
</template>
<script>
import './Pages.scss';
import {  BUY_PRODUCTS } from '../store/user/types';
export default {
  data() {
    return {
      paymentMethod: 'Cash',
      paymentMethodOptions: ['Cash', 'Credit Card', 'Debit Card'],
      isCash: true,
      isDebitCard: false,
      isCreditCard: false,
      cardNumber: null,
      cardCode: null,
      ownerCard: '',
      expirationDate: null,
      payments: 1,
      paymentsOptions: [1, 3, 6, 12],
      price: 0,
      total: 0,
      canBuy: true
    };
  },
  async mounted() {
    let sumPrice = 0;
    this.$store.state.user.cart.forEach(element => {
        sumPrice += element.price * element.quantity;
    });
    this.price = this.total = sumPrice;
  },
  watch: {
    models: { 
      handler: function() {
        this.$refs.form.validate()
      },
      deep: true
    },
  },
  methods: {
    handleBuy() {
      this.$refs.form.validate().then((response) => {
        if (response == true){
          this.$store.dispatch(BUY_PRODUCTS, {});
          this.$router.push('/');
        }
      });
      
    },
    optionsDates(date) {
      const dateToday = new Date();
      return (
        date >
        (dateToday.getYear() + 1900).toString() +
          '/' +
          ('00' + (dateToday.getMonth() + 1).toString()).slice(-2) +
          '/' +
          ('00' + dateToday.getDate().toString()).slice(-2)
      );
    },
    inputChange(value){
        if(value === 'Credit Card'){
            this.isCreditCard = true;
            this.isCash = this.isDebitCard = !this.isCreditCard
        }else if(value === 'Debit Card'){
            this.isDebitCard = true;
            this.isCash = this.isCreditCard = !this.isDebitCard
        }else{ //Cash
            this.isCash = true;
            this.isDebitCard = this.isCreditCard = !this.isCash
        }
    },
    paymentChange(value){
      console.log(this.total/value);
      this.price = (this.total/value).toFixed(2);
    },
    cardNumberRule(){
      if(this.isCash)
        return true;
      return ( this.cardNumber != undefined && this.cardNumber.toString().length == 16) || 'Incorrect card number' ;
    },
    cardCodeRule(){
      if(this.isCash)
        return true;
      return (this.cardCode != undefined && this.cardCode.toString().length == 3) || 'Incorrect card code' ;
    },
    cardOwnerRule(){
      if(this.isCash)
        return true;
      return (this.ownerCard != undefined && this.ownerCard.length > 1) || 'Incorrect card owner' ;
    },
    cardExpirationDateRule(){
      if(this.isCash)
        return true;
      return (this.expirationDate != undefined && this.expirationDate.length == 10 && this.isValidDate(this.expirationDate)) || 'Incorrect expiration date' ;
    },
    isValidDate: function(dateStr) {
      let s = dateStr.split('/');
      let d = new Date(+s[0], s[1]-1, +s[2]);
      if (Object.prototype.toString.call(d) === '[object Date]') {
          if (!isNaN(d.getTime()) && d.getDate() == s[2] && d.getMonth() == (s[1] - 1)) {
            return true;
          }
      }
      return false;
    }
  }
};
</script>
