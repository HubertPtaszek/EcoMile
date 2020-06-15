import Vue from "vue";

export const store = Vue.observable({
    isNavOpen: false
});

export const mutations = {
    toggleNav() {
        store.isNavOpen = !store.isNavOpen
    },

    hide() {
        store.isNavOpen = false
    }
}

export const ungroupedCarData = [{
    'ID': 1,
    'Name': 'Mini Cooper - 100zł/d',
    'Category': 'Miejski: pojazd'
  }, {
    'ID': 2,
    'Name': 'Tesla mini - 190zł/d',
    'Category': 'Miejski: pojazd'
  }, {
    'ID': 3,
    'Name': 'Mazda E1 - 180zł/d',
    'Category': 'Miejski: pojazd'
  }, {
    'ID': 4,
    'Name': 'Xiaomi Mija - 50zł/d',
    'Category': 'Miejski: hulajnoga'
  }, {
    'ID': 5,
    'Name': 'Boosted Board1 - 100zł/d',
    'Category': 'Miejski: hulajnoga'
  }, {
    'ID': 6,
    'Name': 'Havoc x1 - 65zł/d',
    'Category': 'Miejski: hulajnoga'
  }, {
    'ID': 7,
    'Name': 'Honda EcoA - 70zł/d',
    'Category': 'Miejski: skuter'
  }, {
    'ID': 8,
    'Name': 'Suzuki ME2 - 120zł/d',
    'Category': 'Miejski: skuter'
  }, {
    'ID': 9,
    'Name': 'Piaggio SR1 Electric - 100zł/d',
    'Category': 'Miejski: skuter'
  }, {
    'ID': 10,
    'Name': 'Mardon 3 - 50zł/d',
    'Category': 'Miejski: segway'
  }, {
    'ID': 11,
    'Name': 'Hyundai M10 - 70zł/d',
    'Category': 'Miejski: segway'
  }, {
    'ID': 12,
    'Name': 'EasyDrive x3- 70zł/d',
    'Category': 'Miejski: segway'
  }, {
    'ID': 13,
    'Name': 'Opel Astra Electric - 210zł/d',
    'Category': 'Samochód: średni'
  }, {
    'ID': 14,
    'Name': 'Tesla Model S - 300zł/d',
    'Category': 'Samochód: średni'
  }, {
    'ID': 15,
    'Name': 'Tesla Model S2- 250zł/d',
    'Category': 'Samochód: średni'
  }, {
    'ID': 16,
    'Name': 'BMW i3 - 300zł/d',
    'Category': 'Samochód: mały'
  }, {
    'ID': 17,
    'Name': 'BMW i4 - 450zł/d',
    'Category': 'Samochód: mały'
  }, {
    'ID': 18,
    'Name': 'Toyota E11 - 340zł/d',
    'Category': 'Samochód: mały'
  }];

export default store