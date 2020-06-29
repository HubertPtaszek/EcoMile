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
    'Category': 'Miejski: pojazd',
    'Cost': 100
  }, {
    'ID': 2,
    'Name': 'Tesla mini - 190zł/d',
    'Category': 'Miejski: pojazd',
    'Cost': 190
  }, {
    'ID': 3,
    'Name': 'Mazda E1 - 180zł/d',
    'Category': 'Miejski: pojazd',
    'Cost': 180
  }, {
    'ID': 4,
    'Name': 'Xiaomi Mija - 50zł/d',
    'Category': 'Miejski: hulajnoga',
    'Cost': 50
  }, {
    'ID': 5,
    'Name': 'Boosted Board1 - 100zł/d',
    'Category': 'Miejski: hulajnoga',
    'Cost': 100
  }, {
    'ID': 6,
    'Name': 'Havoc x1 - 65zł/d',
    'Category': 'Miejski: hulajnoga',
    'Cost': 65
  }, {
    'ID': 7,
    'Name': 'Honda EcoA - 70zł/d',
    'Category': 'Miejski: skuter',
    'Cost': 70
  }, {
    'ID': 8,
    'Name': 'Suzuki ME2 - 120zł/d',
    'Category': 'Miejski: skuter',
    'Cost': 120
  }, {
    'ID': 9,
    'Name': 'Piaggio SR1 Electric - 100zł/d',
    'Category': 'Miejski: skuter',
    'Cost': 100
  }, {
    'ID': 10,
    'Name': 'Mardon 3 - 50zł/d',
    'Category': 'Miejski: segway',
    'Cost': 50
  }, {
    'ID': 11,
    'Name': 'Hyundai M10 - 70zł/d',
    'Category': 'Miejski: segway',
    'Cost': 70
  }, {
    'ID': 12,
    'Name': 'EasyDrive x3- 70zł/d',
    'Category': 'Miejski: segway',
    'Cost': 70
  }, {
    'ID': 13,
    'Name': 'Opel Astra Electric - 210zł/d',
    'Category': 'Samochód: średni',
    'Cost': 210
  }, {
    'ID': 14,
    'Name': 'Tesla Model S - 300zł/d',
    'Category': 'Samochód: średni',
    'Cost': 300
  }, {
    'ID': 15,
    'Name': 'Tesla Model S2- 250zł/d',
    'Category': 'Samochód: średni',
    'Cost': 250
  }, {
    'ID': 16,
    'Name': 'BMW i3 - 300zł/d',
    'Category': 'Samochód: mały',
    'Cost': 300
  }, {
    'ID': 17,
    'Name': 'BMW i4 - 450zł/d',
    'Category': 'Samochód: mały',
    'Cost': 450
  }, {
    'ID': 18,
    'Name': 'Toyota E11 - 340zł/d',
    'Category': 'Samochód: mały',
    'Cost': 340
  }];

export default store