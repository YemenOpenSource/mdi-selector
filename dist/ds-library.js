/*! Material Design IcondsSelector  v1.2.0 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["Ds-library"] = {}, global.Vue));
})(this, (function (exports, vue) { 'use strict';

  var script = vue.defineComponent({
      name: "IconSelector",
      props: {
          modelValue: {
              type: String,
              default: 'approved'
          }, height: {
              type: String,
              default: "300 px"
          }
      },
      emits: ['update:modelValue'],
      setup: function (props, ctx) {
          // const icons = ref<Array>(mdi_icons)
          var query = vue.ref('');
          var icons = vue.ref([
              {
                  "id": "ab-testing",
                  "name": "ab  testing"
              },
              {
                  "id": "abacus",
                  "name": "abacus"
              },
              {
                  "id": "abjad-arabic",
                  "name": "abjad  arabic"
              },
              {
                  "id": "abjad-hebrew",
                  "name": "abjad  hebrew"
              },
              {
                  "id": "abugida-devanagari",
                  "name": "abugida  devanagari"
              },
              {
                  "id": "abugida-thai",
                  "name": "abugida  thai"
              },
              {
                  "id": "access-point",
                  "name": "access  point"
              },
              {
                  "id": "access-point-check",
                  "name": "access  point  check"
              },
              {
                  "id": "access-point-minus",
                  "name": "access  point  minus"
              },
              {
                  "id": "access-point-network",
                  "name": "access  point  network"
              },
              {
                  "id": "access-point-network-off",
                  "name": "access  point  network  off"
              },
              {
                  "id": "access-point-off",
                  "name": "access  point  off"
              },
              {
                  "id": "access-point-plus",
                  "name": "access  point  plus"
              },
              {
                  "id": "access-point-remove",
                  "name": "access  point  remove"
              },
              {
                  "id": "account",
                  "name": "account"
              },
              {
                  "id": "account-alert",
                  "name": "account  alert"
              },
              {
                  "id": "account-alert-outline",
                  "name": "account  alert  outline"
              },
              {
                  "id": "account-arrow-down",
                  "name": "account  arrow  down"
              },
              {
                  "id": "account-arrow-down-outline",
                  "name": "account  arrow  down  outline"
              },
              {
                  "id": "account-arrow-left",
                  "name": "account  arrow  left"
              },
              {
                  "id": "account-arrow-left-outline",
                  "name": "account  arrow  left  outline"
              },
              {
                  "id": "account-arrow-right",
                  "name": "account  arrow  right"
              },
              {
                  "id": "account-arrow-right-outline",
                  "name": "account  arrow  right  outline"
              },
              {
                  "id": "account-arrow-up",
                  "name": "account  arrow  up"
              },
              {
                  "id": "account-arrow-up-outline",
                  "name": "account  arrow  up  outline"
              },
              {
                  "id": "account-badge",
                  "name": "account  badge"
              },
              {
                  "id": "account-badge-outline",
                  "name": "account  badge  outline"
              },
              {
                  "id": "account-box",
                  "name": "account  box"
              },
              {
                  "id": "account-box-multiple",
                  "name": "account  box  multiple"
              },
              {
                  "id": "account-box-multiple-outline",
                  "name": "account  box  multiple  outline"
              },
              {
                  "id": "account-box-outline",
                  "name": "account  box  outline"
              },
              {
                  "id": "account-cancel",
                  "name": "account  cancel"
              },
              {
                  "id": "account-cancel-outline",
                  "name": "account  cancel  outline"
              },
              {
                  "id": "account-card",
                  "name": "account  card"
              },
              {
                  "id": "account-card-outline",
                  "name": "account  card  outline"
              },
              {
                  "id": "account-cash",
                  "name": "account  cash"
              },
              {
                  "id": "account-cash-outline",
                  "name": "account  cash  outline"
              },
              {
                  "id": "account-check",
                  "name": "account  check"
              },
              {
                  "id": "account-check-outline",
                  "name": "account  check  outline"
              },
              {
                  "id": "account-child",
                  "name": "account  child"
              },
              {
                  "id": "account-child-circle",
                  "name": "account  child  circle"
              },
              {
                  "id": "account-child-outline",
                  "name": "account  child  outline"
              },
              {
                  "id": "account-circle",
                  "name": "account  circle"
              },
              {
                  "id": "account-circle-outline",
                  "name": "account  circle  outline"
              },
              {
                  "id": "account-clock",
                  "name": "account  clock"
              },
              {
                  "id": "account-clock-outline",
                  "name": "account  clock  outline"
              },
              {
                  "id": "account-cog",
                  "name": "account  cog"
              },
              {
                  "id": "account-cog-outline",
                  "name": "account  cog  outline"
              },
              {
                  "id": "account-convert",
                  "name": "account  convert"
              },
              {
                  "id": "account-convert-outline",
                  "name": "account  convert  outline"
              },
              {
                  "id": "account-cowboy-hat",
                  "name": "account  cowboy  hat"
              },
              {
                  "id": "account-cowboy-hat-outline",
                  "name": "account  cowboy  hat  outline"
              },
              {
                  "id": "account-credit-card",
                  "name": "account  credit  card"
              },
              {
                  "id": "account-credit-card-outline",
                  "name": "account  credit  card  outline"
              },
              {
                  "id": "account-details",
                  "name": "account  details"
              },
              {
                  "id": "account-details-outline",
                  "name": "account  details  outline"
              },
              {
                  "id": "account-edit",
                  "name": "account  edit"
              },
              {
                  "id": "account-edit-outline",
                  "name": "account  edit  outline"
              },
              {
                  "id": "account-eye",
                  "name": "account  eye"
              },
              {
                  "id": "account-eye-outline",
                  "name": "account  eye  outline"
              },
              {
                  "id": "account-filter",
                  "name": "account  filter"
              },
              {
                  "id": "account-filter-outline",
                  "name": "account  filter  outline"
              },
              {
                  "id": "account-group",
                  "name": "account  group"
              },
              {
                  "id": "account-group-outline",
                  "name": "account  group  outline"
              },
              {
                  "id": "account-hard-hat",
                  "name": "account  hard  hat"
              },
              {
                  "id": "account-hard-hat-outline",
                  "name": "account  hard  hat  outline"
              },
              {
                  "id": "account-heart",
                  "name": "account  heart"
              },
              {
                  "id": "account-heart-outline",
                  "name": "account  heart  outline"
              },
              {
                  "id": "account-injury",
                  "name": "account  injury"
              },
              {
                  "id": "account-injury-outline",
                  "name": "account  injury  outline"
              },
              {
                  "id": "account-key",
                  "name": "account  key"
              },
              {
                  "id": "account-key-outline",
                  "name": "account  key  outline"
              },
              {
                  "id": "account-lock",
                  "name": "account  lock"
              },
              {
                  "id": "account-lock-open",
                  "name": "account  lock  open"
              },
              {
                  "id": "account-lock-open-outline",
                  "name": "account  lock  open  outline"
              },
              {
                  "id": "account-lock-outline",
                  "name": "account  lock  outline"
              },
              {
                  "id": "account-minus",
                  "name": "account  minus"
              },
              {
                  "id": "account-minus-outline",
                  "name": "account  minus  outline"
              },
              {
                  "id": "account-multiple",
                  "name": "account  multiple"
              },
              {
                  "id": "account-multiple-check",
                  "name": "account  multiple  check"
              },
              {
                  "id": "account-multiple-check-outline",
                  "name": "account  multiple  check  outline"
              },
              {
                  "id": "account-multiple-minus",
                  "name": "account  multiple  minus"
              },
              {
                  "id": "account-multiple-minus-outline",
                  "name": "account  multiple  minus  outline"
              },
              {
                  "id": "account-multiple-outline",
                  "name": "account  multiple  outline"
              },
              {
                  "id": "account-multiple-plus",
                  "name": "account  multiple  plus"
              },
              {
                  "id": "account-multiple-plus-outline",
                  "name": "account  multiple  plus  outline"
              },
              {
                  "id": "account-multiple-remove",
                  "name": "account  multiple  remove"
              },
              {
                  "id": "account-multiple-remove-outline",
                  "name": "account  multiple  remove  outline"
              },
              {
                  "id": "account-music",
                  "name": "account  music"
              },
              {
                  "id": "account-music-outline",
                  "name": "account  music  outline"
              },
              {
                  "id": "account-network",
                  "name": "account  network"
              },
              {
                  "id": "account-network-off",
                  "name": "account  network  off"
              },
              {
                  "id": "account-network-off-outline",
                  "name": "account  network  off  outline"
              },
              {
                  "id": "account-network-outline",
                  "name": "account  network  outline"
              },
              {
                  "id": "account-off",
                  "name": "account  off"
              },
              {
                  "id": "account-off-outline",
                  "name": "account  off  outline"
              },
              {
                  "id": "account-outline",
                  "name": "account  outline"
              },
              {
                  "id": "account-plus",
                  "name": "account  plus"
              },
              {
                  "id": "account-plus-outline",
                  "name": "account  plus  outline"
              },
              {
                  "id": "account-question",
                  "name": "account  question"
              },
              {
                  "id": "account-question-outline",
                  "name": "account  question  outline"
              },
              {
                  "id": "account-reactivate",
                  "name": "account  reactivate"
              },
              {
                  "id": "account-reactivate-outline",
                  "name": "account  reactivate  outline"
              },
              {
                  "id": "account-remove",
                  "name": "account  remove"
              },
              {
                  "id": "account-remove-outline",
                  "name": "account  remove  outline"
              },
              {
                  "id": "account-school",
                  "name": "account  school"
              },
              {
                  "id": "account-school-outline",
                  "name": "account  school  outline"
              },
              {
                  "id": "account-search",
                  "name": "account  search"
              },
              {
                  "id": "account-search-outline",
                  "name": "account  search  outline"
              },
              {
                  "id": "account-settings",
                  "name": "account  settings"
              },
              {
                  "id": "account-settings-outline",
                  "name": "account  settings  outline"
              },
              {
                  "id": "account-star",
                  "name": "account  star"
              },
              {
                  "id": "account-star-outline",
                  "name": "account  star  outline"
              },
              {
                  "id": "account-supervisor",
                  "name": "account  supervisor"
              },
              {
                  "id": "account-supervisor-circle",
                  "name": "account  supervisor  circle"
              },
              {
                  "id": "account-supervisor-circle-outline",
                  "name": "account  supervisor  circle  outline"
              },
              {
                  "id": "account-supervisor-outline",
                  "name": "account  supervisor  outline"
              },
              {
                  "id": "account-switch",
                  "name": "account  switch"
              },
              {
                  "id": "account-switch-outline",
                  "name": "account  switch  outline"
              },
              {
                  "id": "account-sync",
                  "name": "account  sync"
              },
              {
                  "id": "account-sync-outline",
                  "name": "account  sync  outline"
              },
              {
                  "id": "account-tag",
                  "name": "account  tag"
              },
              {
                  "id": "account-tag-outline",
                  "name": "account  tag  outline"
              },
              {
                  "id": "account-tie",
                  "name": "account  tie"
              },
              {
                  "id": "account-tie-hat",
                  "name": "account  tie  hat"
              },
              {
                  "id": "account-tie-hat-outline",
                  "name": "account  tie  hat  outline"
              },
              {
                  "id": "account-tie-outline",
                  "name": "account  tie  outline"
              },
              {
                  "id": "account-tie-voice",
                  "name": "account  tie  voice"
              },
              {
                  "id": "account-tie-voice-off",
                  "name": "account  tie  voice  off"
              },
              {
                  "id": "account-tie-voice-off-outline",
                  "name": "account  tie  voice  off  outline"
              },
              {
                  "id": "account-tie-voice-outline",
                  "name": "account  tie  voice  outline"
              },
              {
                  "id": "account-tie-woman",
                  "name": "account  tie  woman"
              },
              {
                  "id": "account-voice",
                  "name": "account  voice"
              },
              {
                  "id": "account-voice-off",
                  "name": "account  voice  off"
              },
              {
                  "id": "account-wrench",
                  "name": "account  wrench"
              },
              {
                  "id": "account-wrench-outline",
                  "name": "account  wrench  outline"
              },
              {
                  "id": "adjust",
                  "name": "adjust"
              },
              {
                  "id": "advertisements",
                  "name": "advertisements"
              },
              {
                  "id": "advertisements-off",
                  "name": "advertisements  off"
              },
              {
                  "id": "air-conditioner",
                  "name": "air  conditioner"
              },
              {
                  "id": "air-filter",
                  "name": "air  filter"
              },
              {
                  "id": "air-horn",
                  "name": "air  horn"
              },
              {
                  "id": "air-humidifier",
                  "name": "air  humidifier"
              },
              {
                  "id": "air-humidifier-off",
                  "name": "air  humidifier  off"
              },
              {
                  "id": "air-purifier",
                  "name": "air  purifier"
              },
              {
                  "id": "air-purifier-off",
                  "name": "air  purifier  off"
              },
              {
                  "id": "airbag",
                  "name": "airbag"
              },
              {
                  "id": "airballoon",
                  "name": "airballoon"
              },
              {
                  "id": "airballoon-outline",
                  "name": "airballoon  outline"
              },
              {
                  "id": "airplane",
                  "name": "airplane"
              },
              {
                  "id": "airplane-alert",
                  "name": "airplane  alert"
              },
              {
                  "id": "airplane-check",
                  "name": "airplane  check"
              },
              null,
              {
                  "id": "airplane-remove",
                  "name": "airplane  remove"
              },
              {
                  "id": "airplane-search",
                  "name": "airplane  search"
              },
              {
                  "id": "airplane-settings",
                  "name": "airplane  settings"
              },
              {
                  "id": "airplane-takeoff",
                  "name": "airplane  takeoff"
              },
              {
                  "id": "airport",
                  "name": "airport"
              },
              {
                  "id": "alarm",
                  "name": "alarm"
              },
              {
                  "id": "alarm-bell",
                  "name": "alarm  bell"
              },
              {
                  "id": "alarm-check",
                  "name": "alarm  check"
              },
              {
                  "id": "alarm-light",
                  "name": "alarm  light"
              },
              {
                  "id": "alarm-light-off",
                  "name": "alarm  light  off"
              },
              {
                  "id": "alarm-light-off-outline",
                  "name": "alarm  light  off  outline"
              },
              {
                  "id": "alarm-light-outline",
                  "name": "alarm  light  outline"
              },
              {
                  "id": "alarm-multiple",
                  "name": "alarm  multiple"
              },
              {
                  "id": "alarm-note",
                  "name": "alarm  note"
              },
              {
                  "id": "alarm-note-off",
                  "name": "alarm  note  off"
              },
              {
                  "id": "alarm-off",
                  "name": "alarm  off"
              },
              {
                  "id": "alarm-panel",
                  "name": "alarm  panel"
              },
              {
                  "id": "alarm-panel-outline",
                  "name": "alarm  panel  outline"
              },
              {
                  "id": "alarm-plus",
                  "name": "alarm  plus"
              },
              {
                  "id": "alarm-snooze",
                  "name": "alarm  snooze"
              },
              {
                  "id": "album",
                  "name": "album"
              },
              {
                  "id": "alert",
                  "name": "alert"
              },
              {
                  "id": "alert-box",
                  "name": "alert  box"
              },
              {
                  "id": "alert-box-outline",
                  "name": "alert  box  outline"
              },
              {
                  "id": "alert-circle",
                  "name": "alert  circle"
              },
              {
                  "id": "alert-circle-check",
                  "name": "alert  circle  check"
              },
              {
                  "id": "alert-circle-check-outline",
                  "name": "alert  circle  check  outline"
              },
              {
                  "id": "alert-circle-outline",
                  "name": "alert  circle  outline"
              },
              {
                  "id": "alert-decagram",
                  "name": "alert  decagram"
              },
              {
                  "id": "alert-decagram-outline",
                  "name": "alert  decagram  outline"
              },
              {
                  "id": "alert-minus",
                  "name": "alert  minus"
              },
              {
                  "id": "alert-minus-outline",
                  "name": "alert  minus  outline"
              },
              {
                  "id": "alert-octagon",
                  "name": "alert  octagon"
              },
              {
                  "id": "alert-octagon-outline",
                  "name": "alert  octagon  outline"
              },
              {
                  "id": "alert-octagram",
                  "name": "alert  octagram"
              },
              {
                  "id": "alert-octagram-outline",
                  "name": "alert  octagram  outline"
              },
              {
                  "id": "alert-outline",
                  "name": "alert  outline"
              },
              {
                  "id": "alert-plus",
                  "name": "alert  plus"
              },
              {
                  "id": "alert-plus-outline",
                  "name": "alert  plus  outline"
              },
              {
                  "id": "alert-remove",
                  "name": "alert  remove"
              },
              {
                  "id": "alert-remove-outline",
                  "name": "alert  remove  outline"
              },
              {
                  "id": "alert-rhombus",
                  "name": "alert  rhombus"
              },
              {
                  "id": "alert-rhombus-outline",
                  "name": "alert  rhombus  outline"
              },
              {
                  "id": "alien",
                  "name": "alien"
              },
              {
                  "id": "alien-outline",
                  "name": "alien  outline"
              },
              {
                  "id": "align-horizontal-center",
                  "name": "align  horizontal  center"
              },
              {
                  "id": "align-horizontal-distribute",
                  "name": "align  horizontal  distribute"
              },
              {
                  "id": "align-horizontal-left",
                  "name": "align  horizontal  left"
              },
              {
                  "id": "align-horizontal-right",
                  "name": "align  horizontal  right"
              },
              {
                  "id": "align-vertical-bottom",
                  "name": "align  vertical  bottom"
              },
              {
                  "id": "align-vertical-center",
                  "name": "align  vertical  center"
              },
              {
                  "id": "align-vertical-distribute",
                  "name": "align  vertical  distribute"
              },
              {
                  "id": "align-vertical-top",
                  "name": "align  vertical  top"
              },
              {
                  "id": "all-inclusive",
                  "name": "all  inclusive"
              },
              {
                  "id": "all-inclusive-box",
                  "name": "all  inclusive  box"
              },
              {
                  "id": "all-inclusive-box-outline",
                  "name": "all  inclusive  box  outline"
              },
              {
                  "id": "allergy",
                  "name": "allergy"
              },
              {
                  "id": "alpha",
                  "name": "alpha"
              },
              {
                  "id": "alpha-a",
                  "name": "alpha  a"
              },
              {
                  "id": "alpha-a-box",
                  "name": "alpha  a  box"
              },
              {
                  "id": "alpha-a-box-outline",
                  "name": "alpha  a  box  outline"
              },
              {
                  "id": "alpha-a-circle",
                  "name": "alpha  a  circle"
              },
              {
                  "id": "alpha-a-circle-outline",
                  "name": "alpha  a  circle  outline"
              },
              {
                  "id": "alpha-b",
                  "name": "alpha  b"
              },
              {
                  "id": "alpha-b-box",
                  "name": "alpha  b  box"
              },
              {
                  "id": "alpha-b-box-outline",
                  "name": "alpha  b  box  outline"
              },
              {
                  "id": "alpha-b-circle",
                  "name": "alpha  b  circle"
              },
              {
                  "id": "alpha-b-circle-outline",
                  "name": "alpha  b  circle  outline"
              },
              {
                  "id": "alpha-c",
                  "name": "alpha  c"
              },
              {
                  "id": "alpha-c-box",
                  "name": "alpha  c  box"
              },
              {
                  "id": "alpha-c-box-outline",
                  "name": "alpha  c  box  outline"
              },
              {
                  "id": "alpha-c-circle",
                  "name": "alpha  c  circle"
              },
              {
                  "id": "alpha-c-circle-outline",
                  "name": "alpha  c  circle  outline"
              },
              {
                  "id": "alpha-d",
                  "name": "alpha  d"
              },
              {
                  "id": "alpha-d-box",
                  "name": "alpha  d  box"
              },
              {
                  "id": "alpha-d-box-outline",
                  "name": "alpha  d  box  outline"
              },
              {
                  "id": "alpha-d-circle",
                  "name": "alpha  d  circle"
              },
              {
                  "id": "alpha-d-circle-outline",
                  "name": "alpha  d  circle  outline"
              },
              {
                  "id": "alpha-e",
                  "name": "alpha  e"
              },
              {
                  "id": "alpha-e-box",
                  "name": "alpha  e  box"
              },
              {
                  "id": "alpha-e-box-outline",
                  "name": "alpha  e  box  outline"
              },
              {
                  "id": "alpha-e-circle",
                  "name": "alpha  e  circle"
              },
              {
                  "id": "alpha-e-circle-outline",
                  "name": "alpha  e  circle  outline"
              },
              {
                  "id": "alpha-f",
                  "name": "alpha  f"
              },
              {
                  "id": "alpha-f-box",
                  "name": "alpha  f  box"
              },
              {
                  "id": "alpha-f-box-outline",
                  "name": "alpha  f  box  outline"
              },
              {
                  "id": "alpha-f-circle",
                  "name": "alpha  f  circle"
              },
              {
                  "id": "alpha-f-circle-outline",
                  "name": "alpha  f  circle  outline"
              },
              {
                  "id": "alpha-g",
                  "name": "alpha  g"
              },
              {
                  "id": "alpha-g-box",
                  "name": "alpha  g  box"
              },
              {
                  "id": "alpha-g-box-outline",
                  "name": "alpha  g  box  outline"
              },
              {
                  "id": "alpha-g-circle",
                  "name": "alpha  g  circle"
              },
              {
                  "id": "alpha-g-circle-outline",
                  "name": "alpha  g  circle  outline"
              },
              {
                  "id": "alpha-h",
                  "name": "alpha  h"
              },
              {
                  "id": "alpha-h-box",
                  "name": "alpha  h  box"
              },
              {
                  "id": "alpha-h-box-outline",
                  "name": "alpha  h  box  outline"
              },
              {
                  "id": "alpha-h-circle",
                  "name": "alpha  h  circle"
              },
              {
                  "id": "alpha-h-circle-outline",
                  "name": "alpha  h  circle  outline"
              },
              {
                  "id": "alpha-i",
                  "name": "alpha  i"
              },
              {
                  "id": "alpha-i-box",
                  "name": "alpha  i  box"
              },
              {
                  "id": "alpha-i-box-outline",
                  "name": "alpha  i  box  outline"
              },
              {
                  "id": "alpha-i-circle",
                  "name": "alpha  i  circle"
              },
              {
                  "id": "alpha-i-circle-outline",
                  "name": "alpha  i  circle  outline"
              },
              {
                  "id": "alpha-j",
                  "name": "alpha  j"
              },
              {
                  "id": "alpha-j-box",
                  "name": "alpha  j  box"
              },
              {
                  "id": "alpha-j-box-outline",
                  "name": "alpha  j  box  outline"
              },
              {
                  "id": "alpha-j-circle",
                  "name": "alpha  j  circle"
              },
              {
                  "id": "alpha-j-circle-outline",
                  "name": "alpha  j  circle  outline"
              },
              {
                  "id": "alpha-k",
                  "name": "alpha  k"
              },
              {
                  "id": "alpha-k-box",
                  "name": "alpha  k  box"
              },
              {
                  "id": "alpha-k-box-outline",
                  "name": "alpha  k  box  outline"
              },
              {
                  "id": "alpha-k-circle",
                  "name": "alpha  k  circle"
              },
              {
                  "id": "alpha-k-circle-outline",
                  "name": "alpha  k  circle  outline"
              },
              {
                  "id": "alpha-l",
                  "name": "alpha  l"
              },
              {
                  "id": "alpha-l-box",
                  "name": "alpha  l  box"
              },
              {
                  "id": "alpha-l-box-outline",
                  "name": "alpha  l  box  outline"
              },
              {
                  "id": "alpha-l-circle",
                  "name": "alpha  l  circle"
              },
              {
                  "id": "alpha-l-circle-outline",
                  "name": "alpha  l  circle  outline"
              },
              {
                  "id": "alpha-m",
                  "name": "alpha  m"
              },
              {
                  "id": "alpha-m-box",
                  "name": "alpha  m  box"
              },
              {
                  "id": "alpha-m-box-outline",
                  "name": "alpha  m  box  outline"
              },
              {
                  "id": "alpha-m-circle",
                  "name": "alpha  m  circle"
              },
              {
                  "id": "alpha-m-circle-outline",
                  "name": "alpha  m  circle  outline"
              },
              {
                  "id": "alpha-n",
                  "name": "alpha  n"
              },
              {
                  "id": "alpha-n-box",
                  "name": "alpha  n  box"
              },
              {
                  "id": "alpha-n-box-outline",
                  "name": "alpha  n  box  outline"
              },
              {
                  "id": "alpha-n-circle",
                  "name": "alpha  n  circle"
              },
              {
                  "id": "alpha-n-circle-outline",
                  "name": "alpha  n  circle  outline"
              },
              {
                  "id": "alpha-o",
                  "name": "alpha  o"
              },
              {
                  "id": "alpha-o-box",
                  "name": "alpha  o  box"
              },
              {
                  "id": "alpha-o-box-outline",
                  "name": "alpha  o  box  outline"
              },
              {
                  "id": "alpha-o-circle",
                  "name": "alpha  o  circle"
              },
              {
                  "id": "alpha-o-circle-outline",
                  "name": "alpha  o  circle  outline"
              },
              {
                  "id": "alpha-p",
                  "name": "alpha  p"
              },
              {
                  "id": "alpha-p-box",
                  "name": "alpha  p  box"
              },
              {
                  "id": "alpha-p-box-outline",
                  "name": "alpha  p  box  outline"
              },
              {
                  "id": "alpha-p-circle",
                  "name": "alpha  p  circle"
              },
              {
                  "id": "alpha-p-circle-outline",
                  "name": "alpha  p  circle  outline"
              },
              {
                  "id": "alpha-q",
                  "name": "alpha  q"
              },
              {
                  "id": "alpha-q-box",
                  "name": "alpha  q  box"
              },
              {
                  "id": "alpha-q-box-outline",
                  "name": "alpha  q  box  outline"
              },
              {
                  "id": "alpha-q-circle",
                  "name": "alpha  q  circle"
              },
              {
                  "id": "alpha-q-circle-outline",
                  "name": "alpha  q  circle  outline"
              },
              {
                  "id": "alpha-r",
                  "name": "alpha  r"
              },
              {
                  "id": "alpha-r-box",
                  "name": "alpha  r  box"
              },
              {
                  "id": "alpha-r-box-outline",
                  "name": "alpha  r  box  outline"
              },
              {
                  "id": "alpha-r-circle",
                  "name": "alpha  r  circle"
              },
              {
                  "id": "alpha-r-circle-outline",
                  "name": "alpha  r  circle  outline"
              },
              {
                  "id": "alpha-s",
                  "name": "alpha  s"
              },
              {
                  "id": "alpha-s-box",
                  "name": "alpha  s  box"
              },
              {
                  "id": "alpha-s-box-outline",
                  "name": "alpha  s  box  outline"
              },
              {
                  "id": "alpha-s-circle",
                  "name": "alpha  s  circle"
              },
              {
                  "id": "alpha-s-circle-outline",
                  "name": "alpha  s  circle  outline"
              },
              {
                  "id": "alpha-t",
                  "name": "alpha  t"
              },
              {
                  "id": "alpha-t-box",
                  "name": "alpha  t  box"
              },
              {
                  "id": "alpha-t-box-outline",
                  "name": "alpha  t  box  outline"
              },
              {
                  "id": "alpha-t-circle",
                  "name": "alpha  t  circle"
              },
              {
                  "id": "alpha-t-circle-outline",
                  "name": "alpha  t  circle  outline"
              },
              {
                  "id": "alpha-u",
                  "name": "alpha  u"
              },
              {
                  "id": "alpha-u-box",
                  "name": "alpha  u  box"
              },
              {
                  "id": "alpha-u-box-outline",
                  "name": "alpha  u  box  outline"
              },
              {
                  "id": "alpha-u-circle",
                  "name": "alpha  u  circle"
              },
              {
                  "id": "alpha-u-circle-outline",
                  "name": "alpha  u  circle  outline"
              },
              {
                  "id": "alpha-v",
                  "name": "alpha  v"
              },
              {
                  "id": "alpha-v-box",
                  "name": "alpha  v  box"
              },
              {
                  "id": "alpha-v-box-outline",
                  "name": "alpha  v  box  outline"
              },
              {
                  "id": "alpha-v-circle",
                  "name": "alpha  v  circle"
              },
              {
                  "id": "alpha-v-circle-outline",
                  "name": "alpha  v  circle  outline"
              },
              {
                  "id": "alpha-w",
                  "name": "alpha  w"
              },
              {
                  "id": "alpha-w-box",
                  "name": "alpha  w  box"
              },
              {
                  "id": "alpha-w-box-outline",
                  "name": "alpha  w  box  outline"
              },
              {
                  "id": "alpha-w-circle",
                  "name": "alpha  w  circle"
              },
              {
                  "id": "alpha-w-circle-outline",
                  "name": "alpha  w  circle  outline"
              },
              {
                  "id": "alpha-x",
                  "name": "alpha  x"
              },
              {
                  "id": "alpha-x-box",
                  "name": "alpha  x  box"
              },
              {
                  "id": "alpha-x-box-outline",
                  "name": "alpha  x  box  outline"
              },
              {
                  "id": "alpha-x-circle",
                  "name": "alpha  x  circle"
              },
              {
                  "id": "alpha-x-circle-outline",
                  "name": "alpha  x  circle  outline"
              },
              {
                  "id": "alpha-y",
                  "name": "alpha  y"
              },
              {
                  "id": "alpha-y-box",
                  "name": "alpha  y  box"
              },
              {
                  "id": "alpha-y-box-outline",
                  "name": "alpha  y  box  outline"
              },
              {
                  "id": "alpha-y-circle",
                  "name": "alpha  y  circle"
              },
              {
                  "id": "alpha-y-circle-outline",
                  "name": "alpha  y  circle  outline"
              },
              {
                  "id": "alpha-z",
                  "name": "alpha  z"
              },
              {
                  "id": "alpha-z-box",
                  "name": "alpha  z  box"
              },
              {
                  "id": "alpha-z-box-outline",
                  "name": "alpha  z  box  outline"
              },
              {
                  "id": "alpha-z-circle",
                  "name": "alpha  z  circle"
              },
              {
                  "id": "alpha-z-circle-outline",
                  "name": "alpha  z  circle  outline"
              },
              {
                  "id": "alphabet-aurebesh",
                  "name": "alphabet  aurebesh"
              },
              {
                  "id": "alphabet-cyrillic",
                  "name": "alphabet  cyrillic"
              },
              {
                  "id": "alphabet-greek",
                  "name": "alphabet  greek"
              },
              {
                  "id": "alphabet-latin",
                  "name": "alphabet  latin"
              },
              {
                  "id": "alphabet-piqad",
                  "name": "alphabet  piqad"
              },
              {
                  "id": "alphabet-tengwar",
                  "name": "alphabet  tengwar"
              },
              {
                  "id": "alphabetical",
                  "name": "alphabetical"
              },
              {
                  "id": "alphabetical-off",
                  "name": "alphabetical  off"
              },
              {
                  "id": "alphabetical-variant",
                  "name": "alphabetical  variant"
              },
              {
                  "id": "alphabetical-variant-off",
                  "name": "alphabetical  variant  off"
              },
              {
                  "id": "altimeter",
                  "name": "altimeter"
              },
              {
                  "id": "ambulance",
                  "name": "ambulance"
              },
              {
                  "id": "ammunition",
                  "name": "ammunition"
              },
              {
                  "id": "ampersand",
                  "name": "ampersand"
              },
              {
                  "id": "amplifier",
                  "name": "amplifier"
              },
              {
                  "id": "amplifier-off",
                  "name": "amplifier  off"
              },
              {
                  "id": "anchor",
                  "name": "anchor"
              },
              {
                  "id": "android",
                  "name": "android"
              },
              {
                  "id": "android-studio",
                  "name": "android  studio"
              },
              {
                  "id": "angle-acute",
                  "name": "angle  acute"
              },
              {
                  "id": "angle-obtuse",
                  "name": "angle  obtuse"
              },
              {
                  "id": "angle-right",
                  "name": "angle  right"
              },
              {
                  "id": "angular",
                  "name": "angular"
              },
              {
                  "id": "angularjs",
                  "name": "angularjs"
              },
              {
                  "id": "animation",
                  "name": "animation"
              },
              {
                  "id": "animation-outline",
                  "name": "animation  outline"
              },
              {
                  "id": "animation-play",
                  "name": "animation  play"
              },
              {
                  "id": "animation-play-outline",
                  "name": "animation  play  outline"
              },
              {
                  "id": "ansible",
                  "name": "ansible"
              },
              {
                  "id": "antenna",
                  "name": "antenna"
              },
              {
                  "id": "anvil",
                  "name": "anvil"
              },
              {
                  "id": "apache-kafka",
                  "name": "apache  kafka"
              },
              {
                  "id": "api",
                  "name": "api"
              },
              {
                  "id": "api-off",
                  "name": "api  off"
              },
              {
                  "id": "apple",
                  "name": "apple"
              },
              {
                  "id": "apple-finder",
                  "name": "apple  finder"
              },
              {
                  "id": "apple-icloud",
                  "name": "apple  icloud"
              },
              {
                  "id": "apple-ios",
                  "name": "apple  ios"
              },
              {
                  "id": "apple-keyboard-caps",
                  "name": "apple  keyboard  caps"
              },
              {
                  "id": "apple-keyboard-command",
                  "name": "apple  keyboard  command"
              },
              {
                  "id": "apple-keyboard-control",
                  "name": "apple  keyboard  control"
              },
              {
                  "id": "apple-keyboard-option",
                  "name": "apple  keyboard  option"
              },
              {
                  "id": "apple-keyboard-shift",
                  "name": "apple  keyboard  shift"
              },
              {
                  "id": "apple-safari",
                  "name": "apple  safari"
              },
              {
                  "id": "application",
                  "name": "application"
              },
              {
                  "id": "application-array",
                  "name": "application  array"
              },
              {
                  "id": "application-array-outline",
                  "name": "application  array  outline"
              },
              {
                  "id": "application-braces",
                  "name": "application  braces"
              },
              {
                  "id": "application-braces-outline",
                  "name": "application  braces  outline"
              },
              {
                  "id": "application-brackets",
                  "name": "application  brackets"
              },
              {
                  "id": "application-brackets-outline",
                  "name": "application  brackets  outline"
              },
              {
                  "id": "application-cog",
                  "name": "application  cog"
              },
              {
                  "id": "application-cog-outline",
                  "name": "application  cog  outline"
              },
              {
                  "id": "application-edit",
                  "name": "application  edit"
              },
              {
                  "id": "application-edit-outline",
                  "name": "application  edit  outline"
              },
              {
                  "id": "application-export",
                  "name": "application  export"
              },
              {
                  "id": "application-import",
                  "name": "application  import"
              },
              {
                  "id": "application-outline",
                  "name": "application  outline"
              },
              {
                  "id": "application-parentheses",
                  "name": "application  parentheses"
              },
              {
                  "id": "application-parentheses-outline",
                  "name": "application  parentheses  outline"
              },
              {
                  "id": "application-settings",
                  "name": "application  settings"
              },
              {
                  "id": "application-settings-outline",
                  "name": "application  settings  outline"
              },
              {
                  "id": "application-variable",
                  "name": "application  variable"
              },
              {
                  "id": "application-variable-outline",
                  "name": "application  variable  outline"
              },
              {
                  "id": "approximately-equal",
                  "name": "approximately  equal"
              },
              {
                  "id": "approximately-equal-box",
                  "name": "approximately  equal  box"
              },
              {
                  "id": "apps",
                  "name": "apps"
              },
              {
                  "id": "apps-box",
                  "name": "apps  box"
              },
              {
                  "id": "arch",
                  "name": "arch"
              },
              {
                  "id": "archive",
                  "name": "archive"
              },
              {
                  "id": "archive-alert",
                  "name": "archive  alert"
              },
              {
                  "id": "archive-alert-outline",
                  "name": "archive  alert  outline"
              },
              {
                  "id": "archive-arrow-down",
                  "name": "archive  arrow  down"
              },
              {
                  "id": "archive-arrow-down-outline",
                  "name": "archive  arrow  down  outline"
              },
              {
                  "id": "archive-arrow-up",
                  "name": "archive  arrow  up"
              },
              {
                  "id": "archive-arrow-up-outline",
                  "name": "archive  arrow  up  outline"
              },
              {
                  "id": "archive-cancel",
                  "name": "archive  cancel"
              },
              {
                  "id": "archive-cancel-outline",
                  "name": "archive  cancel  outline"
              },
              {
                  "id": "archive-check",
                  "name": "archive  check"
              },
              {
                  "id": "archive-check-outline",
                  "name": "archive  check  outline"
              },
              {
                  "id": "archive-clock",
                  "name": "archive  clock"
              },
              {
                  "id": "archive-clock-outline",
                  "name": "archive  clock  outline"
              },
              {
                  "id": "archive-cog",
                  "name": "archive  cog"
              },
              {
                  "id": "archive-cog-outline",
                  "name": "archive  cog  outline"
              },
              {
                  "id": "archive-edit",
                  "name": "archive  edit"
              },
              {
                  "id": "archive-edit-outline",
                  "name": "archive  edit  outline"
              },
              {
                  "id": "archive-eye",
                  "name": "archive  eye"
              },
              {
                  "id": "archive-eye-outline",
                  "name": "archive  eye  outline"
              },
              {
                  "id": "archive-lock",
                  "name": "archive  lock"
              },
              {
                  "id": "archive-lock-open",
                  "name": "archive  lock  open"
              },
              {
                  "id": "archive-lock-open-outline",
                  "name": "archive  lock  open  outline"
              },
              {
                  "id": "archive-lock-outline",
                  "name": "archive  lock  outline"
              },
              {
                  "id": "archive-marker",
                  "name": "archive  marker"
              },
              {
                  "id": "archive-marker-outline",
                  "name": "archive  marker  outline"
              },
              {
                  "id": "archive-minus",
                  "name": "archive  minus"
              },
              {
                  "id": "archive-minus-outline",
                  "name": "archive  minus  outline"
              },
              {
                  "id": "archive-music",
                  "name": "archive  music"
              },
              {
                  "id": "archive-music-outline",
                  "name": "archive  music  outline"
              },
              {
                  "id": "archive-off",
                  "name": "archive  off"
              },
              {
                  "id": "archive-off-outline",
                  "name": "archive  off  outline"
              },
              {
                  "id": "archive-outline",
                  "name": "archive  outline"
              },
              {
                  "id": "archive-plus",
                  "name": "archive  plus"
              },
              {
                  "id": "archive-plus-outline",
                  "name": "archive  plus  outline"
              },
              {
                  "id": "archive-refresh",
                  "name": "archive  refresh"
              },
              {
                  "id": "archive-refresh-outline",
                  "name": "archive  refresh  outline"
              },
              {
                  "id": "archive-remove",
                  "name": "archive  remove"
              },
              {
                  "id": "archive-remove-outline",
                  "name": "archive  remove  outline"
              },
              {
                  "id": "archive-search",
                  "name": "archive  search"
              },
              {
                  "id": "archive-search-outline",
                  "name": "archive  search  outline"
              },
              {
                  "id": "archive-settings",
                  "name": "archive  settings"
              },
              {
                  "id": "archive-settings-outline",
                  "name": "archive  settings  outline"
              },
              {
                  "id": "archive-star",
                  "name": "archive  star"
              },
              {
                  "id": "archive-star-outline",
                  "name": "archive  star  outline"
              },
              {
                  "id": "archive-sync",
                  "name": "archive  sync"
              },
              {
                  "id": "archive-sync-outline",
                  "name": "archive  sync  outline"
              },
              {
                  "id": "arm-flex",
                  "name": "arm  flex"
              },
              {
                  "id": "arm-flex-outline",
                  "name": "arm  flex  outline"
              },
              {
                  "id": "arrange-bring-forward",
                  "name": "arrange  bring  forward"
              },
              {
                  "id": "arrange-bring-to-front",
                  "name": "arrange  bring  to  front"
              },
              {
                  "id": "arrange-send-backward",
                  "name": "arrange  send  backward"
              },
              {
                  "id": "arrange-send-to-back",
                  "name": "arrange  send  to  back"
              },
              {
                  "id": "arrow-all",
                  "name": "arrow  all"
              },
              {
                  "id": "arrow-bottom-left",
                  "name": "arrow  bottom  left"
              },
              {
                  "id": "arrow-bottom-left-bold-box",
                  "name": "arrow  bottom  left  bold  box"
              },
              {
                  "id": "arrow-bottom-left-bold-box-outline",
                  "name": "arrow  bottom  left  bold  box  outline"
              },
              {
                  "id": "arrow-bottom-left-bold-outline",
                  "name": "arrow  bottom  left  bold  outline"
              },
              {
                  "id": "arrow-bottom-left-thick",
                  "name": "arrow  bottom  left  thick"
              },
              {
                  "id": "arrow-bottom-left-thin",
                  "name": "arrow  bottom  left  thin"
              },
              {
                  "id": "arrow-bottom-left-thin-circle-outline",
                  "name": "arrow  bottom  left  thin  circle  outline"
              },
              {
                  "id": "arrow-bottom-right",
                  "name": "arrow  bottom  right"
              },
              {
                  "id": "arrow-bottom-right-bold-box",
                  "name": "arrow  bottom  right  bold  box"
              },
              {
                  "id": "arrow-bottom-right-bold-box-outline",
                  "name": "arrow  bottom  right  bold  box  outline"
              },
              {
                  "id": "arrow-bottom-right-bold-outline",
                  "name": "arrow  bottom  right  bold  outline"
              },
              {
                  "id": "arrow-bottom-right-thick",
                  "name": "arrow  bottom  right  thick"
              },
              {
                  "id": "arrow-bottom-right-thin",
                  "name": "arrow  bottom  right  thin"
              },
              {
                  "id": "arrow-bottom-right-thin-circle-outline",
                  "name": "arrow  bottom  right  thin  circle  outline"
              },
              {
                  "id": "arrow-collapse",
                  "name": "arrow  collapse"
              },
              {
                  "id": "arrow-collapse-all",
                  "name": "arrow  collapse  all"
              },
              {
                  "id": "arrow-collapse-down",
                  "name": "arrow  collapse  down"
              },
              {
                  "id": "arrow-collapse-horizontal",
                  "name": "arrow  collapse  horizontal"
              },
              {
                  "id": "arrow-collapse-left",
                  "name": "arrow  collapse  left"
              },
              {
                  "id": "arrow-collapse-right",
                  "name": "arrow  collapse  right"
              },
              {
                  "id": "arrow-collapse-up",
                  "name": "arrow  collapse  up"
              },
              {
                  "id": "arrow-collapse-vertical",
                  "name": "arrow  collapse  vertical"
              },
              {
                  "id": "arrow-decision",
                  "name": "arrow  decision"
              },
              {
                  "id": "arrow-decision-auto",
                  "name": "arrow  decision  auto"
              },
              {
                  "id": "arrow-decision-auto-outline",
                  "name": "arrow  decision  auto  outline"
              },
              {
                  "id": "arrow-decision-outline",
                  "name": "arrow  decision  outline"
              },
              {
                  "id": "arrow-down",
                  "name": "arrow  down"
              },
              {
                  "id": "arrow-down-bold",
                  "name": "arrow  down  bold"
              },
              {
                  "id": "arrow-down-bold-box",
                  "name": "arrow  down  bold  box"
              },
              {
                  "id": "arrow-down-bold-box-outline",
                  "name": "arrow  down  bold  box  outline"
              },
              {
                  "id": "arrow-down-bold-circle",
                  "name": "arrow  down  bold  circle"
              },
              {
                  "id": "arrow-down-bold-circle-outline",
                  "name": "arrow  down  bold  circle  outline"
              },
              {
                  "id": "arrow-down-bold-hexagon-outline",
                  "name": "arrow  down  bold  hexagon  outline"
              },
              {
                  "id": "arrow-down-bold-outline",
                  "name": "arrow  down  bold  outline"
              },
              {
                  "id": "arrow-down-box",
                  "name": "arrow  down  box"
              },
              {
                  "id": "arrow-down-circle",
                  "name": "arrow  down  circle"
              },
              {
                  "id": "arrow-down-circle-outline",
                  "name": "arrow  down  circle  outline"
              },
              {
                  "id": "arrow-down-drop-circle",
                  "name": "arrow  down  drop  circle"
              },
              {
                  "id": "arrow-down-drop-circle-outline",
                  "name": "arrow  down  drop  circle  outline"
              },
              {
                  "id": "arrow-down-left",
                  "name": "arrow  down  left"
              },
              {
                  "id": "arrow-down-left-bold",
                  "name": "arrow  down  left  bold"
              },
              {
                  "id": "arrow-down-right",
                  "name": "arrow  down  right"
              },
              {
                  "id": "arrow-down-right-bold",
                  "name": "arrow  down  right  bold"
              },
              {
                  "id": "arrow-down-thick",
                  "name": "arrow  down  thick"
              },
              {
                  "id": "arrow-down-thin",
                  "name": "arrow  down  thin"
              },
              {
                  "id": "arrow-down-thin-circle-outline",
                  "name": "arrow  down  thin  circle  outline"
              },
              {
                  "id": "arrow-expand",
                  "name": "arrow  expand"
              },
              {
                  "id": "arrow-expand-all",
                  "name": "arrow  expand  all"
              },
              {
                  "id": "arrow-expand-down",
                  "name": "arrow  expand  down"
              },
              {
                  "id": "arrow-expand-horizontal",
                  "name": "arrow  expand  horizontal"
              },
              {
                  "id": "arrow-expand-left",
                  "name": "arrow  expand  left"
              },
              {
                  "id": "arrow-expand-right",
                  "name": "arrow  expand  right"
              },
              {
                  "id": "arrow-expand-up",
                  "name": "arrow  expand  up"
              },
              {
                  "id": "arrow-expand-vertical",
                  "name": "arrow  expand  vertical"
              },
              {
                  "id": "arrow-horizontal-lock",
                  "name": "arrow  horizontal  lock"
              },
              {
                  "id": "arrow-left",
                  "name": "arrow  left"
              },
              {
                  "id": "arrow-left-bold",
                  "name": "arrow  left  bold"
              },
              {
                  "id": "arrow-left-bold-box",
                  "name": "arrow  left  bold  box"
              },
              {
                  "id": "arrow-left-bold-box-outline",
                  "name": "arrow  left  bold  box  outline"
              },
              {
                  "id": "arrow-left-bold-circle",
                  "name": "arrow  left  bold  circle"
              },
              {
                  "id": "arrow-left-bold-circle-outline",
                  "name": "arrow  left  bold  circle  outline"
              },
              {
                  "id": "arrow-left-bold-hexagon-outline",
                  "name": "arrow  left  bold  hexagon  outline"
              },
              {
                  "id": "arrow-left-bold-outline",
                  "name": "arrow  left  bold  outline"
              },
              {
                  "id": "arrow-left-bottom",
                  "name": "arrow  left  bottom"
              },
              {
                  "id": "arrow-left-bottom-bold",
                  "name": "arrow  left  bottom  bold"
              },
              {
                  "id": "arrow-left-box",
                  "name": "arrow  left  box"
              },
              {
                  "id": "arrow-left-circle",
                  "name": "arrow  left  circle"
              },
              {
                  "id": "arrow-left-circle-outline",
                  "name": "arrow  left  circle  outline"
              },
              {
                  "id": "arrow-left-drop-circle",
                  "name": "arrow  left  drop  circle"
              },
              {
                  "id": "arrow-left-drop-circle-outline",
                  "name": "arrow  left  drop  circle  outline"
              },
              {
                  "id": "arrow-left-right",
                  "name": "arrow  left  right"
              },
              {
                  "id": "arrow-left-right-bold",
                  "name": "arrow  left  right  bold"
              },
              {
                  "id": "arrow-left-right-bold-outline",
                  "name": "arrow  left  right  bold  outline"
              },
              {
                  "id": "arrow-left-thick",
                  "name": "arrow  left  thick"
              },
              {
                  "id": "arrow-left-thin",
                  "name": "arrow  left  thin"
              },
              {
                  "id": "arrow-left-thin-circle-outline",
                  "name": "arrow  left  thin  circle  outline"
              },
              {
                  "id": "arrow-left-top",
                  "name": "arrow  left  top"
              },
              {
                  "id": "arrow-left-top-bold",
                  "name": "arrow  left  top  bold"
              },
              {
                  "id": "arrow-projectile",
                  "name": "arrow  projectile"
              },
              {
                  "id": "arrow-projectile-multiple",
                  "name": "arrow  projectile  multiple"
              },
              {
                  "id": "arrow-right",
                  "name": "arrow  right"
              },
              {
                  "id": "arrow-right-bold",
                  "name": "arrow  right  bold"
              },
              {
                  "id": "arrow-right-bold-box",
                  "name": "arrow  right  bold  box"
              },
              {
                  "id": "arrow-right-bold-box-outline",
                  "name": "arrow  right  bold  box  outline"
              },
              {
                  "id": "arrow-right-bold-circle",
                  "name": "arrow  right  bold  circle"
              },
              {
                  "id": "arrow-right-bold-circle-outline",
                  "name": "arrow  right  bold  circle  outline"
              },
              {
                  "id": "arrow-right-bold-hexagon-outline",
                  "name": "arrow  right  bold  hexagon  outline"
              },
              {
                  "id": "arrow-right-bold-outline",
                  "name": "arrow  right  bold  outline"
              },
              {
                  "id": "arrow-right-bottom",
                  "name": "arrow  right  bottom"
              },
              {
                  "id": "arrow-right-bottom-bold",
                  "name": "arrow  right  bottom  bold"
              },
              {
                  "id": "arrow-right-box",
                  "name": "arrow  right  box"
              },
              {
                  "id": "arrow-right-circle",
                  "name": "arrow  right  circle"
              },
              {
                  "id": "arrow-right-circle-outline",
                  "name": "arrow  right  circle  outline"
              },
              {
                  "id": "arrow-right-drop-circle",
                  "name": "arrow  right  drop  circle"
              },
              {
                  "id": "arrow-right-drop-circle-outline",
                  "name": "arrow  right  drop  circle  outline"
              },
              {
                  "id": "arrow-right-thick",
                  "name": "arrow  right  thick"
              },
              {
                  "id": "arrow-right-thin",
                  "name": "arrow  right  thin"
              },
              {
                  "id": "arrow-right-thin-circle-outline",
                  "name": "arrow  right  thin  circle  outline"
              },
              {
                  "id": "arrow-right-top",
                  "name": "arrow  right  top"
              },
              {
                  "id": "arrow-right-top-bold",
                  "name": "arrow  right  top  bold"
              },
              {
                  "id": "arrow-split-horizontal",
                  "name": "arrow  split  horizontal"
              },
              {
                  "id": "arrow-split-vertical",
                  "name": "arrow  split  vertical"
              },
              {
                  "id": "arrow-top-left",
                  "name": "arrow  top  left"
              },
              {
                  "id": "arrow-top-left-bold-box",
                  "name": "arrow  top  left  bold  box"
              },
              {
                  "id": "arrow-top-left-bold-box-outline",
                  "name": "arrow  top  left  bold  box  outline"
              },
              {
                  "id": "arrow-top-left-bold-outline",
                  "name": "arrow  top  left  bold  outline"
              },
              {
                  "id": "arrow-top-left-bottom-right",
                  "name": "arrow  top  left  bottom  right"
              },
              {
                  "id": "arrow-top-left-bottom-right-bold",
                  "name": "arrow  top  left  bottom  right  bold"
              },
              {
                  "id": "arrow-top-left-thick",
                  "name": "arrow  top  left  thick"
              },
              {
                  "id": "arrow-top-left-thin",
                  "name": "arrow  top  left  thin"
              },
              {
                  "id": "arrow-top-left-thin-circle-outline",
                  "name": "arrow  top  left  thin  circle  outline"
              },
              {
                  "id": "arrow-top-right",
                  "name": "arrow  top  right"
              },
              {
                  "id": "arrow-top-right-bold-box",
                  "name": "arrow  top  right  bold  box"
              },
              {
                  "id": "arrow-top-right-bold-box-outline",
                  "name": "arrow  top  right  bold  box  outline"
              },
              {
                  "id": "arrow-top-right-bold-outline",
                  "name": "arrow  top  right  bold  outline"
              },
              {
                  "id": "arrow-top-right-bottom-left",
                  "name": "arrow  top  right  bottom  left"
              },
              {
                  "id": "arrow-top-right-bottom-left-bold",
                  "name": "arrow  top  right  bottom  left  bold"
              },
              {
                  "id": "arrow-top-right-thick",
                  "name": "arrow  top  right  thick"
              },
              {
                  "id": "arrow-top-right-thin",
                  "name": "arrow  top  right  thin"
              },
              {
                  "id": "arrow-top-right-thin-circle-outline",
                  "name": "arrow  top  right  thin  circle  outline"
              },
              {
                  "id": "arrow-u-down-left",
                  "name": "arrow  u  down  left"
              },
              {
                  "id": "arrow-u-down-left-bold",
                  "name": "arrow  u  down  left  bold"
              },
              {
                  "id": "arrow-u-down-right",
                  "name": "arrow  u  down  right"
              },
              {
                  "id": "arrow-u-down-right-bold",
                  "name": "arrow  u  down  right  bold"
              },
              {
                  "id": "arrow-u-left-bottom",
                  "name": "arrow  u  left  bottom"
              },
              {
                  "id": "arrow-u-left-bottom-bold",
                  "name": "arrow  u  left  bottom  bold"
              },
              {
                  "id": "arrow-u-left-top",
                  "name": "arrow  u  left  top"
              },
              {
                  "id": "arrow-u-left-top-bold",
                  "name": "arrow  u  left  top  bold"
              },
              {
                  "id": "arrow-u-right-bottom",
                  "name": "arrow  u  right  bottom"
              },
              {
                  "id": "arrow-u-right-bottom-bold",
                  "name": "arrow  u  right  bottom  bold"
              },
              {
                  "id": "arrow-u-right-top",
                  "name": "arrow  u  right  top"
              },
              {
                  "id": "arrow-u-right-top-bold",
                  "name": "arrow  u  right  top  bold"
              },
              {
                  "id": "arrow-u-up-left",
                  "name": "arrow  u  up  left"
              },
              {
                  "id": "arrow-u-up-left-bold",
                  "name": "arrow  u  up  left  bold"
              },
              {
                  "id": "arrow-u-up-right",
                  "name": "arrow  u  up  right"
              },
              {
                  "id": "arrow-u-up-right-bold",
                  "name": "arrow  u  up  right  bold"
              },
              {
                  "id": "arrow-up",
                  "name": "arrow  up"
              },
              {
                  "id": "arrow-up-bold",
                  "name": "arrow  up  bold"
              },
              {
                  "id": "arrow-up-bold-box",
                  "name": "arrow  up  bold  box"
              },
              {
                  "id": "arrow-up-bold-box-outline",
                  "name": "arrow  up  bold  box  outline"
              },
              {
                  "id": "arrow-up-bold-circle",
                  "name": "arrow  up  bold  circle"
              },
              {
                  "id": "arrow-up-bold-circle-outline",
                  "name": "arrow  up  bold  circle  outline"
              },
              {
                  "id": "arrow-up-bold-hexagon-outline",
                  "name": "arrow  up  bold  hexagon  outline"
              },
              {
                  "id": "arrow-up-bold-outline",
                  "name": "arrow  up  bold  outline"
              },
              {
                  "id": "arrow-up-box",
                  "name": "arrow  up  box"
              },
              {
                  "id": "arrow-up-circle",
                  "name": "arrow  up  circle"
              },
              {
                  "id": "arrow-up-circle-outline",
                  "name": "arrow  up  circle  outline"
              },
              {
                  "id": "arrow-up-down",
                  "name": "arrow  up  down"
              },
              {
                  "id": "arrow-up-down-bold",
                  "name": "arrow  up  down  bold"
              },
              {
                  "id": "arrow-up-down-bold-outline",
                  "name": "arrow  up  down  bold  outline"
              },
              {
                  "id": "arrow-up-drop-circle",
                  "name": "arrow  up  drop  circle"
              },
              {
                  "id": "arrow-up-drop-circle-outline",
                  "name": "arrow  up  drop  circle  outline"
              },
              {
                  "id": "arrow-up-left",
                  "name": "arrow  up  left"
              },
              {
                  "id": "arrow-up-left-bold",
                  "name": "arrow  up  left  bold"
              },
              {
                  "id": "arrow-up-right",
                  "name": "arrow  up  right"
              },
              {
                  "id": "arrow-up-right-bold",
                  "name": "arrow  up  right  bold"
              },
              {
                  "id": "arrow-up-thick",
                  "name": "arrow  up  thick"
              },
              {
                  "id": "arrow-up-thin",
                  "name": "arrow  up  thin"
              },
              {
                  "id": "arrow-up-thin-circle-outline",
                  "name": "arrow  up  thin  circle  outline"
              },
              {
                  "id": "arrow-vertical-lock",
                  "name": "arrow  vertical  lock"
              },
              {
                  "id": "artboard",
                  "name": "artboard"
              },
              {
                  "id": "artstation",
                  "name": "artstation"
              },
              {
                  "id": "aspect-ratio",
                  "name": "aspect  ratio"
              },
              {
                  "id": "assistant",
                  "name": "assistant"
              },
              {
                  "id": "asterisk",
                  "name": "asterisk"
              },
              {
                  "id": "asterisk-circle-outline",
                  "name": "asterisk  circle  outline"
              },
              {
                  "id": "at",
                  "name": "at"
              },
              {
                  "id": "atlassian",
                  "name": "atlassian"
              },
              {
                  "id": "atm",
                  "name": "atm"
              },
              {
                  "id": "atom",
                  "name": "atom"
              },
              {
                  "id": "atom-variant",
                  "name": "atom  variant"
              },
              {
                  "id": "attachment",
                  "name": "attachment"
              },
              {
                  "id": "attachment-check",
                  "name": "attachment  check"
              },
              {
                  "id": "attachment-lock",
                  "name": "attachment  lock"
              },
              {
                  "id": "attachment-minus",
                  "name": "attachment  minus"
              },
              {
                  "id": "attachment-off",
                  "name": "attachment  off"
              },
              {
                  "id": "attachment-plus",
                  "name": "attachment  plus"
              },
              {
                  "id": "attachment-remove",
                  "name": "attachment  remove"
              },
              {
                  "id": "atv",
                  "name": "atv"
              },
              {
                  "id": "audio-input-rca",
                  "name": "audio  input  rca"
              },
              {
                  "id": "audio-input-stereo-minijack",
                  "name": "audio  input  stereo  minijack"
              },
              {
                  "id": "audio-input-xlr",
                  "name": "audio  input  xlr"
              },
              {
                  "id": "audio-video",
                  "name": "audio  video"
              },
              {
                  "id": "audio-video-off",
                  "name": "audio  video  off"
              },
              {
                  "id": "augmented-reality",
                  "name": "augmented  reality"
              },
              {
                  "id": "aurora",
                  "name": "aurora"
              },
              {
                  "id": "auto-download",
                  "name": "auto  download"
              },
              {
                  "id": "auto-fix",
                  "name": "auto  fix"
              },
              {
                  "id": "auto-mode",
                  "name": "auto  mode"
              },
              {
                  "id": "auto-upload",
                  "name": "auto  upload"
              },
              {
                  "id": "autorenew",
                  "name": "autorenew"
              },
              {
                  "id": "autorenew-off",
                  "name": "autorenew  off"
              },
              {
                  "id": "av-timer",
                  "name": "av  timer"
              },
              {
                  "id": "awning",
                  "name": "awning"
              },
              {
                  "id": "awning-outline",
                  "name": "awning  outline"
              },
              {
                  "id": "aws",
                  "name": "aws"
              },
              {
                  "id": "axe",
                  "name": "axe"
              },
              {
                  "id": "axe-battle",
                  "name": "axe  battle"
              },
              {
                  "id": "axis",
                  "name": "axis"
              },
              {
                  "id": "axis-arrow",
                  "name": "axis  arrow"
              },
              {
                  "id": "axis-arrow-info",
                  "name": "axis  arrow  info"
              },
              {
                  "id": "axis-arrow-lock",
                  "name": "axis  arrow  lock"
              },
              {
                  "id": "axis-lock",
                  "name": "axis  lock"
              },
              {
                  "id": "axis-x-arrow",
                  "name": "axis  x  arrow"
              },
              {
                  "id": "axis-x-arrow-lock",
                  "name": "axis  x  arrow  lock"
              },
              {
                  "id": "axis-x-rotate-clockwise",
                  "name": "axis  x  rotate  clockwise"
              },
              {
                  "id": "axis-x-rotate-counterclockwise",
                  "name": "axis  x  rotate  counterclockwise"
              },
              {
                  "id": "axis-x-y-arrow-lock",
                  "name": "axis  x  y  arrow  lock"
              },
              {
                  "id": "axis-y-arrow",
                  "name": "axis  y  arrow"
              },
              {
                  "id": "axis-y-arrow-lock",
                  "name": "axis  y  arrow  lock"
              },
              {
                  "id": "axis-y-rotate-clockwise",
                  "name": "axis  y  rotate  clockwise"
              },
              {
                  "id": "axis-y-rotate-counterclockwise",
                  "name": "axis  y  rotate  counterclockwise"
              },
              {
                  "id": "axis-z-arrow",
                  "name": "axis  z  arrow"
              },
              {
                  "id": "axis-z-arrow-lock",
                  "name": "axis  z  arrow  lock"
              },
              {
                  "id": "axis-z-rotate-clockwise",
                  "name": "axis  z  rotate  clockwise"
              },
              {
                  "id": "axis-z-rotate-counterclockwise",
                  "name": "axis  z  rotate  counterclockwise"
              },
              {
                  "id": "babel",
                  "name": "babel"
              },
              {
                  "id": "baby",
                  "name": "baby"
              },
              {
                  "id": "backburger",
                  "name": "backburger"
              },
              {
                  "id": "backspace",
                  "name": "backspace"
              },
              {
                  "id": "backspace-outline",
                  "name": "backspace  outline"
              },
              {
                  "id": "backspace-reverse",
                  "name": "backspace  reverse"
              },
              {
                  "id": "backspace-reverse-outline",
                  "name": "backspace  reverse  outline"
              },
              {
                  "id": "backup-restore",
                  "name": "backup  restore"
              },
              {
                  "id": "bacteria",
                  "name": "bacteria"
              },
              {
                  "id": "bacteria-outline",
                  "name": "bacteria  outline"
              },
              {
                  "id": "badge-account",
                  "name": "badge  account"
              },
              {
                  "id": "badge-account-alert",
                  "name": "badge  account  alert"
              },
              {
                  "id": "badge-account-alert-outline",
                  "name": "badge  account  alert  outline"
              },
              {
                  "id": "badge-account-horizontal",
                  "name": "badge  account  horizontal"
              },
              {
                  "id": "badge-account-horizontal-outline",
                  "name": "badge  account  horizontal  outline"
              },
              {
                  "id": "badge-account-outline",
                  "name": "badge  account  outline"
              },
              {
                  "id": "badminton",
                  "name": "badminton"
              },
              {
                  "id": "bag-carry-on",
                  "name": "bag  carry  on"
              },
              {
                  "id": "bag-carry-on-check",
                  "name": "bag  carry  on  check"
              },
              {
                  "id": "bag-carry-on-off",
                  "name": "bag  carry  on  off"
              },
              {
                  "id": "bag-checked",
                  "name": "bag  checked"
              },
              {
                  "id": "bag-personal",
                  "name": "bag  personal"
              },
              {
                  "id": "bag-personal-off",
                  "name": "bag  personal  off"
              },
              {
                  "id": "bag-personal-off-outline",
                  "name": "bag  personal  off  outline"
              },
              {
                  "id": "bag-personal-outline",
                  "name": "bag  personal  outline"
              },
              {
                  "id": "bag-personal-tag",
                  "name": "bag  personal  tag"
              },
              {
                  "id": "bag-personal-tag-outline",
                  "name": "bag  personal  tag  outline"
              },
              {
                  "id": "bag-suitcase",
                  "name": "bag  suitcase"
              },
              {
                  "id": "bag-suitcase-off",
                  "name": "bag  suitcase  off"
              },
              {
                  "id": "bag-suitcase-off-outline",
                  "name": "bag  suitcase  off  outline"
              },
              {
                  "id": "bag-suitcase-outline",
                  "name": "bag  suitcase  outline"
              },
              {
                  "id": "baguette",
                  "name": "baguette"
              },
              {
                  "id": "balcony",
                  "name": "balcony"
              },
              {
                  "id": "balloon",
                  "name": "balloon"
              },
              {
                  "id": "ballot",
                  "name": "ballot"
              },
              {
                  "id": "ballot-outline",
                  "name": "ballot  outline"
              },
              {
                  "id": "ballot-recount",
                  "name": "ballot  recount"
              },
              {
                  "id": "ballot-recount-outline",
                  "name": "ballot  recount  outline"
              },
              {
                  "id": "bandage",
                  "name": "bandage"
              },
              {
                  "id": "bank",
                  "name": "bank"
              },
              {
                  "id": "bank-check",
                  "name": "bank  check"
              },
              {
                  "id": "bank-circle",
                  "name": "bank  circle"
              },
              {
                  "id": "bank-circle-outline",
                  "name": "bank  circle  outline"
              },
              {
                  "id": "bank-minus",
                  "name": "bank  minus"
              },
              {
                  "id": "bank-off",
                  "name": "bank  off"
              },
              {
                  "id": "bank-off-outline",
                  "name": "bank  off  outline"
              },
              {
                  "id": "bank-outline",
                  "name": "bank  outline"
              },
              {
                  "id": "bank-plus",
                  "name": "bank  plus"
              },
              {
                  "id": "bank-remove",
                  "name": "bank  remove"
              },
              {
                  "id": "bank-transfer",
                  "name": "bank  transfer"
              },
              {
                  "id": "bank-transfer-in",
                  "name": "bank  transfer  in"
              },
              {
                  "id": "bank-transfer-out",
                  "name": "bank  transfer  out"
              },
              {
                  "id": "barcode",
                  "name": "barcode"
              },
              {
                  "id": "barcode-off",
                  "name": "barcode  off"
              },
              {
                  "id": "barcode-scan",
                  "name": "barcode  scan"
              },
              {
                  "id": "barley",
                  "name": "barley"
              },
              {
                  "id": "barley-off",
                  "name": "barley  off"
              },
              {
                  "id": "barn",
                  "name": "barn"
              },
              {
                  "id": "barrel",
                  "name": "barrel"
              },
              {
                  "id": "barrel-outline",
                  "name": "barrel  outline"
              },
              {
                  "id": "baseball",
                  "name": "baseball"
              },
              {
                  "id": "baseball-bat",
                  "name": "baseball  bat"
              },
              {
                  "id": "baseball-diamond",
                  "name": "baseball  diamond"
              },
              {
                  "id": "baseball-diamond-outline",
                  "name": "baseball  diamond  outline"
              },
              {
                  "id": "baseball-outline",
                  "name": "baseball  outline"
              },
              {
                  "id": "bash",
                  "name": "bash"
              },
              {
                  "id": "basket",
                  "name": "basket"
              },
              {
                  "id": "basket-check",
                  "name": "basket  check"
              },
              {
                  "id": "basket-check-outline",
                  "name": "basket  check  outline"
              },
              {
                  "id": "basket-fill",
                  "name": "basket  fill"
              },
              {
                  "id": "basket-minus",
                  "name": "basket  minus"
              },
              {
                  "id": "basket-minus-outline",
                  "name": "basket  minus  outline"
              },
              {
                  "id": "basket-off",
                  "name": "basket  off"
              },
              {
                  "id": "basket-off-outline",
                  "name": "basket  off  outline"
              },
              {
                  "id": "basket-outline",
                  "name": "basket  outline"
              },
              {
                  "id": "basket-plus",
                  "name": "basket  plus"
              },
              {
                  "id": "basket-plus-outline",
                  "name": "basket  plus  outline"
              },
              {
                  "id": "basket-remove",
                  "name": "basket  remove"
              },
              {
                  "id": "basket-remove-outline",
                  "name": "basket  remove  outline"
              },
              {
                  "id": "basket-unfill",
                  "name": "basket  unfill"
              },
              {
                  "id": "basketball",
                  "name": "basketball"
              },
              {
                  "id": "basketball-hoop",
                  "name": "basketball  hoop"
              },
              {
                  "id": "basketball-hoop-outline",
                  "name": "basketball  hoop  outline"
              },
              {
                  "id": "bat",
                  "name": "bat"
              },
              {
                  "id": "bathtub",
                  "name": "bathtub"
              },
              {
                  "id": "bathtub-outline",
                  "name": "bathtub  outline"
              },
              {
                  "id": "battery",
                  "name": "battery"
              },
              {
                  "id": "battery-10",
                  "name": "battery  10"
              },
              {
                  "id": "battery-10-bluetooth",
                  "name": "battery  10  bluetooth"
              },
              {
                  "id": "battery-20",
                  "name": "battery  20"
              },
              {
                  "id": "battery-20-bluetooth",
                  "name": "battery  20  bluetooth"
              },
              {
                  "id": "battery-30",
                  "name": "battery  30"
              },
              {
                  "id": "battery-30-bluetooth",
                  "name": "battery  30  bluetooth"
              },
              {
                  "id": "battery-40",
                  "name": "battery  40"
              },
              {
                  "id": "battery-40-bluetooth",
                  "name": "battery  40  bluetooth"
              },
              {
                  "id": "battery-50",
                  "name": "battery  50"
              },
              {
                  "id": "battery-50-bluetooth",
                  "name": "battery  50  bluetooth"
              },
              {
                  "id": "battery-60",
                  "name": "battery  60"
              },
              {
                  "id": "battery-60-bluetooth",
                  "name": "battery  60  bluetooth"
              },
              {
                  "id": "battery-70",
                  "name": "battery  70"
              },
              {
                  "id": "battery-70-bluetooth",
                  "name": "battery  70  bluetooth"
              },
              {
                  "id": "battery-80",
                  "name": "battery  80"
              },
              {
                  "id": "battery-80-bluetooth",
                  "name": "battery  80  bluetooth"
              },
              {
                  "id": "battery-90",
                  "name": "battery  90"
              },
              {
                  "id": "battery-90-bluetooth",
                  "name": "battery  90  bluetooth"
              },
              {
                  "id": "battery-alert",
                  "name": "battery  alert"
              },
              {
                  "id": "battery-alert-bluetooth",
                  "name": "battery  alert  bluetooth"
              },
              {
                  "id": "battery-alert-variant",
                  "name": "battery  alert  variant"
              },
              {
                  "id": "battery-alert-variant-outline",
                  "name": "battery  alert  variant  outline"
              },
              {
                  "id": "battery-arrow-down",
                  "name": "battery  arrow  down"
              },
              {
                  "id": "battery-arrow-down-outline",
                  "name": "battery  arrow  down  outline"
              },
              {
                  "id": "battery-arrow-up",
                  "name": "battery  arrow  up"
              },
              {
                  "id": "battery-arrow-up-outline",
                  "name": "battery  arrow  up  outline"
              },
              {
                  "id": "battery-bluetooth",
                  "name": "battery  bluetooth"
              },
              {
                  "id": "battery-bluetooth-variant",
                  "name": "battery  bluetooth  variant"
              },
              {
                  "id": "battery-charging",
                  "name": "battery  charging"
              },
              {
                  "id": "battery-charging-10",
                  "name": "battery  charging  10"
              },
              {
                  "id": "battery-charging-100",
                  "name": "battery  charging  100"
              },
              {
                  "id": "battery-charging-20",
                  "name": "battery  charging  20"
              },
              {
                  "id": "battery-charging-30",
                  "name": "battery  charging  30"
              },
              {
                  "id": "battery-charging-40",
                  "name": "battery  charging  40"
              },
              {
                  "id": "battery-charging-50",
                  "name": "battery  charging  50"
              },
              {
                  "id": "battery-charging-60",
                  "name": "battery  charging  60"
              },
              {
                  "id": "battery-charging-70",
                  "name": "battery  charging  70"
              },
              {
                  "id": "battery-charging-80",
                  "name": "battery  charging  80"
              },
              {
                  "id": "battery-charging-90",
                  "name": "battery  charging  90"
              },
              {
                  "id": "battery-charging-high",
                  "name": "battery  charging  high"
              },
              {
                  "id": "battery-charging-low",
                  "name": "battery  charging  low"
              },
              {
                  "id": "battery-charging-medium",
                  "name": "battery  charging  medium"
              },
              {
                  "id": "battery-charging-outline",
                  "name": "battery  charging  outline"
              },
              {
                  "id": "battery-charging-wireless",
                  "name": "battery  charging  wireless"
              },
              {
                  "id": "battery-charging-wireless-10",
                  "name": "battery  charging  wireless  10"
              },
              {
                  "id": "battery-charging-wireless-20",
                  "name": "battery  charging  wireless  20"
              },
              {
                  "id": "battery-charging-wireless-30",
                  "name": "battery  charging  wireless  30"
              },
              {
                  "id": "battery-charging-wireless-40",
                  "name": "battery  charging  wireless  40"
              },
              {
                  "id": "battery-charging-wireless-50",
                  "name": "battery  charging  wireless  50"
              },
              {
                  "id": "battery-charging-wireless-60",
                  "name": "battery  charging  wireless  60"
              },
              {
                  "id": "battery-charging-wireless-70",
                  "name": "battery  charging  wireless  70"
              },
              {
                  "id": "battery-charging-wireless-80",
                  "name": "battery  charging  wireless  80"
              },
              {
                  "id": "battery-charging-wireless-90",
                  "name": "battery  charging  wireless  90"
              },
              {
                  "id": "battery-charging-wireless-alert",
                  "name": "battery  charging  wireless  alert"
              },
              {
                  "id": "battery-charging-wireless-outline",
                  "name": "battery  charging  wireless  outline"
              },
              {
                  "id": "battery-check",
                  "name": "battery  check"
              },
              {
                  "id": "battery-check-outline",
                  "name": "battery  check  outline"
              },
              {
                  "id": "battery-clock",
                  "name": "battery  clock"
              },
              {
                  "id": "battery-clock-outline",
                  "name": "battery  clock  outline"
              },
              {
                  "id": "battery-heart",
                  "name": "battery  heart"
              },
              {
                  "id": "battery-heart-outline",
                  "name": "battery  heart  outline"
              },
              {
                  "id": "battery-heart-variant",
                  "name": "battery  heart  variant"
              },
              {
                  "id": "battery-high",
                  "name": "battery  high"
              },
              {
                  "id": "battery-lock",
                  "name": "battery  lock"
              },
              {
                  "id": "battery-lock-open",
                  "name": "battery  lock  open"
              },
              {
                  "id": "battery-low",
                  "name": "battery  low"
              },
              {
                  "id": "battery-medium",
                  "name": "battery  medium"
              },
              {
                  "id": "battery-minus",
                  "name": "battery  minus"
              },
              {
                  "id": "battery-minus-outline",
                  "name": "battery  minus  outline"
              },
              {
                  "id": "battery-minus-variant",
                  "name": "battery  minus  variant"
              },
              {
                  "id": "battery-negative",
                  "name": "battery  negative"
              },
              {
                  "id": "battery-off",
                  "name": "battery  off"
              },
              {
                  "id": "battery-off-outline",
                  "name": "battery  off  outline"
              },
              {
                  "id": "battery-outline",
                  "name": "battery  outline"
              },
              {
                  "id": "battery-plus",
                  "name": "battery  plus"
              },
              {
                  "id": "battery-plus-outline",
                  "name": "battery  plus  outline"
              },
              {
                  "id": "battery-plus-variant",
                  "name": "battery  plus  variant"
              },
              {
                  "id": "battery-positive",
                  "name": "battery  positive"
              },
              {
                  "id": "battery-remove",
                  "name": "battery  remove"
              },
              {
                  "id": "battery-remove-outline",
                  "name": "battery  remove  outline"
              },
              {
                  "id": "battery-sync",
                  "name": "battery  sync"
              },
              {
                  "id": "battery-sync-outline",
                  "name": "battery  sync  outline"
              },
              {
                  "id": "battery-unknown",
                  "name": "battery  unknown"
              },
              {
                  "id": "battery-unknown-bluetooth",
                  "name": "battery  unknown  bluetooth"
              },
              {
                  "id": "beach",
                  "name": "beach"
              },
              {
                  "id": "beaker",
                  "name": "beaker"
              },
              {
                  "id": "beaker-alert",
                  "name": "beaker  alert"
              },
              {
                  "id": "beaker-alert-outline",
                  "name": "beaker  alert  outline"
              },
              {
                  "id": "beaker-check",
                  "name": "beaker  check"
              },
              {
                  "id": "beaker-check-outline",
                  "name": "beaker  check  outline"
              },
              {
                  "id": "beaker-minus",
                  "name": "beaker  minus"
              },
              {
                  "id": "beaker-minus-outline",
                  "name": "beaker  minus  outline"
              },
              {
                  "id": "beaker-outline",
                  "name": "beaker  outline"
              },
              {
                  "id": "beaker-plus",
                  "name": "beaker  plus"
              },
              {
                  "id": "beaker-plus-outline",
                  "name": "beaker  plus  outline"
              },
              {
                  "id": "beaker-question",
                  "name": "beaker  question"
              },
              {
                  "id": "beaker-question-outline",
                  "name": "beaker  question  outline"
              },
              {
                  "id": "beaker-remove",
                  "name": "beaker  remove"
              },
              {
                  "id": "beaker-remove-outline",
                  "name": "beaker  remove  outline"
              },
              {
                  "id": "bed",
                  "name": "bed"
              },
              {
                  "id": "bed-clock",
                  "name": "bed  clock"
              },
              {
                  "id": "bed-double",
                  "name": "bed  double"
              },
              {
                  "id": "bed-double-outline",
                  "name": "bed  double  outline"
              },
              {
                  "id": "bed-empty",
                  "name": "bed  empty"
              },
              {
                  "id": "bed-king",
                  "name": "bed  king"
              },
              {
                  "id": "bed-king-outline",
                  "name": "bed  king  outline"
              },
              {
                  "id": "bed-outline",
                  "name": "bed  outline"
              },
              {
                  "id": "bed-queen",
                  "name": "bed  queen"
              },
              {
                  "id": "bed-queen-outline",
                  "name": "bed  queen  outline"
              },
              {
                  "id": "bed-single",
                  "name": "bed  single"
              },
              {
                  "id": "bed-single-outline",
                  "name": "bed  single  outline"
              },
              {
                  "id": "bee",
                  "name": "bee"
              },
              {
                  "id": "bee-flower",
                  "name": "bee  flower"
              },
              {
                  "id": "beehive-off-outline",
                  "name": "beehive  off  outline"
              },
              {
                  "id": "beehive-outline",
                  "name": "beehive  outline"
              },
              {
                  "id": "beekeeper",
                  "name": "beekeeper"
              },
              {
                  "id": "beer",
                  "name": "beer"
              },
              {
                  "id": "beer-outline",
                  "name": "beer  outline"
              },
              {
                  "id": "bell",
                  "name": "bell"
              },
              {
                  "id": "bell-alert",
                  "name": "bell  alert"
              },
              {
                  "id": "bell-alert-outline",
                  "name": "bell  alert  outline"
              },
              {
                  "id": "bell-badge",
                  "name": "bell  badge"
              },
              {
                  "id": "bell-badge-outline",
                  "name": "bell  badge  outline"
              },
              {
                  "id": "bell-cancel",
                  "name": "bell  cancel"
              },
              {
                  "id": "bell-cancel-outline",
                  "name": "bell  cancel  outline"
              },
              {
                  "id": "bell-check",
                  "name": "bell  check"
              },
              {
                  "id": "bell-check-outline",
                  "name": "bell  check  outline"
              },
              {
                  "id": "bell-circle",
                  "name": "bell  circle"
              },
              {
                  "id": "bell-circle-outline",
                  "name": "bell  circle  outline"
              },
              {
                  "id": "bell-cog",
                  "name": "bell  cog"
              },
              {
                  "id": "bell-cog-outline",
                  "name": "bell  cog  outline"
              },
              {
                  "id": "bell-minus",
                  "name": "bell  minus"
              },
              {
                  "id": "bell-minus-outline",
                  "name": "bell  minus  outline"
              },
              {
                  "id": "bell-off",
                  "name": "bell  off"
              },
              {
                  "id": "bell-off-outline",
                  "name": "bell  off  outline"
              },
              {
                  "id": "bell-outline",
                  "name": "bell  outline"
              },
              {
                  "id": "bell-plus",
                  "name": "bell  plus"
              },
              {
                  "id": "bell-plus-outline",
                  "name": "bell  plus  outline"
              },
              {
                  "id": "bell-remove",
                  "name": "bell  remove"
              },
              {
                  "id": "bell-remove-outline",
                  "name": "bell  remove  outline"
              },
              {
                  "id": "bell-ring",
                  "name": "bell  ring"
              },
              {
                  "id": "bell-ring-outline",
                  "name": "bell  ring  outline"
              },
              {
                  "id": "bell-sleep",
                  "name": "bell  sleep"
              },
              {
                  "id": "bell-sleep-outline",
                  "name": "bell  sleep  outline"
              },
              {
                  "id": "bench",
                  "name": "bench"
              },
              {
                  "id": "bench-back",
                  "name": "bench  back"
              },
              {
                  "id": "beta",
                  "name": "beta"
              },
              {
                  "id": "betamax",
                  "name": "betamax"
              },
              {
                  "id": "biathlon",
                  "name": "biathlon"
              },
              {
                  "id": "bicycle",
                  "name": "bicycle"
              },
              {
                  "id": "bicycle-basket",
                  "name": "bicycle  basket"
              },
              {
                  "id": "bicycle-cargo",
                  "name": "bicycle  cargo"
              },
              {
                  "id": "bicycle-electric",
                  "name": "bicycle  electric"
              },
              {
                  "id": "bicycle-penny-farthing",
                  "name": "bicycle  penny  farthing"
              },
              {
                  "id": "bike",
                  "name": "bike"
              },
              {
                  "id": "bike-fast",
                  "name": "bike  fast"
              },
              {
                  "id": "bike-pedal",
                  "name": "bike  pedal"
              },
              {
                  "id": "bike-pedal-clipless",
                  "name": "bike  pedal  clipless"
              },
              {
                  "id": "bike-pedal-mountain",
                  "name": "bike  pedal  mountain"
              },
              {
                  "id": "billboard",
                  "name": "billboard"
              },
              {
                  "id": "billiards",
                  "name": "billiards"
              },
              {
                  "id": "billiards-rack",
                  "name": "billiards  rack"
              },
              {
                  "id": "binoculars",
                  "name": "binoculars"
              },
              {
                  "id": "bio",
                  "name": "bio"
              },
              {
                  "id": "biohazard",
                  "name": "biohazard"
              },
              {
                  "id": "bird",
                  "name": "bird"
              },
              {
                  "id": "bitbucket",
                  "name": "bitbucket"
              },
              {
                  "id": "bitcoin",
                  "name": "bitcoin"
              },
              {
                  "id": "black-mesa",
                  "name": "black  mesa"
              },
              {
                  "id": "blender",
                  "name": "blender"
              },
              {
                  "id": "blender-outline",
                  "name": "blender  outline"
              },
              {
                  "id": "blender-software",
                  "name": "blender  software"
              },
              {
                  "id": "blinds",
                  "name": "blinds"
              },
              {
                  "id": "blinds-horizontal",
                  "name": "blinds  horizontal"
              },
              {
                  "id": "blinds-horizontal-closed",
                  "name": "blinds  horizontal  closed"
              },
              {
                  "id": "blinds-open",
                  "name": "blinds  open"
              },
              {
                  "id": "blinds-vertical",
                  "name": "blinds  vertical"
              },
              {
                  "id": "blinds-vertical-closed",
                  "name": "blinds  vertical  closed"
              },
              {
                  "id": "block-helper",
                  "name": "block  helper"
              },
              {
                  "id": "blood-bag",
                  "name": "blood  bag"
              },
              {
                  "id": "bluetooth",
                  "name": "bluetooth"
              },
              {
                  "id": "bluetooth-audio",
                  "name": "bluetooth  audio"
              },
              {
                  "id": "bluetooth-connect",
                  "name": "bluetooth  connect"
              },
              {
                  "id": "bluetooth-off",
                  "name": "bluetooth  off"
              },
              {
                  "id": "bluetooth-settings",
                  "name": "bluetooth  settings"
              },
              {
                  "id": "bluetooth-transfer",
                  "name": "bluetooth  transfer"
              },
              {
                  "id": "blur",
                  "name": "blur"
              },
              {
                  "id": "blur-linear",
                  "name": "blur  linear"
              },
              {
                  "id": "blur-off",
                  "name": "blur  off"
              },
              {
                  "id": "blur-radial",
                  "name": "blur  radial"
              },
              {
                  "id": "bolt",
                  "name": "bolt"
              },
              {
                  "id": "bomb",
                  "name": "bomb"
              },
              {
                  "id": "bomb-off",
                  "name": "bomb  off"
              },
              {
                  "id": "bone",
                  "name": "bone"
              },
              {
                  "id": "bone-off",
                  "name": "bone  off"
              },
              {
                  "id": "book",
                  "name": "book"
              },
              {
                  "id": "book-account",
                  "name": "book  account"
              },
              {
                  "id": "book-account-outline",
                  "name": "book  account  outline"
              },
              {
                  "id": "book-alert",
                  "name": "book  alert"
              },
              {
                  "id": "book-alert-outline",
                  "name": "book  alert  outline"
              },
              {
                  "id": "book-alphabet",
                  "name": "book  alphabet"
              },
              {
                  "id": "book-arrow-down",
                  "name": "book  arrow  down"
              },
              {
                  "id": "book-arrow-down-outline",
                  "name": "book  arrow  down  outline"
              },
              {
                  "id": "book-arrow-left",
                  "name": "book  arrow  left"
              },
              {
                  "id": "book-arrow-left-outline",
                  "name": "book  arrow  left  outline"
              },
              {
                  "id": "book-arrow-right",
                  "name": "book  arrow  right"
              },
              {
                  "id": "book-arrow-right-outline",
                  "name": "book  arrow  right  outline"
              },
              {
                  "id": "book-arrow-up",
                  "name": "book  arrow  up"
              },
              {
                  "id": "book-arrow-up-outline",
                  "name": "book  arrow  up  outline"
              },
              {
                  "id": "book-cancel",
                  "name": "book  cancel"
              },
              {
                  "id": "book-cancel-outline",
                  "name": "book  cancel  outline"
              },
              {
                  "id": "book-check",
                  "name": "book  check"
              },
              {
                  "id": "book-check-outline",
                  "name": "book  check  outline"
              },
              {
                  "id": "book-clock",
                  "name": "book  clock"
              },
              {
                  "id": "book-clock-outline",
                  "name": "book  clock  outline"
              },
              {
                  "id": "book-cog",
                  "name": "book  cog"
              },
              {
                  "id": "book-cog-outline",
                  "name": "book  cog  outline"
              },
              {
                  "id": "book-cross",
                  "name": "book  cross"
              },
              {
                  "id": "book-edit",
                  "name": "book  edit"
              },
              {
                  "id": "book-edit-outline",
                  "name": "book  edit  outline"
              },
              {
                  "id": "book-education",
                  "name": "book  education"
              },
              {
                  "id": "book-education-outline",
                  "name": "book  education  outline"
              },
              {
                  "id": "book-heart",
                  "name": "book  heart"
              },
              {
                  "id": "book-heart-outline",
                  "name": "book  heart  outline"
              },
              {
                  "id": "book-information-variant",
                  "name": "book  information  variant"
              },
              {
                  "id": "book-lock",
                  "name": "book  lock"
              },
              {
                  "id": "book-lock-open",
                  "name": "book  lock  open"
              },
              {
                  "id": "book-lock-open-outline",
                  "name": "book  lock  open  outline"
              },
              {
                  "id": "book-lock-outline",
                  "name": "book  lock  outline"
              },
              {
                  "id": "book-marker",
                  "name": "book  marker"
              },
              {
                  "id": "book-marker-outline",
                  "name": "book  marker  outline"
              },
              {
                  "id": "book-minus",
                  "name": "book  minus"
              },
              {
                  "id": "book-minus-multiple",
                  "name": "book  minus  multiple"
              },
              {
                  "id": "book-minus-multiple-outline",
                  "name": "book  minus  multiple  outline"
              },
              {
                  "id": "book-minus-outline",
                  "name": "book  minus  outline"
              },
              {
                  "id": "book-multiple",
                  "name": "book  multiple"
              },
              {
                  "id": "book-multiple-outline",
                  "name": "book  multiple  outline"
              },
              {
                  "id": "book-music",
                  "name": "book  music"
              },
              {
                  "id": "book-music-outline",
                  "name": "book  music  outline"
              },
              {
                  "id": "book-off",
                  "name": "book  off"
              },
              {
                  "id": "book-off-outline",
                  "name": "book  off  outline"
              },
              {
                  "id": "book-open",
                  "name": "book  open"
              },
              {
                  "id": "book-open-blank-variant",
                  "name": "book  open  blank  variant"
              },
              {
                  "id": "book-open-outline",
                  "name": "book  open  outline"
              },
              {
                  "id": "book-open-page-variant",
                  "name": "book  open  page  variant"
              },
              {
                  "id": "book-open-page-variant-outline",
                  "name": "book  open  page  variant  outline"
              },
              {
                  "id": "book-open-variant",
                  "name": "book  open  variant"
              },
              {
                  "id": "book-outline",
                  "name": "book  outline"
              },
              {
                  "id": "book-play",
                  "name": "book  play"
              },
              {
                  "id": "book-play-outline",
                  "name": "book  play  outline"
              },
              {
                  "id": "book-plus",
                  "name": "book  plus"
              },
              {
                  "id": "book-plus-multiple",
                  "name": "book  plus  multiple"
              },
              {
                  "id": "book-plus-multiple-outline",
                  "name": "book  plus  multiple  outline"
              },
              {
                  "id": "book-plus-outline",
                  "name": "book  plus  outline"
              },
              {
                  "id": "book-refresh",
                  "name": "book  refresh"
              },
              {
                  "id": "book-refresh-outline",
                  "name": "book  refresh  outline"
              },
              {
                  "id": "book-remove",
                  "name": "book  remove"
              },
              {
                  "id": "book-remove-multiple",
                  "name": "book  remove  multiple"
              },
              {
                  "id": "book-remove-multiple-outline",
                  "name": "book  remove  multiple  outline"
              },
              {
                  "id": "book-remove-outline",
                  "name": "book  remove  outline"
              },
              {
                  "id": "book-search",
                  "name": "book  search"
              },
              {
                  "id": "book-search-outline",
                  "name": "book  search  outline"
              },
              {
                  "id": "book-settings",
                  "name": "book  settings"
              },
              {
                  "id": "book-settings-outline",
                  "name": "book  settings  outline"
              },
              {
                  "id": "book-sync",
                  "name": "book  sync"
              },
              {
                  "id": "book-sync-outline",
                  "name": "book  sync  outline"
              },
              {
                  "id": "book-variant",
                  "name": "book  variant"
              },
              {
                  "id": "bookmark",
                  "name": "bookmark"
              },
              {
                  "id": "bookmark-box",
                  "name": "bookmark  box"
              },
              {
                  "id": "bookmark-box-multiple",
                  "name": "bookmark  box  multiple"
              },
              {
                  "id": "bookmark-box-multiple-outline",
                  "name": "bookmark  box  multiple  outline"
              },
              {
                  "id": "bookmark-box-outline",
                  "name": "bookmark  box  outline"
              },
              {
                  "id": "bookmark-check",
                  "name": "bookmark  check"
              },
              {
                  "id": "bookmark-check-outline",
                  "name": "bookmark  check  outline"
              },
              {
                  "id": "bookmark-minus",
                  "name": "bookmark  minus"
              },
              {
                  "id": "bookmark-minus-outline",
                  "name": "bookmark  minus  outline"
              },
              {
                  "id": "bookmark-multiple",
                  "name": "bookmark  multiple"
              },
              {
                  "id": "bookmark-multiple-outline",
                  "name": "bookmark  multiple  outline"
              },
              {
                  "id": "bookmark-music",
                  "name": "bookmark  music"
              },
              {
                  "id": "bookmark-music-outline",
                  "name": "bookmark  music  outline"
              },
              {
                  "id": "bookmark-off",
                  "name": "bookmark  off"
              },
              {
                  "id": "bookmark-off-outline",
                  "name": "bookmark  off  outline"
              },
              {
                  "id": "bookmark-outline",
                  "name": "bookmark  outline"
              },
              {
                  "id": "bookmark-plus",
                  "name": "bookmark  plus"
              },
              {
                  "id": "bookmark-plus-outline",
                  "name": "bookmark  plus  outline"
              },
              {
                  "id": "bookmark-remove",
                  "name": "bookmark  remove"
              },
              {
                  "id": "bookmark-remove-outline",
                  "name": "bookmark  remove  outline"
              },
              {
                  "id": "bookshelf",
                  "name": "bookshelf"
              },
              {
                  "id": "boom-gate",
                  "name": "boom  gate"
              },
              {
                  "id": "boom-gate-alert",
                  "name": "boom  gate  alert"
              },
              {
                  "id": "boom-gate-alert-outline",
                  "name": "boom  gate  alert  outline"
              },
              {
                  "id": "boom-gate-arrow-down",
                  "name": "boom  gate  arrow  down"
              },
              {
                  "id": "boom-gate-arrow-down-outline",
                  "name": "boom  gate  arrow  down  outline"
              },
              {
                  "id": "boom-gate-arrow-up",
                  "name": "boom  gate  arrow  up"
              },
              {
                  "id": "boom-gate-arrow-up-outline",
                  "name": "boom  gate  arrow  up  outline"
              },
              {
                  "id": "boom-gate-outline",
                  "name": "boom  gate  outline"
              },
              {
                  "id": "boom-gate-up",
                  "name": "boom  gate  up"
              },
              {
                  "id": "boom-gate-up-outline",
                  "name": "boom  gate  up  outline"
              },
              {
                  "id": "boombox",
                  "name": "boombox"
              },
              {
                  "id": "boomerang",
                  "name": "boomerang"
              },
              {
                  "id": "bootstrap",
                  "name": "bootstrap"
              },
              {
                  "id": "border-all",
                  "name": "border  all"
              },
              {
                  "id": "border-all-variant",
                  "name": "border  all  variant"
              },
              {
                  "id": "border-bottom",
                  "name": "border  bottom"
              },
              {
                  "id": "border-bottom-variant",
                  "name": "border  bottom  variant"
              },
              {
                  "id": "border-color",
                  "name": "border  color"
              },
              {
                  "id": "border-horizontal",
                  "name": "border  horizontal"
              },
              {
                  "id": "border-inside",
                  "name": "border  inside"
              },
              {
                  "id": "border-left",
                  "name": "border  left"
              },
              {
                  "id": "border-left-variant",
                  "name": "border  left  variant"
              },
              {
                  "id": "border-none",
                  "name": "border  none"
              },
              {
                  "id": "border-none-variant",
                  "name": "border  none  variant"
              },
              {
                  "id": "border-outside",
                  "name": "border  outside"
              },
              {
                  "id": "border-radius",
                  "name": "border  radius"
              },
              {
                  "id": "border-right",
                  "name": "border  right"
              },
              {
                  "id": "border-right-variant",
                  "name": "border  right  variant"
              },
              {
                  "id": "border-style",
                  "name": "border  style"
              },
              {
                  "id": "border-top",
                  "name": "border  top"
              },
              {
                  "id": "border-top-variant",
                  "name": "border  top  variant"
              },
              {
                  "id": "border-vertical",
                  "name": "border  vertical"
              },
              {
                  "id": "bottle-soda",
                  "name": "bottle  soda"
              },
              {
                  "id": "bottle-soda-classic",
                  "name": "bottle  soda  classic"
              },
              {
                  "id": "bottle-soda-classic-outline",
                  "name": "bottle  soda  classic  outline"
              },
              {
                  "id": "bottle-soda-outline",
                  "name": "bottle  soda  outline"
              },
              {
                  "id": "bottle-tonic",
                  "name": "bottle  tonic"
              },
              {
                  "id": "bottle-tonic-outline",
                  "name": "bottle  tonic  outline"
              },
              {
                  "id": "bottle-tonic-plus",
                  "name": "bottle  tonic  plus"
              },
              {
                  "id": "bottle-tonic-plus-outline",
                  "name": "bottle  tonic  plus  outline"
              },
              {
                  "id": "bottle-tonic-skull",
                  "name": "bottle  tonic  skull"
              },
              {
                  "id": "bottle-tonic-skull-outline",
                  "name": "bottle  tonic  skull  outline"
              },
              {
                  "id": "bottle-wine",
                  "name": "bottle  wine"
              },
              {
                  "id": "bottle-wine-outline",
                  "name": "bottle  wine  outline"
              },
              {
                  "id": "bow-arrow",
                  "name": "bow  arrow"
              },
              {
                  "id": "bow-tie",
                  "name": "bow  tie"
              },
              {
                  "id": "bowl",
                  "name": "bowl"
              },
              {
                  "id": "bowl-mix",
                  "name": "bowl  mix"
              },
              {
                  "id": "bowl-mix-outline",
                  "name": "bowl  mix  outline"
              },
              {
                  "id": "bowl-outline",
                  "name": "bowl  outline"
              },
              {
                  "id": "bowling",
                  "name": "bowling"
              },
              {
                  "id": "box",
                  "name": "box"
              },
              {
                  "id": "box-cutter",
                  "name": "box  cutter"
              },
              {
                  "id": "box-cutter-off",
                  "name": "box  cutter  off"
              },
              {
                  "id": "box-shadow",
                  "name": "box  shadow"
              },
              {
                  "id": "boxing-glove",
                  "name": "boxing  glove"
              },
              {
                  "id": "braille",
                  "name": "braille"
              },
              {
                  "id": "brain",
                  "name": "brain"
              },
              {
                  "id": "bread-slice",
                  "name": "bread  slice"
              },
              {
                  "id": "bread-slice-outline",
                  "name": "bread  slice  outline"
              },
              {
                  "id": "bridge",
                  "name": "bridge"
              },
              {
                  "id": "briefcase",
                  "name": "briefcase"
              },
              {
                  "id": "briefcase-account",
                  "name": "briefcase  account"
              },
              {
                  "id": "briefcase-account-outline",
                  "name": "briefcase  account  outline"
              },
              {
                  "id": "briefcase-arrow-left-right",
                  "name": "briefcase  arrow  left  right"
              },
              {
                  "id": "briefcase-arrow-left-right-outline",
                  "name": "briefcase  arrow  left  right  outline"
              },
              {
                  "id": "briefcase-arrow-up-down",
                  "name": "briefcase  arrow  up  down"
              },
              {
                  "id": "briefcase-arrow-up-down-outline",
                  "name": "briefcase  arrow  up  down  outline"
              },
              {
                  "id": "briefcase-check",
                  "name": "briefcase  check"
              },
              {
                  "id": "briefcase-check-outline",
                  "name": "briefcase  check  outline"
              },
              {
                  "id": "briefcase-clock",
                  "name": "briefcase  clock"
              },
              {
                  "id": "briefcase-clock-outline",
                  "name": "briefcase  clock  outline"
              },
              {
                  "id": "briefcase-download",
                  "name": "briefcase  download"
              },
              {
                  "id": "briefcase-download-outline",
                  "name": "briefcase  download  outline"
              },
              {
                  "id": "briefcase-edit",
                  "name": "briefcase  edit"
              },
              {
                  "id": "briefcase-edit-outline",
                  "name": "briefcase  edit  outline"
              },
              {
                  "id": "briefcase-eye",
                  "name": "briefcase  eye"
              },
              {
                  "id": "briefcase-eye-outline",
                  "name": "briefcase  eye  outline"
              },
              {
                  "id": "briefcase-minus",
                  "name": "briefcase  minus"
              },
              {
                  "id": "briefcase-minus-outline",
                  "name": "briefcase  minus  outline"
              },
              {
                  "id": "briefcase-off",
                  "name": "briefcase  off"
              },
              {
                  "id": "briefcase-off-outline",
                  "name": "briefcase  off  outline"
              },
              {
                  "id": "briefcase-outline",
                  "name": "briefcase  outline"
              },
              {
                  "id": "briefcase-plus",
                  "name": "briefcase  plus"
              },
              {
                  "id": "briefcase-plus-outline",
                  "name": "briefcase  plus  outline"
              },
              {
                  "id": "briefcase-remove",
                  "name": "briefcase  remove"
              },
              {
                  "id": "briefcase-remove-outline",
                  "name": "briefcase  remove  outline"
              },
              {
                  "id": "briefcase-search",
                  "name": "briefcase  search"
              },
              {
                  "id": "briefcase-search-outline",
                  "name": "briefcase  search  outline"
              },
              {
                  "id": "briefcase-upload",
                  "name": "briefcase  upload"
              },
              {
                  "id": "briefcase-upload-outline",
                  "name": "briefcase  upload  outline"
              },
              {
                  "id": "briefcase-variant",
                  "name": "briefcase  variant"
              },
              {
                  "id": "briefcase-variant-off",
                  "name": "briefcase  variant  off"
              },
              {
                  "id": "briefcase-variant-off-outline",
                  "name": "briefcase  variant  off  outline"
              },
              {
                  "id": "briefcase-variant-outline",
                  "name": "briefcase  variant  outline"
              },
              {
                  "id": "brightness-1",
                  "name": "brightness  1"
              },
              {
                  "id": "brightness-2",
                  "name": "brightness  2"
              },
              {
                  "id": "brightness-3",
                  "name": "brightness  3"
              },
              {
                  "id": "brightness-4",
                  "name": "brightness  4"
              },
              {
                  "id": "brightness-5",
                  "name": "brightness  5"
              },
              {
                  "id": "brightness-6",
                  "name": "brightness  6"
              },
              {
                  "id": "brightness-7",
                  "name": "brightness  7"
              },
              {
                  "id": "brightness-auto",
                  "name": "brightness  auto"
              },
              {
                  "id": "brightness-percent",
                  "name": "brightness  percent"
              },
              {
                  "id": "broadcast",
                  "name": "broadcast"
              },
              {
                  "id": "broadcast-off",
                  "name": "broadcast  off"
              },
              {
                  "id": "broom",
                  "name": "broom"
              },
              {
                  "id": "brush",
                  "name": "brush"
              },
              {
                  "id": "brush-off",
                  "name": "brush  off"
              },
              {
                  "id": "brush-outline",
                  "name": "brush  outline"
              },
              {
                  "id": "brush-variant",
                  "name": "brush  variant"
              },
              {
                  "id": "bucket",
                  "name": "bucket"
              },
              {
                  "id": "bucket-outline",
                  "name": "bucket  outline"
              },
              {
                  "id": "buffet",
                  "name": "buffet"
              },
              {
                  "id": "bug",
                  "name": "bug"
              },
              {
                  "id": "bug-check",
                  "name": "bug  check"
              },
              {
                  "id": "bug-check-outline",
                  "name": "bug  check  outline"
              },
              {
                  "id": "bug-outline",
                  "name": "bug  outline"
              },
              {
                  "id": "bug-pause",
                  "name": "bug  pause"
              },
              {
                  "id": "bug-pause-outline",
                  "name": "bug  pause  outline"
              },
              {
                  "id": "bug-play",
                  "name": "bug  play"
              },
              {
                  "id": "bug-play-outline",
                  "name": "bug  play  outline"
              },
              {
                  "id": "bug-stop",
                  "name": "bug  stop"
              },
              {
                  "id": "bug-stop-outline",
                  "name": "bug  stop  outline"
              },
              {
                  "id": "bugle",
                  "name": "bugle"
              },
              {
                  "id": "bulkhead-light",
                  "name": "bulkhead  light"
              },
              {
                  "id": "bulldozer",
                  "name": "bulldozer"
              },
              {
                  "id": "bullet",
                  "name": "bullet"
              },
              {
                  "id": "bulletin-board",
                  "name": "bulletin  board"
              },
              {
                  "id": "bullhorn",
                  "name": "bullhorn"
              },
              {
                  "id": "bullhorn-outline",
                  "name": "bullhorn  outline"
              },
              {
                  "id": "bullhorn-variant",
                  "name": "bullhorn  variant"
              },
              {
                  "id": "bullhorn-variant-outline",
                  "name": "bullhorn  variant  outline"
              },
              {
                  "id": "bullseye",
                  "name": "bullseye"
              },
              {
                  "id": "bullseye-arrow",
                  "name": "bullseye  arrow"
              },
              {
                  "id": "bulma",
                  "name": "bulma"
              },
              {
                  "id": "bunk-bed",
                  "name": "bunk  bed"
              },
              {
                  "id": "bunk-bed-outline",
                  "name": "bunk  bed  outline"
              },
              {
                  "id": "bus",
                  "name": "bus"
              },
              {
                  "id": "bus-alert",
                  "name": "bus  alert"
              },
              {
                  "id": "bus-articulated-end",
                  "name": "bus  articulated  end"
              },
              {
                  "id": "bus-articulated-front",
                  "name": "bus  articulated  front"
              },
              {
                  "id": "bus-clock",
                  "name": "bus  clock"
              },
              {
                  "id": "bus-double-decker",
                  "name": "bus  double  decker"
              },
              {
                  "id": "bus-electric",
                  "name": "bus  electric"
              },
              {
                  "id": "bus-marker",
                  "name": "bus  marker"
              },
              {
                  "id": "bus-multiple",
                  "name": "bus  multiple"
              },
              {
                  "id": "bus-school",
                  "name": "bus  school"
              },
              {
                  "id": "bus-side",
                  "name": "bus  side"
              },
              {
                  "id": "bus-stop",
                  "name": "bus  stop"
              },
              {
                  "id": "bus-stop-covered",
                  "name": "bus  stop  covered"
              },
              {
                  "id": "bus-stop-uncovered",
                  "name": "bus  stop  uncovered"
              },
              {
                  "id": "butterfly",
                  "name": "butterfly"
              },
              {
                  "id": "butterfly-outline",
                  "name": "butterfly  outline"
              },
              {
                  "id": "button-cursor",
                  "name": "button  cursor"
              },
              {
                  "id": "button-pointer",
                  "name": "button  pointer"
              },
              {
                  "id": "cabin-a-frame",
                  "name": "cabin  a  frame"
              },
              {
                  "id": "cable-data",
                  "name": "cable  data"
              },
              {
                  "id": "cached",
                  "name": "cached"
              },
              {
                  "id": "cactus",
                  "name": "cactus"
              },
              {
                  "id": "cake",
                  "name": "cake"
              },
              {
                  "id": "cake-layered",
                  "name": "cake  layered"
              },
              {
                  "id": "cake-variant",
                  "name": "cake  variant"
              },
              {
                  "id": "cake-variant-outline",
                  "name": "cake  variant  outline"
              },
              {
                  "id": "calculator",
                  "name": "calculator"
              },
              {
                  "id": "calculator-variant",
                  "name": "calculator  variant"
              },
              {
                  "id": "calculator-variant-outline",
                  "name": "calculator  variant  outline"
              },
              {
                  "id": "calendar",
                  "name": "calendar"
              },
              {
                  "id": "calendar-account",
                  "name": "calendar  account"
              },
              {
                  "id": "calendar-account-outline",
                  "name": "calendar  account  outline"
              },
              {
                  "id": "calendar-alert",
                  "name": "calendar  alert"
              },
              {
                  "id": "calendar-alert-outline",
                  "name": "calendar  alert  outline"
              },
              {
                  "id": "calendar-arrow-left",
                  "name": "calendar  arrow  left"
              },
              {
                  "id": "calendar-arrow-right",
                  "name": "calendar  arrow  right"
              },
              {
                  "id": "calendar-badge",
                  "name": "calendar  badge"
              },
              {
                  "id": "calendar-badge-outline",
                  "name": "calendar  badge  outline"
              },
              {
                  "id": "calendar-blank",
                  "name": "calendar  blank"
              },
              {
                  "id": "calendar-blank-multiple",
                  "name": "calendar  blank  multiple"
              },
              {
                  "id": "calendar-blank-outline",
                  "name": "calendar  blank  outline"
              },
              {
                  "id": "calendar-check",
                  "name": "calendar  check"
              },
              {
                  "id": "calendar-check-outline",
                  "name": "calendar  check  outline"
              },
              {
                  "id": "calendar-clock",
                  "name": "calendar  clock"
              },
              {
                  "id": "calendar-clock-outline",
                  "name": "calendar  clock  outline"
              },
              {
                  "id": "calendar-collapse-horizontal",
                  "name": "calendar  collapse  horizontal"
              },
              {
                  "id": "calendar-collapse-horizontal-outline",
                  "name": "calendar  collapse  horizontal  outline"
              },
              {
                  "id": "calendar-cursor",
                  "name": "calendar  cursor"
              },
              {
                  "id": "calendar-cursor-outline",
                  "name": "calendar  cursor  outline"
              },
              {
                  "id": "calendar-edit",
                  "name": "calendar  edit"
              },
              {
                  "id": "calendar-edit-outline",
                  "name": "calendar  edit  outline"
              },
              {
                  "id": "calendar-end",
                  "name": "calendar  end"
              },
              {
                  "id": "calendar-end-outline",
                  "name": "calendar  end  outline"
              },
              {
                  "id": "calendar-expand-horizontal",
                  "name": "calendar  expand  horizontal"
              },
              {
                  "id": "calendar-expand-horizontal-outline",
                  "name": "calendar  expand  horizontal  outline"
              },
              {
                  "id": "calendar-export",
                  "name": "calendar  export"
              },
              {
                  "id": "calendar-export-outline",
                  "name": "calendar  export  outline"
              },
              {
                  "id": "calendar-filter",
                  "name": "calendar  filter"
              },
              {
                  "id": "calendar-filter-outline",
                  "name": "calendar  filter  outline"
              },
              {
                  "id": "calendar-heart",
                  "name": "calendar  heart"
              },
              {
                  "id": "calendar-heart-outline",
                  "name": "calendar  heart  outline"
              },
              {
                  "id": "calendar-import",
                  "name": "calendar  import"
              },
              {
                  "id": "calendar-import-outline",
                  "name": "calendar  import  outline"
              },
              {
                  "id": "calendar-lock",
                  "name": "calendar  lock"
              },
              {
                  "id": "calendar-lock-open",
                  "name": "calendar  lock  open"
              },
              {
                  "id": "calendar-lock-open-outline",
                  "name": "calendar  lock  open  outline"
              },
              {
                  "id": "calendar-lock-outline",
                  "name": "calendar  lock  outline"
              },
              {
                  "id": "calendar-minus",
                  "name": "calendar  minus"
              },
              {
                  "id": "calendar-minus-outline",
                  "name": "calendar  minus  outline"
              },
              {
                  "id": "calendar-month",
                  "name": "calendar  month"
              },
              {
                  "id": "calendar-month-outline",
                  "name": "calendar  month  outline"
              },
              {
                  "id": "calendar-multiple",
                  "name": "calendar  multiple"
              },
              {
                  "id": "calendar-multiple-check",
                  "name": "calendar  multiple  check"
              },
              {
                  "id": "calendar-multiselect",
                  "name": "calendar  multiselect"
              },
              {
                  "id": "calendar-multiselect-outline",
                  "name": "calendar  multiselect  outline"
              },
              {
                  "id": "calendar-outline",
                  "name": "calendar  outline"
              },
              {
                  "id": "calendar-plus",
                  "name": "calendar  plus"
              },
              {
                  "id": "calendar-plus-outline",
                  "name": "calendar  plus  outline"
              },
              {
                  "id": "calendar-question",
                  "name": "calendar  question"
              },
              {
                  "id": "calendar-question-outline",
                  "name": "calendar  question  outline"
              },
              {
                  "id": "calendar-range",
                  "name": "calendar  range"
              },
              {
                  "id": "calendar-range-outline",
                  "name": "calendar  range  outline"
              },
              {
                  "id": "calendar-refresh",
                  "name": "calendar  refresh"
              },
              {
                  "id": "calendar-refresh-outline",
                  "name": "calendar  refresh  outline"
              },
              {
                  "id": "calendar-remove",
                  "name": "calendar  remove"
              },
              {
                  "id": "calendar-remove-outline",
                  "name": "calendar  remove  outline"
              },
              {
                  "id": "calendar-search",
                  "name": "calendar  search"
              },
              {
                  "id": "calendar-search-outline",
                  "name": "calendar  search  outline"
              },
              {
                  "id": "calendar-star",
                  "name": "calendar  star"
              },
              {
                  "id": "calendar-star-four-points",
                  "name": "calendar  star  four  points"
              },
              {
                  "id": "calendar-star-outline",
                  "name": "calendar  star  outline"
              },
              {
                  "id": "calendar-start",
                  "name": "calendar  start"
              },
              {
                  "id": "calendar-start-outline",
                  "name": "calendar  start  outline"
              },
              {
                  "id": "calendar-sync",
                  "name": "calendar  sync"
              },
              {
                  "id": "calendar-sync-outline",
                  "name": "calendar  sync  outline"
              },
              {
                  "id": "calendar-text",
                  "name": "calendar  text"
              },
              {
                  "id": "calendar-text-outline",
                  "name": "calendar  text  outline"
              },
              {
                  "id": "calendar-today",
                  "name": "calendar  today"
              },
              {
                  "id": "calendar-today-outline",
                  "name": "calendar  today  outline"
              },
              {
                  "id": "calendar-week",
                  "name": "calendar  week"
              },
              {
                  "id": "calendar-week-begin",
                  "name": "calendar  week  begin"
              },
              {
                  "id": "calendar-week-begin-outline",
                  "name": "calendar  week  begin  outline"
              },
              {
                  "id": "calendar-week-outline",
                  "name": "calendar  week  outline"
              },
              {
                  "id": "calendar-weekend",
                  "name": "calendar  weekend"
              },
              {
                  "id": "calendar-weekend-outline",
                  "name": "calendar  weekend  outline"
              },
              {
                  "id": "call-made",
                  "name": "call  made"
              },
              {
                  "id": "call-merge",
                  "name": "call  merge"
              },
              {
                  "id": "call-missed",
                  "name": "call  missed"
              },
              {
                  "id": "call-received",
                  "name": "call  received"
              },
              {
                  "id": "call-split",
                  "name": "call  split"
              },
              {
                  "id": "camcorder",
                  "name": "camcorder"
              },
              {
                  "id": "camcorder-off",
                  "name": "camcorder  off"
              },
              {
                  "id": "camera",
                  "name": "camera"
              },
              {
                  "id": "camera-account",
                  "name": "camera  account"
              },
              {
                  "id": "camera-burst",
                  "name": "camera  burst"
              },
              {
                  "id": "camera-control",
                  "name": "camera  control"
              },
              {
                  "id": "camera-document",
                  "name": "camera  document"
              },
              {
                  "id": "camera-document-off",
                  "name": "camera  document  off"
              },
              {
                  "id": "camera-enhance",
                  "name": "camera  enhance"
              },
              {
                  "id": "camera-enhance-outline",
                  "name": "camera  enhance  outline"
              },
              {
                  "id": "camera-flip",
                  "name": "camera  flip"
              },
              {
                  "id": "camera-flip-outline",
                  "name": "camera  flip  outline"
              },
              {
                  "id": "camera-front",
                  "name": "camera  front"
              },
              {
                  "id": "camera-front-variant",
                  "name": "camera  front  variant"
              },
              {
                  "id": "camera-gopro",
                  "name": "camera  gopro"
              },
              {
                  "id": "camera-image",
                  "name": "camera  image"
              },
              {
                  "id": "camera-iris",
                  "name": "camera  iris"
              },
              {
                  "id": "camera-lock",
                  "name": "camera  lock"
              },
              {
                  "id": "camera-lock-open",
                  "name": "camera  lock  open"
              },
              {
                  "id": "camera-lock-open-outline",
                  "name": "camera  lock  open  outline"
              },
              {
                  "id": "camera-lock-outline",
                  "name": "camera  lock  outline"
              },
              {
                  "id": "camera-marker",
                  "name": "camera  marker"
              },
              {
                  "id": "camera-marker-outline",
                  "name": "camera  marker  outline"
              },
              {
                  "id": "camera-metering-center",
                  "name": "camera  metering  center"
              },
              {
                  "id": "camera-metering-matrix",
                  "name": "camera  metering  matrix"
              },
              {
                  "id": "camera-metering-partial",
                  "name": "camera  metering  partial"
              },
              {
                  "id": "camera-metering-spot",
                  "name": "camera  metering  spot"
              },
              {
                  "id": "camera-off",
                  "name": "camera  off"
              },
              {
                  "id": "camera-off-outline",
                  "name": "camera  off  outline"
              },
              {
                  "id": "camera-outline",
                  "name": "camera  outline"
              },
              {
                  "id": "camera-party-mode",
                  "name": "camera  party  mode"
              },
              {
                  "id": "camera-plus",
                  "name": "camera  plus"
              },
              {
                  "id": "camera-plus-outline",
                  "name": "camera  plus  outline"
              },
              {
                  "id": "camera-rear",
                  "name": "camera  rear"
              },
              {
                  "id": "camera-rear-variant",
                  "name": "camera  rear  variant"
              },
              {
                  "id": "camera-retake",
                  "name": "camera  retake"
              },
              {
                  "id": "camera-retake-outline",
                  "name": "camera  retake  outline"
              },
              {
                  "id": "camera-switch",
                  "name": "camera  switch"
              },
              {
                  "id": "camera-switch-outline",
                  "name": "camera  switch  outline"
              },
              {
                  "id": "camera-timer",
                  "name": "camera  timer"
              },
              {
                  "id": "camera-wireless",
                  "name": "camera  wireless"
              },
              {
                  "id": "camera-wireless-outline",
                  "name": "camera  wireless  outline"
              },
              {
                  "id": "campfire",
                  "name": "campfire"
              },
              {
                  "id": "cancel",
                  "name": "cancel"
              },
              {
                  "id": "candelabra",
                  "name": "candelabra"
              },
              {
                  "id": "candelabra-fire",
                  "name": "candelabra  fire"
              },
              {
                  "id": "candle",
                  "name": "candle"
              },
              {
                  "id": "candy",
                  "name": "candy"
              },
              {
                  "id": "candy-off",
                  "name": "candy  off"
              },
              {
                  "id": "candy-off-outline",
                  "name": "candy  off  outline"
              },
              {
                  "id": "candy-outline",
                  "name": "candy  outline"
              },
              {
                  "id": "candycane",
                  "name": "candycane"
              },
              {
                  "id": "cannabis",
                  "name": "cannabis"
              },
              {
                  "id": "cannabis-off",
                  "name": "cannabis  off"
              },
              {
                  "id": "caps-lock",
                  "name": "caps  lock"
              },
              {
                  "id": "car",
                  "name": "car"
              },
              {
                  "id": "car-2-plus",
                  "name": "car  2  plus"
              },
              {
                  "id": "car-3-plus",
                  "name": "car  3  plus"
              },
              {
                  "id": "car-arrow-left",
                  "name": "car  arrow  left"
              },
              {
                  "id": "car-arrow-right",
                  "name": "car  arrow  right"
              },
              {
                  "id": "car-back",
                  "name": "car  back"
              },
              {
                  "id": "car-battery",
                  "name": "car  battery"
              },
              {
                  "id": "car-brake-abs",
                  "name": "car  brake  abs"
              },
              {
                  "id": "car-brake-alert",
                  "name": "car  brake  alert"
              },
              {
                  "id": "car-brake-fluid-level",
                  "name": "car  brake  fluid  level"
              },
              {
                  "id": "car-brake-hold",
                  "name": "car  brake  hold"
              },
              {
                  "id": "car-brake-low-pressure",
                  "name": "car  brake  low  pressure"
              },
              {
                  "id": "car-brake-parking",
                  "name": "car  brake  parking"
              },
              {
                  "id": "car-brake-retarder",
                  "name": "car  brake  retarder"
              },
              {
                  "id": "car-brake-temperature",
                  "name": "car  brake  temperature"
              },
              {
                  "id": "car-brake-worn-linings",
                  "name": "car  brake  worn  linings"
              },
              {
                  "id": "car-child-seat",
                  "name": "car  child  seat"
              },
              {
                  "id": "car-clock",
                  "name": "car  clock"
              },
              {
                  "id": "car-clutch",
                  "name": "car  clutch"
              },
              {
                  "id": "car-cog",
                  "name": "car  cog"
              },
              {
                  "id": "car-connected",
                  "name": "car  connected"
              },
              {
                  "id": "car-convertible",
                  "name": "car  convertible"
              },
              {
                  "id": "car-coolant-level",
                  "name": "car  coolant  level"
              },
              {
                  "id": "car-cruise-control",
                  "name": "car  cruise  control"
              },
              {
                  "id": "car-defrost-front",
                  "name": "car  defrost  front"
              },
              {
                  "id": "car-defrost-rear",
                  "name": "car  defrost  rear"
              },
              {
                  "id": "car-door",
                  "name": "car  door"
              },
              {
                  "id": "car-door-lock",
                  "name": "car  door  lock"
              },
              {
                  "id": "car-electric",
                  "name": "car  electric"
              },
              {
                  "id": "car-electric-outline",
                  "name": "car  electric  outline"
              },
              {
                  "id": "car-emergency",
                  "name": "car  emergency"
              },
              {
                  "id": "car-esp",
                  "name": "car  esp"
              },
              {
                  "id": "car-estate",
                  "name": "car  estate"
              },
              {
                  "id": "car-hatchback",
                  "name": "car  hatchback"
              },
              {
                  "id": "car-info",
                  "name": "car  info"
              },
              {
                  "id": "car-key",
                  "name": "car  key"
              },
              {
                  "id": "car-lifted-pickup",
                  "name": "car  lifted  pickup"
              },
              {
                  "id": "car-light-alert",
                  "name": "car  light  alert"
              },
              {
                  "id": "car-light-dimmed",
                  "name": "car  light  dimmed"
              },
              {
                  "id": "car-light-fog",
                  "name": "car  light  fog"
              },
              {
                  "id": "car-light-high",
                  "name": "car  light  high"
              },
              {
                  "id": "car-limousine",
                  "name": "car  limousine"
              },
              {
                  "id": "car-multiple",
                  "name": "car  multiple"
              },
              {
                  "id": "car-off",
                  "name": "car  off"
              },
              {
                  "id": "car-outline",
                  "name": "car  outline"
              },
              {
                  "id": "car-parking-lights",
                  "name": "car  parking  lights"
              },
              {
                  "id": "car-pickup",
                  "name": "car  pickup"
              },
              {
                  "id": "car-search",
                  "name": "car  search"
              },
              {
                  "id": "car-search-outline",
                  "name": "car  search  outline"
              },
              {
                  "id": "car-seat",
                  "name": "car  seat"
              },
              {
                  "id": "car-seat-cooler",
                  "name": "car  seat  cooler"
              },
              {
                  "id": "car-seat-heater",
                  "name": "car  seat  heater"
              },
              {
                  "id": "car-select",
                  "name": "car  select"
              },
              {
                  "id": "car-settings",
                  "name": "car  settings"
              },
              {
                  "id": "car-shift-pattern",
                  "name": "car  shift  pattern"
              },
              {
                  "id": "car-side",
                  "name": "car  side"
              },
              {
                  "id": "car-speed-limiter",
                  "name": "car  speed  limiter"
              },
              {
                  "id": "car-sports",
                  "name": "car  sports"
              },
              {
                  "id": "car-tire-alert",
                  "name": "car  tire  alert"
              },
              {
                  "id": "car-traction-control",
                  "name": "car  traction  control"
              },
              {
                  "id": "car-turbocharger",
                  "name": "car  turbocharger"
              },
              {
                  "id": "car-wash",
                  "name": "car  wash"
              },
              {
                  "id": "car-windshield",
                  "name": "car  windshield"
              },
              {
                  "id": "car-windshield-outline",
                  "name": "car  windshield  outline"
              },
              {
                  "id": "car-wireless",
                  "name": "car  wireless"
              },
              {
                  "id": "car-wrench",
                  "name": "car  wrench"
              },
              {
                  "id": "carabiner",
                  "name": "carabiner"
              },
              {
                  "id": "caravan",
                  "name": "caravan"
              },
              {
                  "id": "card",
                  "name": "card"
              },
              {
                  "id": "card-account-details",
                  "name": "card  account  details"
              },
              {
                  "id": "card-account-details-outline",
                  "name": "card  account  details  outline"
              },
              {
                  "id": "card-account-details-star",
                  "name": "card  account  details  star"
              },
              {
                  "id": "card-account-details-star-outline",
                  "name": "card  account  details  star  outline"
              },
              {
                  "id": "card-account-mail",
                  "name": "card  account  mail"
              },
              {
                  "id": "card-account-mail-outline",
                  "name": "card  account  mail  outline"
              },
              {
                  "id": "card-account-phone",
                  "name": "card  account  phone"
              },
              {
                  "id": "card-account-phone-outline",
                  "name": "card  account  phone  outline"
              },
              {
                  "id": "card-bulleted",
                  "name": "card  bulleted"
              },
              {
                  "id": "card-bulleted-off",
                  "name": "card  bulleted  off"
              },
              {
                  "id": "card-bulleted-off-outline",
                  "name": "card  bulleted  off  outline"
              },
              {
                  "id": "card-bulleted-outline",
                  "name": "card  bulleted  outline"
              },
              {
                  "id": "card-bulleted-settings",
                  "name": "card  bulleted  settings"
              },
              {
                  "id": "card-bulleted-settings-outline",
                  "name": "card  bulleted  settings  outline"
              },
              {
                  "id": "card-minus",
                  "name": "card  minus"
              },
              {
                  "id": "card-minus-outline",
                  "name": "card  minus  outline"
              },
              {
                  "id": "card-multiple",
                  "name": "card  multiple"
              },
              {
                  "id": "card-multiple-outline",
                  "name": "card  multiple  outline"
              },
              {
                  "id": "card-off",
                  "name": "card  off"
              },
              {
                  "id": "card-off-outline",
                  "name": "card  off  outline"
              },
              {
                  "id": "card-outline",
                  "name": "card  outline"
              },
              {
                  "id": "card-plus",
                  "name": "card  plus"
              },
              {
                  "id": "card-plus-outline",
                  "name": "card  plus  outline"
              },
              {
                  "id": "card-remove",
                  "name": "card  remove"
              },
              {
                  "id": "card-remove-outline",
                  "name": "card  remove  outline"
              },
              {
                  "id": "card-search",
                  "name": "card  search"
              },
              {
                  "id": "card-search-outline",
                  "name": "card  search  outline"
              },
              {
                  "id": "card-text",
                  "name": "card  text"
              },
              {
                  "id": "card-text-outline",
                  "name": "card  text  outline"
              },
              {
                  "id": "cards",
                  "name": "cards"
              },
              {
                  "id": "cards-club",
                  "name": "cards  club"
              },
              {
                  "id": "cards-club-outline",
                  "name": "cards  club  outline"
              },
              {
                  "id": "cards-diamond",
                  "name": "cards  diamond"
              },
              {
                  "id": "cards-diamond-outline",
                  "name": "cards  diamond  outline"
              },
              {
                  "id": "cards-heart",
                  "name": "cards  heart"
              },
              {
                  "id": "cards-heart-outline",
                  "name": "cards  heart  outline"
              },
              {
                  "id": "cards-outline",
                  "name": "cards  outline"
              },
              {
                  "id": "cards-playing",
                  "name": "cards  playing"
              },
              {
                  "id": "cards-playing-club",
                  "name": "cards  playing  club"
              },
              {
                  "id": "cards-playing-club-multiple",
                  "name": "cards  playing  club  multiple"
              },
              {
                  "id": "cards-playing-club-multiple-outline",
                  "name": "cards  playing  club  multiple  outline"
              },
              {
                  "id": "cards-playing-club-outline",
                  "name": "cards  playing  club  outline"
              },
              {
                  "id": "cards-playing-diamond",
                  "name": "cards  playing  diamond"
              },
              {
                  "id": "cards-playing-diamond-multiple",
                  "name": "cards  playing  diamond  multiple"
              },
              {
                  "id": "cards-playing-diamond-multiple-outline",
                  "name": "cards  playing  diamond  multiple  outline"
              },
              {
                  "id": "cards-playing-diamond-outline",
                  "name": "cards  playing  diamond  outline"
              },
              {
                  "id": "cards-playing-heart",
                  "name": "cards  playing  heart"
              },
              {
                  "id": "cards-playing-heart-multiple",
                  "name": "cards  playing  heart  multiple"
              },
              {
                  "id": "cards-playing-heart-multiple-outline",
                  "name": "cards  playing  heart  multiple  outline"
              },
              {
                  "id": "cards-playing-heart-outline",
                  "name": "cards  playing  heart  outline"
              },
              {
                  "id": "cards-playing-outline",
                  "name": "cards  playing  outline"
              },
              {
                  "id": "cards-playing-spade",
                  "name": "cards  playing  spade"
              },
              {
                  "id": "cards-playing-spade-multiple",
                  "name": "cards  playing  spade  multiple"
              },
              {
                  "id": "cards-playing-spade-multiple-outline",
                  "name": "cards  playing  spade  multiple  outline"
              },
              {
                  "id": "cards-playing-spade-outline",
                  "name": "cards  playing  spade  outline"
              },
              {
                  "id": "cards-spade",
                  "name": "cards  spade"
              },
              {
                  "id": "cards-spade-outline",
                  "name": "cards  spade  outline"
              },
              {
                  "id": "cards-variant",
                  "name": "cards  variant"
              },
              {
                  "id": "carrot",
                  "name": "carrot"
              },
              {
                  "id": "cart",
                  "name": "cart"
              },
              {
                  "id": "cart-arrow-down",
                  "name": "cart  arrow  down"
              },
              {
                  "id": "cart-arrow-right",
                  "name": "cart  arrow  right"
              },
              {
                  "id": "cart-arrow-up",
                  "name": "cart  arrow  up"
              },
              {
                  "id": "cart-check",
                  "name": "cart  check"
              },
              {
                  "id": "cart-heart",
                  "name": "cart  heart"
              },
              {
                  "id": "cart-minus",
                  "name": "cart  minus"
              },
              {
                  "id": "cart-off",
                  "name": "cart  off"
              },
              {
                  "id": "cart-outline",
                  "name": "cart  outline"
              },
              {
                  "id": "cart-percent",
                  "name": "cart  percent"
              },
              {
                  "id": "cart-plus",
                  "name": "cart  plus"
              },
              {
                  "id": "cart-remove",
                  "name": "cart  remove"
              },
              {
                  "id": "cart-variant",
                  "name": "cart  variant"
              },
              {
                  "id": "case-sensitive-alt",
                  "name": "case  sensitive  alt"
              },
              {
                  "id": "cash",
                  "name": "cash"
              },
              {
                  "id": "cash-100",
                  "name": "cash  100"
              },
              {
                  "id": "cash-check",
                  "name": "cash  check"
              },
              {
                  "id": "cash-clock",
                  "name": "cash  clock"
              },
              {
                  "id": "cash-fast",
                  "name": "cash  fast"
              },
              {
                  "id": "cash-lock",
                  "name": "cash  lock"
              },
              {
                  "id": "cash-lock-open",
                  "name": "cash  lock  open"
              },
              {
                  "id": "cash-marker",
                  "name": "cash  marker"
              },
              {
                  "id": "cash-minus",
                  "name": "cash  minus"
              },
              {
                  "id": "cash-multiple",
                  "name": "cash  multiple"
              },
              {
                  "id": "cash-off",
                  "name": "cash  off"
              },
              {
                  "id": "cash-plus",
                  "name": "cash  plus"
              },
              {
                  "id": "cash-refund",
                  "name": "cash  refund"
              },
              {
                  "id": "cash-register",
                  "name": "cash  register"
              },
              {
                  "id": "cash-remove",
                  "name": "cash  remove"
              },
              {
                  "id": "cash-sync",
                  "name": "cash  sync"
              },
              {
                  "id": "cassette",
                  "name": "cassette"
              },
              {
                  "id": "cast",
                  "name": "cast"
              },
              {
                  "id": "cast-audio",
                  "name": "cast  audio"
              },
              {
                  "id": "cast-audio-variant",
                  "name": "cast  audio  variant"
              },
              {
                  "id": "cast-connected",
                  "name": "cast  connected"
              },
              {
                  "id": "cast-education",
                  "name": "cast  education"
              },
              {
                  "id": "cast-off",
                  "name": "cast  off"
              },
              {
                  "id": "cast-variant",
                  "name": "cast  variant"
              },
              {
                  "id": "castle",
                  "name": "castle"
              },
              {
                  "id": "cat",
                  "name": "cat"
              },
              {
                  "id": "cctv",
                  "name": "cctv"
              },
              {
                  "id": "cctv-off",
                  "name": "cctv  off"
              },
              {
                  "id": "ceiling-fan",
                  "name": "ceiling  fan"
              },
              {
                  "id": "ceiling-fan-light",
                  "name": "ceiling  fan  light"
              },
              {
                  "id": "ceiling-light",
                  "name": "ceiling  light"
              },
              {
                  "id": "ceiling-light-multiple",
                  "name": "ceiling  light  multiple"
              },
              {
                  "id": "ceiling-light-multiple-outline",
                  "name": "ceiling  light  multiple  outline"
              },
              {
                  "id": "ceiling-light-outline",
                  "name": "ceiling  light  outline"
              },
              {
                  "id": "cellphone",
                  "name": "cellphone"
              },
              {
                  "id": "cellphone-arrow-down",
                  "name": "cellphone  arrow  down"
              },
              {
                  "id": "cellphone-arrow-down-variant",
                  "name": "cellphone  arrow  down  variant"
              },
              {
                  "id": "cellphone-basic",
                  "name": "cellphone  basic"
              },
              {
                  "id": "cellphone-charging",
                  "name": "cellphone  charging"
              },
              {
                  "id": "cellphone-check",
                  "name": "cellphone  check"
              },
              {
                  "id": "cellphone-cog",
                  "name": "cellphone  cog"
              },
              {
                  "id": "cellphone-dock",
                  "name": "cellphone  dock"
              },
              {
                  "id": "cellphone-information",
                  "name": "cellphone  information"
              },
              {
                  "id": "cellphone-key",
                  "name": "cellphone  key"
              },
              {
                  "id": "cellphone-link",
                  "name": "cellphone  link"
              },
              {
                  "id": "cellphone-link-off",
                  "name": "cellphone  link  off"
              },
              {
                  "id": "cellphone-lock",
                  "name": "cellphone  lock"
              },
              {
                  "id": "cellphone-marker",
                  "name": "cellphone  marker"
              },
              {
                  "id": "cellphone-message",
                  "name": "cellphone  message"
              },
              {
                  "id": "cellphone-message-off",
                  "name": "cellphone  message  off"
              },
              {
                  "id": "cellphone-nfc",
                  "name": "cellphone  nfc"
              },
              {
                  "id": "cellphone-nfc-off",
                  "name": "cellphone  nfc  off"
              },
              {
                  "id": "cellphone-off",
                  "name": "cellphone  off"
              },
              {
                  "id": "cellphone-play",
                  "name": "cellphone  play"
              },
              {
                  "id": "cellphone-remove",
                  "name": "cellphone  remove"
              },
              {
                  "id": "cellphone-screenshot",
                  "name": "cellphone  screenshot"
              },
              {
                  "id": "cellphone-settings",
                  "name": "cellphone  settings"
              },
              {
                  "id": "cellphone-sound",
                  "name": "cellphone  sound"
              },
              {
                  "id": "cellphone-text",
                  "name": "cellphone  text"
              },
              {
                  "id": "cellphone-wireless",
                  "name": "cellphone  wireless"
              },
              {
                  "id": "centos",
                  "name": "centos"
              },
              {
                  "id": "certificate",
                  "name": "certificate"
              },
              {
                  "id": "certificate-outline",
                  "name": "certificate  outline"
              },
              {
                  "id": "chair-rolling",
                  "name": "chair  rolling"
              },
              {
                  "id": "chair-school",
                  "name": "chair  school"
              },
              {
                  "id": "chandelier",
                  "name": "chandelier"
              },
              {
                  "id": "charity",
                  "name": "charity"
              },
              {
                  "id": "chart-arc",
                  "name": "chart  arc"
              },
              {
                  "id": "chart-areaspline",
                  "name": "chart  areaspline"
              },
              {
                  "id": "chart-areaspline-variant",
                  "name": "chart  areaspline  variant"
              },
              {
                  "id": "chart-bar",
                  "name": "chart  bar"
              },
              {
                  "id": "chart-bar-stacked",
                  "name": "chart  bar  stacked"
              },
              {
                  "id": "chart-bell-curve",
                  "name": "chart  bell  curve"
              },
              {
                  "id": "chart-bell-curve-cumulative",
                  "name": "chart  bell  curve  cumulative"
              },
              {
                  "id": "chart-box",
                  "name": "chart  box"
              },
              {
                  "id": "chart-box-outline",
                  "name": "chart  box  outline"
              },
              {
                  "id": "chart-box-plus-outline",
                  "name": "chart  box  plus  outline"
              },
              {
                  "id": "chart-bubble",
                  "name": "chart  bubble"
              },
              {
                  "id": "chart-donut",
                  "name": "chart  donut"
              },
              {
                  "id": "chart-donut-variant",
                  "name": "chart  donut  variant"
              },
              {
                  "id": "chart-gantt",
                  "name": "chart  gantt"
              },
              {
                  "id": "chart-histogram",
                  "name": "chart  histogram"
              },
              {
                  "id": "chart-line",
                  "name": "chart  line"
              },
              {
                  "id": "chart-line-stacked",
                  "name": "chart  line  stacked"
              },
              {
                  "id": "chart-line-variant",
                  "name": "chart  line  variant"
              },
              {
                  "id": "chart-multiline",
                  "name": "chart  multiline"
              },
              {
                  "id": "chart-multiple",
                  "name": "chart  multiple"
              },
              {
                  "id": "chart-pie",
                  "name": "chart  pie"
              },
              {
                  "id": "chart-pie-outline",
                  "name": "chart  pie  outline"
              },
              {
                  "id": "chart-ppf",
                  "name": "chart  ppf"
              },
              {
                  "id": "chart-sankey",
                  "name": "chart  sankey"
              },
              {
                  "id": "chart-sankey-variant",
                  "name": "chart  sankey  variant"
              },
              {
                  "id": "chart-scatter-plot",
                  "name": "chart  scatter  plot"
              },
              {
                  "id": "chart-scatter-plot-hexbin",
                  "name": "chart  scatter  plot  hexbin"
              },
              {
                  "id": "chart-timeline",
                  "name": "chart  timeline"
              },
              {
                  "id": "chart-timeline-variant",
                  "name": "chart  timeline  variant"
              },
              {
                  "id": "chart-timeline-variant-shimmer",
                  "name": "chart  timeline  variant  shimmer"
              },
              {
                  "id": "chart-tree",
                  "name": "chart  tree"
              },
              {
                  "id": "chart-waterfall",
                  "name": "chart  waterfall"
              },
              {
                  "id": "chat",
                  "name": "chat"
              },
              {
                  "id": "chat-alert",
                  "name": "chat  alert"
              },
              {
                  "id": "chat-alert-outline",
                  "name": "chat  alert  outline"
              },
              {
                  "id": "chat-minus",
                  "name": "chat  minus"
              },
              {
                  "id": "chat-minus-outline",
                  "name": "chat  minus  outline"
              },
              {
                  "id": "chat-outline",
                  "name": "chat  outline"
              },
              {
                  "id": "chat-plus",
                  "name": "chat  plus"
              },
              {
                  "id": "chat-plus-outline",
                  "name": "chat  plus  outline"
              },
              {
                  "id": "chat-processing",
                  "name": "chat  processing"
              },
              {
                  "id": "chat-processing-outline",
                  "name": "chat  processing  outline"
              },
              {
                  "id": "chat-question",
                  "name": "chat  question"
              },
              {
                  "id": "chat-question-outline",
                  "name": "chat  question  outline"
              },
              {
                  "id": "chat-remove",
                  "name": "chat  remove"
              },
              {
                  "id": "chat-remove-outline",
                  "name": "chat  remove  outline"
              },
              {
                  "id": "chat-sleep",
                  "name": "chat  sleep"
              },
              {
                  "id": "chat-sleep-outline",
                  "name": "chat  sleep  outline"
              },
              {
                  "id": "check",
                  "name": "check"
              },
              {
                  "id": "check-all",
                  "name": "check  all"
              },
              {
                  "id": "check-bold",
                  "name": "check  bold"
              },
              {
                  "id": "check-circle",
                  "name": "check  circle"
              },
              {
                  "id": "check-circle-outline",
                  "name": "check  circle  outline"
              },
              {
                  "id": "check-decagram",
                  "name": "check  decagram"
              },
              {
                  "id": "check-decagram-outline",
                  "name": "check  decagram  outline"
              },
              {
                  "id": "check-network",
                  "name": "check  network"
              },
              {
                  "id": "check-network-outline",
                  "name": "check  network  outline"
              },
              {
                  "id": "check-outline",
                  "name": "check  outline"
              },
              {
                  "id": "check-underline",
                  "name": "check  underline"
              },
              {
                  "id": "check-underline-circle",
                  "name": "check  underline  circle"
              },
              {
                  "id": "check-underline-circle-outline",
                  "name": "check  underline  circle  outline"
              },
              {
                  "id": "checkbook",
                  "name": "checkbook"
              },
              {
                  "id": "checkbook-arrow-left",
                  "name": "checkbook  arrow  left"
              },
              {
                  "id": "checkbook-arrow-right",
                  "name": "checkbook  arrow  right"
              },
              {
                  "id": "checkbox-blank",
                  "name": "checkbox  blank"
              },
              {
                  "id": "checkbox-blank-badge",
                  "name": "checkbox  blank  badge"
              },
              {
                  "id": "checkbox-blank-badge-outline",
                  "name": "checkbox  blank  badge  outline"
              },
              {
                  "id": "checkbox-blank-circle",
                  "name": "checkbox  blank  circle"
              },
              {
                  "id": "checkbox-blank-circle-outline",
                  "name": "checkbox  blank  circle  outline"
              },
              {
                  "id": "checkbox-blank-off",
                  "name": "checkbox  blank  off"
              },
              {
                  "id": "checkbox-blank-off-outline",
                  "name": "checkbox  blank  off  outline"
              },
              {
                  "id": "checkbox-blank-outline",
                  "name": "checkbox  blank  outline"
              },
              {
                  "id": "checkbox-intermediate",
                  "name": "checkbox  intermediate"
              },
              {
                  "id": "checkbox-intermediate-variant",
                  "name": "checkbox  intermediate  variant"
              },
              {
                  "id": "checkbox-marked",
                  "name": "checkbox  marked"
              },
              {
                  "id": "checkbox-marked-circle",
                  "name": "checkbox  marked  circle"
              },
              {
                  "id": "checkbox-marked-circle-auto-outline",
                  "name": "checkbox  marked  circle  auto  outline"
              },
              {
                  "id": "checkbox-marked-circle-minus-outline",
                  "name": "checkbox  marked  circle  minus  outline"
              },
              {
                  "id": "checkbox-marked-circle-outline",
                  "name": "checkbox  marked  circle  outline"
              },
              {
                  "id": "checkbox-marked-circle-plus-outline",
                  "name": "checkbox  marked  circle  plus  outline"
              },
              {
                  "id": "checkbox-marked-outline",
                  "name": "checkbox  marked  outline"
              },
              {
                  "id": "checkbox-multiple-blank",
                  "name": "checkbox  multiple  blank"
              },
              {
                  "id": "checkbox-multiple-blank-circle",
                  "name": "checkbox  multiple  blank  circle"
              },
              {
                  "id": "checkbox-multiple-blank-circle-outline",
                  "name": "checkbox  multiple  blank  circle  outline"
              },
              {
                  "id": "checkbox-multiple-blank-outline",
                  "name": "checkbox  multiple  blank  outline"
              },
              {
                  "id": "checkbox-multiple-marked",
                  "name": "checkbox  multiple  marked"
              },
              {
                  "id": "checkbox-multiple-marked-circle",
                  "name": "checkbox  multiple  marked  circle"
              },
              {
                  "id": "checkbox-multiple-marked-circle-outline",
                  "name": "checkbox  multiple  marked  circle  outline"
              },
              {
                  "id": "checkbox-multiple-marked-outline",
                  "name": "checkbox  multiple  marked  outline"
              },
              {
                  "id": "checkbox-multiple-outline",
                  "name": "checkbox  multiple  outline"
              },
              {
                  "id": "checkbox-outline",
                  "name": "checkbox  outline"
              },
              {
                  "id": "checkerboard",
                  "name": "checkerboard"
              },
              {
                  "id": "checkerboard-minus",
                  "name": "checkerboard  minus"
              },
              {
                  "id": "checkerboard-plus",
                  "name": "checkerboard  plus"
              },
              {
                  "id": "checkerboard-remove",
                  "name": "checkerboard  remove"
              },
              {
                  "id": "cheese",
                  "name": "cheese"
              },
              {
                  "id": "cheese-off",
                  "name": "cheese  off"
              },
              {
                  "id": "chef-hat",
                  "name": "chef  hat"
              },
              {
                  "id": "chemical-weapon",
                  "name": "chemical  weapon"
              },
              {
                  "id": "chess-bishop",
                  "name": "chess  bishop"
              },
              {
                  "id": "chess-king",
                  "name": "chess  king"
              },
              {
                  "id": "chess-knight",
                  "name": "chess  knight"
              },
              {
                  "id": "chess-pawn",
                  "name": "chess  pawn"
              },
              {
                  "id": "chess-queen",
                  "name": "chess  queen"
              },
              {
                  "id": "chess-rook",
                  "name": "chess  rook"
              },
              {
                  "id": "chevron-double-down",
                  "name": "chevron  double  down"
              },
              {
                  "id": "chevron-double-left",
                  "name": "chevron  double  left"
              },
              {
                  "id": "chevron-double-right",
                  "name": "chevron  double  right"
              },
              {
                  "id": "chevron-double-up",
                  "name": "chevron  double  up"
              },
              {
                  "id": "chevron-down",
                  "name": "chevron  down"
              },
              {
                  "id": "chevron-down-box",
                  "name": "chevron  down  box"
              },
              {
                  "id": "chevron-down-box-outline",
                  "name": "chevron  down  box  outline"
              },
              {
                  "id": "chevron-down-circle",
                  "name": "chevron  down  circle"
              },
              {
                  "id": "chevron-down-circle-outline",
                  "name": "chevron  down  circle  outline"
              },
              {
                  "id": "chevron-left",
                  "name": "chevron  left"
              },
              {
                  "id": "chevron-left-box",
                  "name": "chevron  left  box"
              },
              {
                  "id": "chevron-left-box-outline",
                  "name": "chevron  left  box  outline"
              },
              {
                  "id": "chevron-left-circle",
                  "name": "chevron  left  circle"
              },
              {
                  "id": "chevron-left-circle-outline",
                  "name": "chevron  left  circle  outline"
              },
              {
                  "id": "chevron-right",
                  "name": "chevron  right"
              },
              {
                  "id": "chevron-right-box",
                  "name": "chevron  right  box"
              },
              {
                  "id": "chevron-right-box-outline",
                  "name": "chevron  right  box  outline"
              },
              {
                  "id": "chevron-right-circle",
                  "name": "chevron  right  circle"
              },
              {
                  "id": "chevron-right-circle-outline",
                  "name": "chevron  right  circle  outline"
              },
              {
                  "id": "chevron-triple-down",
                  "name": "chevron  triple  down"
              },
              {
                  "id": "chevron-triple-left",
                  "name": "chevron  triple  left"
              },
              {
                  "id": "chevron-triple-right",
                  "name": "chevron  triple  right"
              },
              {
                  "id": "chevron-triple-up",
                  "name": "chevron  triple  up"
              },
              {
                  "id": "chevron-up",
                  "name": "chevron  up"
              },
              {
                  "id": "chevron-up-box",
                  "name": "chevron  up  box"
              },
              {
                  "id": "chevron-up-box-outline",
                  "name": "chevron  up  box  outline"
              },
              {
                  "id": "chevron-up-circle",
                  "name": "chevron  up  circle"
              },
              {
                  "id": "chevron-up-circle-outline",
                  "name": "chevron  up  circle  outline"
              },
              {
                  "id": "chili-alert",
                  "name": "chili  alert"
              },
              {
                  "id": "chili-alert-outline",
                  "name": "chili  alert  outline"
              },
              {
                  "id": "chili-hot",
                  "name": "chili  hot"
              },
              {
                  "id": "chili-hot-outline",
                  "name": "chili  hot  outline"
              },
              {
                  "id": "chili-medium",
                  "name": "chili  medium"
              },
              {
                  "id": "chili-medium-outline",
                  "name": "chili  medium  outline"
              },
              {
                  "id": "chili-mild",
                  "name": "chili  mild"
              },
              {
                  "id": "chili-mild-outline",
                  "name": "chili  mild  outline"
              },
              {
                  "id": "chili-off",
                  "name": "chili  off"
              },
              {
                  "id": "chili-off-outline",
                  "name": "chili  off  outline"
              },
              {
                  "id": "chip",
                  "name": "chip"
              },
              {
                  "id": "church",
                  "name": "church"
              },
              {
                  "id": "church-outline",
                  "name": "church  outline"
              },
              {
                  "id": "cigar",
                  "name": "cigar"
              },
              {
                  "id": "cigar-off",
                  "name": "cigar  off"
              },
              {
                  "id": "circle",
                  "name": "circle"
              },
              {
                  "id": "circle-box",
                  "name": "circle  box"
              },
              {
                  "id": "circle-box-outline",
                  "name": "circle  box  outline"
              },
              {
                  "id": "circle-double",
                  "name": "circle  double"
              },
              {
                  "id": "circle-edit-outline",
                  "name": "circle  edit  outline"
              },
              {
                  "id": "circle-expand",
                  "name": "circle  expand"
              },
              {
                  "id": "circle-half",
                  "name": "circle  half"
              },
              {
                  "id": "circle-half-full",
                  "name": "circle  half  full"
              },
              {
                  "id": "circle-medium",
                  "name": "circle  medium"
              },
              {
                  "id": "circle-multiple",
                  "name": "circle  multiple"
              },
              {
                  "id": "circle-multiple-outline",
                  "name": "circle  multiple  outline"
              },
              {
                  "id": "circle-off-outline",
                  "name": "circle  off  outline"
              },
              {
                  "id": "circle-opacity",
                  "name": "circle  opacity"
              },
              {
                  "id": "circle-outline",
                  "name": "circle  outline"
              },
              {
                  "id": "circle-slice-1",
                  "name": "circle  slice  1"
              },
              {
                  "id": "circle-slice-2",
                  "name": "circle  slice  2"
              },
              {
                  "id": "circle-slice-3",
                  "name": "circle  slice  3"
              },
              {
                  "id": "circle-slice-4",
                  "name": "circle  slice  4"
              },
              {
                  "id": "circle-slice-5",
                  "name": "circle  slice  5"
              },
              {
                  "id": "circle-slice-6",
                  "name": "circle  slice  6"
              },
              {
                  "id": "circle-slice-7",
                  "name": "circle  slice  7"
              },
              {
                  "id": "circle-slice-8",
                  "name": "circle  slice  8"
              },
              {
                  "id": "circle-small",
                  "name": "circle  small"
              },
              {
                  "id": "circular-saw",
                  "name": "circular  saw"
              },
              {
                  "id": "city",
                  "name": "city"
              },
              {
                  "id": "city-switch",
                  "name": "city  switch"
              },
              {
                  "id": "city-variant",
                  "name": "city  variant"
              },
              {
                  "id": "city-variant-outline",
                  "name": "city  variant  outline"
              },
              {
                  "id": "clipboard",
                  "name": "clipboard"
              },
              {
                  "id": "clipboard-account",
                  "name": "clipboard  account"
              },
              {
                  "id": "clipboard-account-outline",
                  "name": "clipboard  account  outline"
              },
              {
                  "id": "clipboard-alert",
                  "name": "clipboard  alert"
              },
              {
                  "id": "clipboard-alert-outline",
                  "name": "clipboard  alert  outline"
              },
              {
                  "id": "clipboard-arrow-down",
                  "name": "clipboard  arrow  down"
              },
              {
                  "id": "clipboard-arrow-down-outline",
                  "name": "clipboard  arrow  down  outline"
              },
              {
                  "id": "clipboard-arrow-left",
                  "name": "clipboard  arrow  left"
              },
              {
                  "id": "clipboard-arrow-left-outline",
                  "name": "clipboard  arrow  left  outline"
              },
              {
                  "id": "clipboard-arrow-right",
                  "name": "clipboard  arrow  right"
              },
              {
                  "id": "clipboard-arrow-right-outline",
                  "name": "clipboard  arrow  right  outline"
              },
              {
                  "id": "clipboard-arrow-up",
                  "name": "clipboard  arrow  up"
              },
              {
                  "id": "clipboard-arrow-up-outline",
                  "name": "clipboard  arrow  up  outline"
              },
              {
                  "id": "clipboard-check",
                  "name": "clipboard  check"
              },
              {
                  "id": "clipboard-check-multiple",
                  "name": "clipboard  check  multiple"
              },
              {
                  "id": "clipboard-check-multiple-outline",
                  "name": "clipboard  check  multiple  outline"
              },
              {
                  "id": "clipboard-check-outline",
                  "name": "clipboard  check  outline"
              },
              {
                  "id": "clipboard-clock",
                  "name": "clipboard  clock"
              },
              {
                  "id": "clipboard-clock-outline",
                  "name": "clipboard  clock  outline"
              },
              {
                  "id": "clipboard-edit",
                  "name": "clipboard  edit"
              },
              {
                  "id": "clipboard-edit-outline",
                  "name": "clipboard  edit  outline"
              },
              {
                  "id": "clipboard-file",
                  "name": "clipboard  file"
              },
              {
                  "id": "clipboard-file-outline",
                  "name": "clipboard  file  outline"
              },
              {
                  "id": "clipboard-flow",
                  "name": "clipboard  flow"
              },
              {
                  "id": "clipboard-flow-outline",
                  "name": "clipboard  flow  outline"
              },
              {
                  "id": "clipboard-list",
                  "name": "clipboard  list"
              },
              {
                  "id": "clipboard-list-outline",
                  "name": "clipboard  list  outline"
              },
              {
                  "id": "clipboard-minus",
                  "name": "clipboard  minus"
              },
              {
                  "id": "clipboard-minus-outline",
                  "name": "clipboard  minus  outline"
              },
              {
                  "id": "clipboard-multiple",
                  "name": "clipboard  multiple"
              },
              {
                  "id": "clipboard-multiple-outline",
                  "name": "clipboard  multiple  outline"
              },
              {
                  "id": "clipboard-off",
                  "name": "clipboard  off"
              },
              {
                  "id": "clipboard-off-outline",
                  "name": "clipboard  off  outline"
              },
              {
                  "id": "clipboard-outline",
                  "name": "clipboard  outline"
              },
              {
                  "id": "clipboard-play",
                  "name": "clipboard  play"
              },
              {
                  "id": "clipboard-play-multiple",
                  "name": "clipboard  play  multiple"
              },
              {
                  "id": "clipboard-play-multiple-outline",
                  "name": "clipboard  play  multiple  outline"
              },
              {
                  "id": "clipboard-play-outline",
                  "name": "clipboard  play  outline"
              },
              {
                  "id": "clipboard-plus",
                  "name": "clipboard  plus"
              },
              {
                  "id": "clipboard-plus-outline",
                  "name": "clipboard  plus  outline"
              },
              {
                  "id": "clipboard-pulse",
                  "name": "clipboard  pulse"
              },
              {
                  "id": "clipboard-pulse-outline",
                  "name": "clipboard  pulse  outline"
              },
              {
                  "id": "clipboard-remove",
                  "name": "clipboard  remove"
              },
              {
                  "id": "clipboard-remove-outline",
                  "name": "clipboard  remove  outline"
              },
              {
                  "id": "clipboard-search",
                  "name": "clipboard  search"
              },
              {
                  "id": "clipboard-search-outline",
                  "name": "clipboard  search  outline"
              },
              {
                  "id": "clipboard-text",
                  "name": "clipboard  text"
              },
              {
                  "id": "clipboard-text-clock",
                  "name": "clipboard  text  clock"
              },
              {
                  "id": "clipboard-text-clock-outline",
                  "name": "clipboard  text  clock  outline"
              },
              {
                  "id": "clipboard-text-multiple",
                  "name": "clipboard  text  multiple"
              },
              {
                  "id": "clipboard-text-multiple-outline",
                  "name": "clipboard  text  multiple  outline"
              },
              {
                  "id": "clipboard-text-off",
                  "name": "clipboard  text  off"
              },
              {
                  "id": "clipboard-text-off-outline",
                  "name": "clipboard  text  off  outline"
              },
              {
                  "id": "clipboard-text-outline",
                  "name": "clipboard  text  outline"
              },
              {
                  "id": "clipboard-text-play",
                  "name": "clipboard  text  play"
              },
              {
                  "id": "clipboard-text-play-outline",
                  "name": "clipboard  text  play  outline"
              },
              {
                  "id": "clipboard-text-search",
                  "name": "clipboard  text  search"
              },
              {
                  "id": "clipboard-text-search-outline",
                  "name": "clipboard  text  search  outline"
              },
              {
                  "id": "clippy",
                  "name": "clippy"
              },
              {
                  "id": "clock",
                  "name": "clock"
              },
              {
                  "id": "clock-alert",
                  "name": "clock  alert"
              },
              {
                  "id": "clock-alert-outline",
                  "name": "clock  alert  outline"
              },
              {
                  "id": "clock-check",
                  "name": "clock  check"
              },
              {
                  "id": "clock-check-outline",
                  "name": "clock  check  outline"
              },
              {
                  "id": "clock-digital",
                  "name": "clock  digital"
              },
              {
                  "id": "clock-edit",
                  "name": "clock  edit"
              },
              {
                  "id": "clock-edit-outline",
                  "name": "clock  edit  outline"
              },
              {
                  "id": "clock-end",
                  "name": "clock  end"
              },
              {
                  "id": "clock-fast",
                  "name": "clock  fast"
              },
              {
                  "id": "clock-in",
                  "name": "clock  in"
              },
              {
                  "id": "clock-minus",
                  "name": "clock  minus"
              },
              {
                  "id": "clock-minus-outline",
                  "name": "clock  minus  outline"
              },
              {
                  "id": "clock-out",
                  "name": "clock  out"
              },
              {
                  "id": "clock-outline",
                  "name": "clock  outline"
              },
              {
                  "id": "clock-plus",
                  "name": "clock  plus"
              },
              {
                  "id": "clock-plus-outline",
                  "name": "clock  plus  outline"
              },
              {
                  "id": "clock-remove",
                  "name": "clock  remove"
              },
              {
                  "id": "clock-remove-outline",
                  "name": "clock  remove  outline"
              },
              {
                  "id": "clock-star-four-points",
                  "name": "clock  star  four  points"
              },
              {
                  "id": "clock-star-four-points-outline",
                  "name": "clock  star  four  points  outline"
              },
              {
                  "id": "clock-start",
                  "name": "clock  start"
              },
              {
                  "id": "clock-time-eight",
                  "name": "clock  time  eight"
              },
              {
                  "id": "clock-time-eight-outline",
                  "name": "clock  time  eight  outline"
              },
              {
                  "id": "clock-time-eleven",
                  "name": "clock  time  eleven"
              },
              {
                  "id": "clock-time-eleven-outline",
                  "name": "clock  time  eleven  outline"
              },
              {
                  "id": "clock-time-five",
                  "name": "clock  time  five"
              },
              {
                  "id": "clock-time-five-outline",
                  "name": "clock  time  five  outline"
              },
              {
                  "id": "clock-time-four",
                  "name": "clock  time  four"
              },
              {
                  "id": "clock-time-four-outline",
                  "name": "clock  time  four  outline"
              },
              {
                  "id": "clock-time-nine",
                  "name": "clock  time  nine"
              },
              {
                  "id": "clock-time-nine-outline",
                  "name": "clock  time  nine  outline"
              },
              {
                  "id": "clock-time-one",
                  "name": "clock  time  one"
              },
              {
                  "id": "clock-time-one-outline",
                  "name": "clock  time  one  outline"
              },
              {
                  "id": "clock-time-seven",
                  "name": "clock  time  seven"
              },
              {
                  "id": "clock-time-seven-outline",
                  "name": "clock  time  seven  outline"
              },
              {
                  "id": "clock-time-six",
                  "name": "clock  time  six"
              },
              {
                  "id": "clock-time-six-outline",
                  "name": "clock  time  six  outline"
              },
              {
                  "id": "clock-time-ten",
                  "name": "clock  time  ten"
              },
              {
                  "id": "clock-time-ten-outline",
                  "name": "clock  time  ten  outline"
              },
              {
                  "id": "clock-time-three",
                  "name": "clock  time  three"
              },
              {
                  "id": "clock-time-three-outline",
                  "name": "clock  time  three  outline"
              },
              {
                  "id": "clock-time-twelve",
                  "name": "clock  time  twelve"
              },
              {
                  "id": "clock-time-twelve-outline",
                  "name": "clock  time  twelve  outline"
              },
              {
                  "id": "clock-time-two",
                  "name": "clock  time  two"
              },
              {
                  "id": "clock-time-two-outline",
                  "name": "clock  time  two  outline"
              },
              {
                  "id": "close",
                  "name": "close"
              },
              {
                  "id": "close-box",
                  "name": "close  box"
              },
              {
                  "id": "close-box-multiple",
                  "name": "close  box  multiple"
              },
              {
                  "id": "close-box-multiple-outline",
                  "name": "close  box  multiple  outline"
              },
              {
                  "id": "close-box-outline",
                  "name": "close  box  outline"
              },
              {
                  "id": "close-circle",
                  "name": "close  circle"
              },
              {
                  "id": "close-circle-multiple",
                  "name": "close  circle  multiple"
              },
              {
                  "id": "close-circle-multiple-outline",
                  "name": "close  circle  multiple  outline"
              },
              {
                  "id": "close-circle-outline",
                  "name": "close  circle  outline"
              },
              {
                  "id": "close-network",
                  "name": "close  network"
              },
              {
                  "id": "close-network-outline",
                  "name": "close  network  outline"
              },
              {
                  "id": "close-octagon",
                  "name": "close  octagon"
              },
              {
                  "id": "close-octagon-outline",
                  "name": "close  octagon  outline"
              },
              {
                  "id": "close-outline",
                  "name": "close  outline"
              },
              {
                  "id": "close-thick",
                  "name": "close  thick"
              },
              {
                  "id": "closed-caption",
                  "name": "closed  caption"
              },
              {
                  "id": "closed-caption-outline",
                  "name": "closed  caption  outline"
              },
              {
                  "id": "cloud",
                  "name": "cloud"
              },
              {
                  "id": "cloud-alert",
                  "name": "cloud  alert"
              },
              {
                  "id": "cloud-alert-outline",
                  "name": "cloud  alert  outline"
              },
              {
                  "id": "cloud-arrow-down",
                  "name": "cloud  arrow  down"
              },
              {
                  "id": "cloud-arrow-down-outline",
                  "name": "cloud  arrow  down  outline"
              },
              {
                  "id": "cloud-arrow-left",
                  "name": "cloud  arrow  left"
              },
              {
                  "id": "cloud-arrow-left-outline",
                  "name": "cloud  arrow  left  outline"
              },
              {
                  "id": "cloud-arrow-right",
                  "name": "cloud  arrow  right"
              },
              {
                  "id": "cloud-arrow-right-outline",
                  "name": "cloud  arrow  right  outline"
              },
              {
                  "id": "cloud-arrow-up",
                  "name": "cloud  arrow  up"
              },
              {
                  "id": "cloud-arrow-up-outline",
                  "name": "cloud  arrow  up  outline"
              },
              {
                  "id": "cloud-braces",
                  "name": "cloud  braces"
              },
              {
                  "id": "cloud-cancel",
                  "name": "cloud  cancel"
              },
              {
                  "id": "cloud-cancel-outline",
                  "name": "cloud  cancel  outline"
              },
              {
                  "id": "cloud-check",
                  "name": "cloud  check"
              },
              {
                  "id": "cloud-check-outline",
                  "name": "cloud  check  outline"
              },
              {
                  "id": "cloud-check-variant",
                  "name": "cloud  check  variant"
              },
              {
                  "id": "cloud-check-variant-outline",
                  "name": "cloud  check  variant  outline"
              },
              {
                  "id": "cloud-circle",
                  "name": "cloud  circle"
              },
              {
                  "id": "cloud-circle-outline",
                  "name": "cloud  circle  outline"
              },
              {
                  "id": "cloud-clock",
                  "name": "cloud  clock"
              },
              {
                  "id": "cloud-clock-outline",
                  "name": "cloud  clock  outline"
              },
              {
                  "id": "cloud-cog",
                  "name": "cloud  cog"
              },
              {
                  "id": "cloud-cog-outline",
                  "name": "cloud  cog  outline"
              },
              {
                  "id": "cloud-download",
                  "name": "cloud  download"
              },
              {
                  "id": "cloud-download-outline",
                  "name": "cloud  download  outline"
              },
              {
                  "id": "cloud-lock",
                  "name": "cloud  lock"
              },
              {
                  "id": "cloud-lock-open",
                  "name": "cloud  lock  open"
              },
              {
                  "id": "cloud-lock-open-outline",
                  "name": "cloud  lock  open  outline"
              },
              {
                  "id": "cloud-lock-outline",
                  "name": "cloud  lock  outline"
              },
              {
                  "id": "cloud-minus",
                  "name": "cloud  minus"
              },
              {
                  "id": "cloud-minus-outline",
                  "name": "cloud  minus  outline"
              },
              {
                  "id": "cloud-off",
                  "name": "cloud  off"
              },
              {
                  "id": "cloud-off-outline",
                  "name": "cloud  off  outline"
              },
              {
                  "id": "cloud-outline",
                  "name": "cloud  outline"
              },
              {
                  "id": "cloud-percent",
                  "name": "cloud  percent"
              },
              {
                  "id": "cloud-percent-outline",
                  "name": "cloud  percent  outline"
              },
              {
                  "id": "cloud-plus",
                  "name": "cloud  plus"
              },
              {
                  "id": "cloud-plus-outline",
                  "name": "cloud  plus  outline"
              },
              {
                  "id": "cloud-print",
                  "name": "cloud  print"
              },
              {
                  "id": "cloud-print-outline",
                  "name": "cloud  print  outline"
              },
              {
                  "id": "cloud-question",
                  "name": "cloud  question"
              },
              {
                  "id": "cloud-question-outline",
                  "name": "cloud  question  outline"
              },
              {
                  "id": "cloud-refresh",
                  "name": "cloud  refresh"
              },
              {
                  "id": "cloud-refresh-outline",
                  "name": "cloud  refresh  outline"
              },
              {
                  "id": "cloud-refresh-variant",
                  "name": "cloud  refresh  variant"
              },
              {
                  "id": "cloud-refresh-variant-outline",
                  "name": "cloud  refresh  variant  outline"
              },
              {
                  "id": "cloud-remove",
                  "name": "cloud  remove"
              },
              {
                  "id": "cloud-remove-outline",
                  "name": "cloud  remove  outline"
              },
              {
                  "id": "cloud-search",
                  "name": "cloud  search"
              },
              {
                  "id": "cloud-search-outline",
                  "name": "cloud  search  outline"
              },
              {
                  "id": "cloud-sync",
                  "name": "cloud  sync"
              },
              {
                  "id": "cloud-sync-outline",
                  "name": "cloud  sync  outline"
              },
              {
                  "id": "cloud-tags",
                  "name": "cloud  tags"
              },
              {
                  "id": "cloud-upload",
                  "name": "cloud  upload"
              },
              {
                  "id": "cloud-upload-outline",
                  "name": "cloud  upload  outline"
              },
              {
                  "id": "clouds",
                  "name": "clouds"
              },
              {
                  "id": "clover",
                  "name": "clover"
              },
              {
                  "id": "clover-outline",
                  "name": "clover  outline"
              },
              {
                  "id": "coach-lamp",
                  "name": "coach  lamp"
              },
              {
                  "id": "coach-lamp-variant",
                  "name": "coach  lamp  variant"
              },
              {
                  "id": "coat-rack",
                  "name": "coat  rack"
              },
              {
                  "id": "code-array",
                  "name": "code  array"
              },
              {
                  "id": "code-braces",
                  "name": "code  braces"
              },
              {
                  "id": "code-braces-box",
                  "name": "code  braces  box"
              },
              {
                  "id": "code-brackets",
                  "name": "code  brackets"
              },
              {
                  "id": "code-equal",
                  "name": "code  equal"
              },
              {
                  "id": "code-greater-than",
                  "name": "code  greater  than"
              },
              {
                  "id": "code-greater-than-or-equal",
                  "name": "code  greater  than  or  equal"
              },
              {
                  "id": "code-json",
                  "name": "code  json"
              },
              {
                  "id": "code-less-than",
                  "name": "code  less  than"
              },
              {
                  "id": "code-less-than-or-equal",
                  "name": "code  less  than  or  equal"
              },
              {
                  "id": "code-not-equal",
                  "name": "code  not  equal"
              },
              {
                  "id": "code-not-equal-variant",
                  "name": "code  not  equal  variant"
              },
              {
                  "id": "code-parentheses",
                  "name": "code  parentheses"
              },
              {
                  "id": "code-parentheses-box",
                  "name": "code  parentheses  box"
              },
              {
                  "id": "code-string",
                  "name": "code  string"
              },
              {
                  "id": "code-tags",
                  "name": "code  tags"
              },
              {
                  "id": "code-tags-check",
                  "name": "code  tags  check"
              },
              {
                  "id": "codepen",
                  "name": "codepen"
              },
              {
                  "id": "coffee",
                  "name": "coffee"
              },
              {
                  "id": "coffee-maker",
                  "name": "coffee  maker"
              },
              {
                  "id": "coffee-maker-check",
                  "name": "coffee  maker  check"
              },
              {
                  "id": "coffee-maker-check-outline",
                  "name": "coffee  maker  check  outline"
              },
              {
                  "id": "coffee-maker-outline",
                  "name": "coffee  maker  outline"
              },
              {
                  "id": "coffee-off",
                  "name": "coffee  off"
              },
              {
                  "id": "coffee-off-outline",
                  "name": "coffee  off  outline"
              },
              {
                  "id": "coffee-outline",
                  "name": "coffee  outline"
              },
              {
                  "id": "coffee-to-go",
                  "name": "coffee  to  go"
              },
              {
                  "id": "coffee-to-go-outline",
                  "name": "coffee  to  go  outline"
              },
              {
                  "id": "coffin",
                  "name": "coffin"
              },
              {
                  "id": "cog",
                  "name": "cog"
              },
              {
                  "id": "cog-box",
                  "name": "cog  box"
              },
              {
                  "id": "cog-clockwise",
                  "name": "cog  clockwise"
              },
              {
                  "id": "cog-counterclockwise",
                  "name": "cog  counterclockwise"
              },
              {
                  "id": "cog-off",
                  "name": "cog  off"
              },
              {
                  "id": "cog-off-outline",
                  "name": "cog  off  outline"
              },
              {
                  "id": "cog-outline",
                  "name": "cog  outline"
              },
              {
                  "id": "cog-pause",
                  "name": "cog  pause"
              },
              {
                  "id": "cog-pause-outline",
                  "name": "cog  pause  outline"
              },
              {
                  "id": "cog-play",
                  "name": "cog  play"
              },
              {
                  "id": "cog-play-outline",
                  "name": "cog  play  outline"
              },
              {
                  "id": "cog-refresh",
                  "name": "cog  refresh"
              },
              {
                  "id": "cog-refresh-outline",
                  "name": "cog  refresh  outline"
              },
              {
                  "id": "cog-stop",
                  "name": "cog  stop"
              },
              {
                  "id": "cog-stop-outline",
                  "name": "cog  stop  outline"
              },
              {
                  "id": "cog-sync",
                  "name": "cog  sync"
              },
              {
                  "id": "cog-sync-outline",
                  "name": "cog  sync  outline"
              },
              {
                  "id": "cog-transfer",
                  "name": "cog  transfer"
              },
              {
                  "id": "cog-transfer-outline",
                  "name": "cog  transfer  outline"
              },
              {
                  "id": "cogs",
                  "name": "cogs"
              },
              {
                  "id": "collage",
                  "name": "collage"
              },
              {
                  "id": "collapse-all",
                  "name": "collapse  all"
              },
              {
                  "id": "collapse-all-outline",
                  "name": "collapse  all  outline"
              },
              {
                  "id": "color-helper",
                  "name": "color  helper"
              },
              {
                  "id": "comma",
                  "name": "comma"
              },
              {
                  "id": "comma-box",
                  "name": "comma  box"
              },
              {
                  "id": "comma-box-outline",
                  "name": "comma  box  outline"
              },
              {
                  "id": "comma-circle",
                  "name": "comma  circle"
              },
              {
                  "id": "comma-circle-outline",
                  "name": "comma  circle  outline"
              },
              {
                  "id": "comment",
                  "name": "comment"
              },
              {
                  "id": "comment-account",
                  "name": "comment  account"
              },
              {
                  "id": "comment-account-outline",
                  "name": "comment  account  outline"
              },
              {
                  "id": "comment-alert",
                  "name": "comment  alert"
              },
              {
                  "id": "comment-alert-outline",
                  "name": "comment  alert  outline"
              },
              {
                  "id": "comment-arrow-left",
                  "name": "comment  arrow  left"
              },
              {
                  "id": "comment-arrow-left-outline",
                  "name": "comment  arrow  left  outline"
              },
              {
                  "id": "comment-arrow-right",
                  "name": "comment  arrow  right"
              },
              {
                  "id": "comment-arrow-right-outline",
                  "name": "comment  arrow  right  outline"
              },
              {
                  "id": "comment-bookmark",
                  "name": "comment  bookmark"
              },
              {
                  "id": "comment-bookmark-outline",
                  "name": "comment  bookmark  outline"
              },
              {
                  "id": "comment-check",
                  "name": "comment  check"
              },
              {
                  "id": "comment-check-outline",
                  "name": "comment  check  outline"
              },
              {
                  "id": "comment-edit",
                  "name": "comment  edit"
              },
              {
                  "id": "comment-edit-outline",
                  "name": "comment  edit  outline"
              },
              {
                  "id": "comment-eye",
                  "name": "comment  eye"
              },
              {
                  "id": "comment-eye-outline",
                  "name": "comment  eye  outline"
              },
              {
                  "id": "comment-flash",
                  "name": "comment  flash"
              },
              {
                  "id": "comment-flash-outline",
                  "name": "comment  flash  outline"
              },
              {
                  "id": "comment-minus",
                  "name": "comment  minus"
              },
              {
                  "id": "comment-minus-outline",
                  "name": "comment  minus  outline"
              },
              {
                  "id": "comment-multiple",
                  "name": "comment  multiple"
              },
              {
                  "id": "comment-multiple-outline",
                  "name": "comment  multiple  outline"
              },
              {
                  "id": "comment-off",
                  "name": "comment  off"
              },
              {
                  "id": "comment-off-outline",
                  "name": "comment  off  outline"
              },
              {
                  "id": "comment-outline",
                  "name": "comment  outline"
              },
              {
                  "id": "comment-plus",
                  "name": "comment  plus"
              },
              {
                  "id": "comment-plus-outline",
                  "name": "comment  plus  outline"
              },
              {
                  "id": "comment-processing",
                  "name": "comment  processing"
              },
              {
                  "id": "comment-processing-outline",
                  "name": "comment  processing  outline"
              },
              {
                  "id": "comment-question",
                  "name": "comment  question"
              },
              {
                  "id": "comment-question-outline",
                  "name": "comment  question  outline"
              },
              {
                  "id": "comment-quote",
                  "name": "comment  quote"
              },
              {
                  "id": "comment-quote-outline",
                  "name": "comment  quote  outline"
              },
              {
                  "id": "comment-remove",
                  "name": "comment  remove"
              },
              {
                  "id": "comment-remove-outline",
                  "name": "comment  remove  outline"
              },
              {
                  "id": "comment-search",
                  "name": "comment  search"
              },
              {
                  "id": "comment-search-outline",
                  "name": "comment  search  outline"
              },
              {
                  "id": "comment-text",
                  "name": "comment  text"
              },
              {
                  "id": "comment-text-multiple",
                  "name": "comment  text  multiple"
              },
              {
                  "id": "comment-text-multiple-outline",
                  "name": "comment  text  multiple  outline"
              },
              {
                  "id": "comment-text-outline",
                  "name": "comment  text  outline"
              },
              {
                  "id": "compare",
                  "name": "compare"
              },
              {
                  "id": "compare-horizontal",
                  "name": "compare  horizontal"
              },
              {
                  "id": "compare-remove",
                  "name": "compare  remove"
              },
              {
                  "id": "compare-vertical",
                  "name": "compare  vertical"
              },
              {
                  "id": "compass",
                  "name": "compass"
              },
              {
                  "id": "compass-off",
                  "name": "compass  off"
              },
              {
                  "id": "compass-off-outline",
                  "name": "compass  off  outline"
              },
              {
                  "id": "compass-outline",
                  "name": "compass  outline"
              },
              {
                  "id": "compass-rose",
                  "name": "compass  rose"
              },
              {
                  "id": "compost",
                  "name": "compost"
              },
              {
                  "id": "cone",
                  "name": "cone"
              },
              {
                  "id": "cone-off",
                  "name": "cone  off"
              },
              {
                  "id": "connection",
                  "name": "connection"
              },
              {
                  "id": "console",
                  "name": "console"
              },
              {
                  "id": "console-line",
                  "name": "console  line"
              },
              {
                  "id": "console-network",
                  "name": "console  network"
              },
              {
                  "id": "console-network-outline",
                  "name": "console  network  outline"
              },
              {
                  "id": "consolidate",
                  "name": "consolidate"
              },
              {
                  "id": "contactless-payment",
                  "name": "contactless  payment"
              },
              {
                  "id": "contactless-payment-circle",
                  "name": "contactless  payment  circle"
              },
              {
                  "id": "contactless-payment-circle-outline",
                  "name": "contactless  payment  circle  outline"
              },
              {
                  "id": "contacts",
                  "name": "contacts"
              },
              {
                  "id": "contacts-outline",
                  "name": "contacts  outline"
              },
              {
                  "id": "contain",
                  "name": "contain"
              },
              {
                  "id": "contain-end",
                  "name": "contain  end"
              },
              {
                  "id": "contain-start",
                  "name": "contain  start"
              },
              {
                  "id": "content-copy",
                  "name": "content  copy"
              },
              {
                  "id": "content-cut",
                  "name": "content  cut"
              },
              {
                  "id": "content-duplicate",
                  "name": "content  duplicate"
              },
              {
                  "id": "content-paste",
                  "name": "content  paste"
              },
              {
                  "id": "content-save",
                  "name": "content  save"
              },
              {
                  "id": "content-save-alert",
                  "name": "content  save  alert"
              },
              {
                  "id": "content-save-alert-outline",
                  "name": "content  save  alert  outline"
              },
              {
                  "id": "content-save-all",
                  "name": "content  save  all"
              },
              {
                  "id": "content-save-all-outline",
                  "name": "content  save  all  outline"
              },
              {
                  "id": "content-save-check",
                  "name": "content  save  check"
              },
              {
                  "id": "content-save-check-outline",
                  "name": "content  save  check  outline"
              },
              {
                  "id": "content-save-cog",
                  "name": "content  save  cog"
              },
              {
                  "id": "content-save-cog-outline",
                  "name": "content  save  cog  outline"
              },
              {
                  "id": "content-save-edit",
                  "name": "content  save  edit"
              },
              {
                  "id": "content-save-edit-outline",
                  "name": "content  save  edit  outline"
              },
              {
                  "id": "content-save-minus",
                  "name": "content  save  minus"
              },
              {
                  "id": "content-save-minus-outline",
                  "name": "content  save  minus  outline"
              },
              {
                  "id": "content-save-move",
                  "name": "content  save  move"
              },
              {
                  "id": "content-save-move-outline",
                  "name": "content  save  move  outline"
              },
              {
                  "id": "content-save-off",
                  "name": "content  save  off"
              },
              {
                  "id": "content-save-off-outline",
                  "name": "content  save  off  outline"
              },
              {
                  "id": "content-save-outline",
                  "name": "content  save  outline"
              },
              {
                  "id": "content-save-plus",
                  "name": "content  save  plus"
              },
              {
                  "id": "content-save-plus-outline",
                  "name": "content  save  plus  outline"
              },
              {
                  "id": "content-save-settings",
                  "name": "content  save  settings"
              },
              {
                  "id": "content-save-settings-outline",
                  "name": "content  save  settings  outline"
              },
              {
                  "id": "contrast",
                  "name": "contrast"
              },
              {
                  "id": "contrast-box",
                  "name": "contrast  box"
              },
              {
                  "id": "contrast-circle",
                  "name": "contrast  circle"
              },
              {
                  "id": "controller",
                  "name": "controller"
              },
              {
                  "id": "controller-classic",
                  "name": "controller  classic"
              },
              {
                  "id": "controller-classic-outline",
                  "name": "controller  classic  outline"
              },
              {
                  "id": "controller-off",
                  "name": "controller  off"
              },
              {
                  "id": "cookie",
                  "name": "cookie"
              },
              {
                  "id": "cookie-alert",
                  "name": "cookie  alert"
              },
              {
                  "id": "cookie-alert-outline",
                  "name": "cookie  alert  outline"
              },
              {
                  "id": "cookie-check",
                  "name": "cookie  check"
              },
              {
                  "id": "cookie-check-outline",
                  "name": "cookie  check  outline"
              },
              {
                  "id": "cookie-clock",
                  "name": "cookie  clock"
              },
              {
                  "id": "cookie-clock-outline",
                  "name": "cookie  clock  outline"
              },
              {
                  "id": "cookie-cog",
                  "name": "cookie  cog"
              },
              {
                  "id": "cookie-cog-outline",
                  "name": "cookie  cog  outline"
              },
              {
                  "id": "cookie-edit",
                  "name": "cookie  edit"
              },
              {
                  "id": "cookie-edit-outline",
                  "name": "cookie  edit  outline"
              },
              {
                  "id": "cookie-lock",
                  "name": "cookie  lock"
              },
              {
                  "id": "cookie-lock-outline",
                  "name": "cookie  lock  outline"
              },
              {
                  "id": "cookie-minus",
                  "name": "cookie  minus"
              },
              {
                  "id": "cookie-minus-outline",
                  "name": "cookie  minus  outline"
              },
              {
                  "id": "cookie-off",
                  "name": "cookie  off"
              },
              {
                  "id": "cookie-off-outline",
                  "name": "cookie  off  outline"
              },
              {
                  "id": "cookie-outline",
                  "name": "cookie  outline"
              },
              {
                  "id": "cookie-plus",
                  "name": "cookie  plus"
              },
              {
                  "id": "cookie-plus-outline",
                  "name": "cookie  plus  outline"
              },
              {
                  "id": "cookie-refresh",
                  "name": "cookie  refresh"
              },
              {
                  "id": "cookie-refresh-outline",
                  "name": "cookie  refresh  outline"
              },
              {
                  "id": "cookie-remove",
                  "name": "cookie  remove"
              },
              {
                  "id": "cookie-remove-outline",
                  "name": "cookie  remove  outline"
              },
              {
                  "id": "cookie-settings",
                  "name": "cookie  settings"
              },
              {
                  "id": "cookie-settings-outline",
                  "name": "cookie  settings  outline"
              },
              {
                  "id": "coolant-temperature",
                  "name": "coolant  temperature"
              },
              {
                  "id": "copyleft",
                  "name": "copyleft"
              },
              {
                  "id": "copyright",
                  "name": "copyright"
              },
              {
                  "id": "cordova",
                  "name": "cordova"
              },
              {
                  "id": "corn",
                  "name": "corn"
              },
              {
                  "id": "corn-off",
                  "name": "corn  off"
              },
              {
                  "id": "cosine-wave",
                  "name": "cosine  wave"
              },
              {
                  "id": "counter",
                  "name": "counter"
              },
              {
                  "id": "countertop",
                  "name": "countertop"
              },
              {
                  "id": "countertop-outline",
                  "name": "countertop  outline"
              },
              {
                  "id": "cow",
                  "name": "cow"
              },
              {
                  "id": "cow-off",
                  "name": "cow  off"
              },
              {
                  "id": "cpu-32-bit",
                  "name": "cpu  32  bit"
              },
              {
                  "id": "cpu-64-bit",
                  "name": "cpu  64  bit"
              },
              {
                  "id": "cradle",
                  "name": "cradle"
              },
              {
                  "id": "cradle-outline",
                  "name": "cradle  outline"
              },
              {
                  "id": "crane",
                  "name": "crane"
              },
              {
                  "id": "creation",
                  "name": "creation"
              },
              {
                  "id": "creation-outline",
                  "name": "creation  outline"
              },
              {
                  "id": "creative-commons",
                  "name": "creative  commons"
              },
              {
                  "id": "credit-card",
                  "name": "credit  card"
              },
              {
                  "id": "credit-card-check",
                  "name": "credit  card  check"
              },
              {
                  "id": "credit-card-check-outline",
                  "name": "credit  card  check  outline"
              },
              {
                  "id": "credit-card-chip",
                  "name": "credit  card  chip"
              },
              {
                  "id": "credit-card-chip-outline",
                  "name": "credit  card  chip  outline"
              },
              {
                  "id": "credit-card-clock",
                  "name": "credit  card  clock"
              },
              {
                  "id": "credit-card-clock-outline",
                  "name": "credit  card  clock  outline"
              },
              {
                  "id": "credit-card-edit",
                  "name": "credit  card  edit"
              },
              {
                  "id": "credit-card-edit-outline",
                  "name": "credit  card  edit  outline"
              },
              {
                  "id": "credit-card-fast",
                  "name": "credit  card  fast"
              },
              {
                  "id": "credit-card-fast-outline",
                  "name": "credit  card  fast  outline"
              },
              {
                  "id": "credit-card-lock",
                  "name": "credit  card  lock"
              },
              {
                  "id": "credit-card-lock-outline",
                  "name": "credit  card  lock  outline"
              },
              {
                  "id": "credit-card-marker",
                  "name": "credit  card  marker"
              },
              {
                  "id": "credit-card-marker-outline",
                  "name": "credit  card  marker  outline"
              },
              {
                  "id": "credit-card-minus",
                  "name": "credit  card  minus"
              },
              {
                  "id": "credit-card-minus-outline",
                  "name": "credit  card  minus  outline"
              },
              {
                  "id": "credit-card-multiple",
                  "name": "credit  card  multiple"
              },
              {
                  "id": "credit-card-multiple-outline",
                  "name": "credit  card  multiple  outline"
              },
              {
                  "id": "credit-card-off",
                  "name": "credit  card  off"
              },
              {
                  "id": "credit-card-off-outline",
                  "name": "credit  card  off  outline"
              },
              {
                  "id": "credit-card-outline",
                  "name": "credit  card  outline"
              },
              {
                  "id": "credit-card-plus",
                  "name": "credit  card  plus"
              },
              {
                  "id": "credit-card-plus-outline",
                  "name": "credit  card  plus  outline"
              },
              {
                  "id": "credit-card-refresh",
                  "name": "credit  card  refresh"
              },
              {
                  "id": "credit-card-refresh-outline",
                  "name": "credit  card  refresh  outline"
              },
              {
                  "id": "credit-card-refund",
                  "name": "credit  card  refund"
              },
              {
                  "id": "credit-card-refund-outline",
                  "name": "credit  card  refund  outline"
              },
              {
                  "id": "credit-card-remove",
                  "name": "credit  card  remove"
              },
              {
                  "id": "credit-card-remove-outline",
                  "name": "credit  card  remove  outline"
              },
              {
                  "id": "credit-card-scan",
                  "name": "credit  card  scan"
              },
              {
                  "id": "credit-card-scan-outline",
                  "name": "credit  card  scan  outline"
              },
              {
                  "id": "credit-card-search",
                  "name": "credit  card  search"
              },
              {
                  "id": "credit-card-search-outline",
                  "name": "credit  card  search  outline"
              },
              {
                  "id": "credit-card-settings",
                  "name": "credit  card  settings"
              },
              {
                  "id": "credit-card-settings-outline",
                  "name": "credit  card  settings  outline"
              },
              {
                  "id": "credit-card-sync",
                  "name": "credit  card  sync"
              },
              {
                  "id": "credit-card-sync-outline",
                  "name": "credit  card  sync  outline"
              },
              {
                  "id": "credit-card-wireless",
                  "name": "credit  card  wireless"
              },
              {
                  "id": "credit-card-wireless-off",
                  "name": "credit  card  wireless  off"
              },
              {
                  "id": "credit-card-wireless-off-outline",
                  "name": "credit  card  wireless  off  outline"
              },
              {
                  "id": "credit-card-wireless-outline",
                  "name": "credit  card  wireless  outline"
              },
              {
                  "id": "cricket",
                  "name": "cricket"
              },
              {
                  "id": "crop",
                  "name": "crop"
              },
              {
                  "id": "crop-free",
                  "name": "crop  free"
              },
              {
                  "id": "crop-landscape",
                  "name": "crop  landscape"
              },
              {
                  "id": "crop-portrait",
                  "name": "crop  portrait"
              },
              {
                  "id": "crop-rotate",
                  "name": "crop  rotate"
              },
              {
                  "id": "crop-square",
                  "name": "crop  square"
              },
              {
                  "id": "cross",
                  "name": "cross"
              },
              {
                  "id": "cross-bolnisi",
                  "name": "cross  bolnisi"
              },
              {
                  "id": "cross-celtic",
                  "name": "cross  celtic"
              },
              {
                  "id": "cross-outline",
                  "name": "cross  outline"
              },
              {
                  "id": "crosshairs",
                  "name": "crosshairs"
              },
              {
                  "id": "crosshairs-gps",
                  "name": "crosshairs  gps"
              },
              {
                  "id": "crosshairs-off",
                  "name": "crosshairs  off"
              },
              {
                  "id": "crosshairs-question",
                  "name": "crosshairs  question"
              },
              {
                  "id": "crowd",
                  "name": "crowd"
              },
              {
                  "id": "crown",
                  "name": "crown"
              },
              {
                  "id": "crown-circle",
                  "name": "crown  circle"
              },
              {
                  "id": "crown-circle-outline",
                  "name": "crown  circle  outline"
              },
              {
                  "id": "crown-outline",
                  "name": "crown  outline"
              },
              {
                  "id": "cryengine",
                  "name": "cryengine"
              },
              {
                  "id": "crystal-ball",
                  "name": "crystal  ball"
              },
              {
                  "id": "cube",
                  "name": "cube"
              },
              {
                  "id": "cube-off",
                  "name": "cube  off"
              },
              {
                  "id": "cube-off-outline",
                  "name": "cube  off  outline"
              },
              {
                  "id": "cube-outline",
                  "name": "cube  outline"
              },
              {
                  "id": "cube-scan",
                  "name": "cube  scan"
              },
              {
                  "id": "cube-send",
                  "name": "cube  send"
              },
              {
                  "id": "cube-unfolded",
                  "name": "cube  unfolded"
              },
              {
                  "id": "cup",
                  "name": "cup"
              },
              {
                  "id": "cup-off",
                  "name": "cup  off"
              },
              {
                  "id": "cup-off-outline",
                  "name": "cup  off  outline"
              },
              {
                  "id": "cup-outline",
                  "name": "cup  outline"
              },
              {
                  "id": "cup-water",
                  "name": "cup  water"
              },
              {
                  "id": "cupboard",
                  "name": "cupboard"
              },
              {
                  "id": "cupboard-outline",
                  "name": "cupboard  outline"
              },
              {
                  "id": "cupcake",
                  "name": "cupcake"
              },
              {
                  "id": "curling",
                  "name": "curling"
              },
              {
                  "id": "currency-bdt",
                  "name": "currency  bdt"
              },
              {
                  "id": "currency-brl",
                  "name": "currency  brl"
              },
              {
                  "id": "currency-btc",
                  "name": "currency  btc"
              },
              {
                  "id": "currency-cny",
                  "name": "currency  cny"
              },
              {
                  "id": "currency-eth",
                  "name": "currency  eth"
              },
              {
                  "id": "currency-eur",
                  "name": "currency  eur"
              },
              {
                  "id": "currency-eur-off",
                  "name": "currency  eur  off"
              },
              {
                  "id": "currency-fra",
                  "name": "currency  fra"
              },
              {
                  "id": "currency-gbp",
                  "name": "currency  gbp"
              },
              {
                  "id": "currency-ils",
                  "name": "currency  ils"
              },
              {
                  "id": "currency-inr",
                  "name": "currency  inr"
              },
              {
                  "id": "currency-jpy",
                  "name": "currency  jpy"
              },
              {
                  "id": "currency-krw",
                  "name": "currency  krw"
              },
              {
                  "id": "currency-kzt",
                  "name": "currency  kzt"
              },
              {
                  "id": "currency-mnt",
                  "name": "currency  mnt"
              },
              {
                  "id": "currency-ngn",
                  "name": "currency  ngn"
              },
              {
                  "id": "currency-php",
                  "name": "currency  php"
              },
              {
                  "id": "currency-rial",
                  "name": "currency  rial"
              },
              {
                  "id": "currency-rub",
                  "name": "currency  rub"
              },
              {
                  "id": "currency-rupee",
                  "name": "currency  rupee"
              },
              {
                  "id": "currency-sign",
                  "name": "currency  sign"
              },
              {
                  "id": "currency-thb",
                  "name": "currency  thb"
              },
              {
                  "id": "cursor-default-click",
                  "name": "cursor  default  click"
              },
              {
                  "id": "cursor-default-click-outline",
                  "name": "cursor  default  click  outline"
              },
              {
                  "id": "cursor-default-gesture",
                  "name": "cursor  default  gesture"
              },
              {
                  "id": "cursor-default-gesture-outline",
                  "name": "cursor  default  gesture  outline"
              },
              {
                  "id": "cursor-default-outline",
                  "name": "cursor  default  outline"
              },
              {
                  "id": "cursor-move",
                  "name": "cursor  move"
              },
              {
                  "id": "cursor-pointer",
                  "name": "cursor  pointer"
              },
              {
                  "id": "cursor-text",
                  "name": "cursor  text"
              },
              {
                  "id": "curtains",
                  "name": "curtains"
              },
              {
                  "id": "curtains-closed",
                  "name": "curtains  closed"
              },
              {
                  "id": "cylinder",
                  "name": "cylinder"
              },
              {
                  "id": "cylinder-off",
                  "name": "cylinder  off"
              },
              {
                  "id": "dance-ballroom",
                  "name": "dance  ballroom"
              },
              {
                  "id": "dance-pole",
                  "name": "dance  pole"
              },
              {
                  "id": "data-matrix",
                  "name": "data  matrix"
              },
              {
                  "id": "data-matrix-edit",
                  "name": "data  matrix  edit"
              },
              {
                  "id": "data-matrix-minus",
                  "name": "data  matrix  minus"
              },
              {
                  "id": "data-matrix-plus",
                  "name": "data  matrix  plus"
              },
              {
                  "id": "data-matrix-remove",
                  "name": "data  matrix  remove"
              },
              {
                  "id": "data-matrix-scan",
                  "name": "data  matrix  scan"
              },
              {
                  "id": "database",
                  "name": "database"
              },
              {
                  "id": "database-alert",
                  "name": "database  alert"
              },
              {
                  "id": "database-alert-outline",
                  "name": "database  alert  outline"
              },
              {
                  "id": "database-arrow-down",
                  "name": "database  arrow  down"
              },
              {
                  "id": "database-arrow-down-outline",
                  "name": "database  arrow  down  outline"
              },
              {
                  "id": "database-arrow-left",
                  "name": "database  arrow  left"
              },
              {
                  "id": "database-arrow-left-outline",
                  "name": "database  arrow  left  outline"
              },
              {
                  "id": "database-arrow-right",
                  "name": "database  arrow  right"
              },
              {
                  "id": "database-arrow-right-outline",
                  "name": "database  arrow  right  outline"
              },
              {
                  "id": "database-arrow-up",
                  "name": "database  arrow  up"
              },
              {
                  "id": "database-arrow-up-outline",
                  "name": "database  arrow  up  outline"
              },
              {
                  "id": "database-check",
                  "name": "database  check"
              },
              {
                  "id": "database-check-outline",
                  "name": "database  check  outline"
              },
              {
                  "id": "database-clock",
                  "name": "database  clock"
              },
              {
                  "id": "database-clock-outline",
                  "name": "database  clock  outline"
              },
              {
                  "id": "database-cog",
                  "name": "database  cog"
              },
              {
                  "id": "database-cog-outline",
                  "name": "database  cog  outline"
              },
              {
                  "id": "database-edit",
                  "name": "database  edit"
              },
              {
                  "id": "database-edit-outline",
                  "name": "database  edit  outline"
              },
              {
                  "id": "database-export",
                  "name": "database  export"
              },
              {
                  "id": "database-export-outline",
                  "name": "database  export  outline"
              },
              {
                  "id": "database-eye",
                  "name": "database  eye"
              },
              {
                  "id": "database-eye-off",
                  "name": "database  eye  off"
              },
              {
                  "id": "database-eye-off-outline",
                  "name": "database  eye  off  outline"
              },
              {
                  "id": "database-eye-outline",
                  "name": "database  eye  outline"
              },
              {
                  "id": "database-import",
                  "name": "database  import"
              },
              {
                  "id": "database-import-outline",
                  "name": "database  import  outline"
              },
              {
                  "id": "database-lock",
                  "name": "database  lock"
              },
              {
                  "id": "database-lock-outline",
                  "name": "database  lock  outline"
              },
              {
                  "id": "database-marker",
                  "name": "database  marker"
              },
              {
                  "id": "database-marker-outline",
                  "name": "database  marker  outline"
              },
              {
                  "id": "database-minus",
                  "name": "database  minus"
              },
              {
                  "id": "database-minus-outline",
                  "name": "database  minus  outline"
              },
              {
                  "id": "database-off",
                  "name": "database  off"
              },
              {
                  "id": "database-off-outline",
                  "name": "database  off  outline"
              },
              {
                  "id": "database-outline",
                  "name": "database  outline"
              },
              {
                  "id": "database-plus",
                  "name": "database  plus"
              },
              {
                  "id": "database-plus-outline",
                  "name": "database  plus  outline"
              },
              {
                  "id": "database-refresh",
                  "name": "database  refresh"
              },
              {
                  "id": "database-refresh-outline",
                  "name": "database  refresh  outline"
              },
              {
                  "id": "database-remove",
                  "name": "database  remove"
              },
              {
                  "id": "database-remove-outline",
                  "name": "database  remove  outline"
              },
              {
                  "id": "database-search",
                  "name": "database  search"
              },
              {
                  "id": "database-search-outline",
                  "name": "database  search  outline"
              },
              {
                  "id": "database-settings",
                  "name": "database  settings"
              },
              {
                  "id": "database-settings-outline",
                  "name": "database  settings  outline"
              },
              {
                  "id": "database-sync",
                  "name": "database  sync"
              },
              {
                  "id": "database-sync-outline",
                  "name": "database  sync  outline"
              },
              {
                  "id": "death-star",
                  "name": "death  star"
              },
              {
                  "id": "death-star-variant",
                  "name": "death  star  variant"
              },
              {
                  "id": "deathly-hallows",
                  "name": "deathly  hallows"
              },
              {
                  "id": "debian",
                  "name": "debian"
              },
              {
                  "id": "debug-step-into",
                  "name": "debug  step  into"
              },
              {
                  "id": "debug-step-out",
                  "name": "debug  step  out"
              },
              {
                  "id": "debug-step-over",
                  "name": "debug  step  over"
              },
              {
                  "id": "decagram",
                  "name": "decagram"
              },
              {
                  "id": "decagram-outline",
                  "name": "decagram  outline"
              },
              {
                  "id": "decimal",
                  "name": "decimal"
              },
              {
                  "id": "decimal-comma",
                  "name": "decimal  comma"
              },
              {
                  "id": "decimal-comma-decrease",
                  "name": "decimal  comma  decrease"
              },
              {
                  "id": "decimal-comma-increase",
                  "name": "decimal  comma  increase"
              },
              {
                  "id": "decimal-decrease",
                  "name": "decimal  decrease"
              },
              {
                  "id": "decimal-increase",
                  "name": "decimal  increase"
              },
              {
                  "id": "delete",
                  "name": "delete"
              },
              {
                  "id": "delete-alert",
                  "name": "delete  alert"
              },
              {
                  "id": "delete-alert-outline",
                  "name": "delete  alert  outline"
              },
              {
                  "id": "delete-circle",
                  "name": "delete  circle"
              },
              {
                  "id": "delete-circle-outline",
                  "name": "delete  circle  outline"
              },
              {
                  "id": "delete-clock",
                  "name": "delete  clock"
              },
              {
                  "id": "delete-clock-outline",
                  "name": "delete  clock  outline"
              },
              {
                  "id": "delete-empty",
                  "name": "delete  empty"
              },
              {
                  "id": "delete-empty-outline",
                  "name": "delete  empty  outline"
              },
              {
                  "id": "delete-forever",
                  "name": "delete  forever"
              },
              {
                  "id": "delete-forever-outline",
                  "name": "delete  forever  outline"
              },
              {
                  "id": "delete-off",
                  "name": "delete  off"
              },
              {
                  "id": "delete-off-outline",
                  "name": "delete  off  outline"
              },
              {
                  "id": "delete-outline",
                  "name": "delete  outline"
              },
              {
                  "id": "delete-restore",
                  "name": "delete  restore"
              },
              {
                  "id": "delete-sweep",
                  "name": "delete  sweep"
              },
              {
                  "id": "delete-sweep-outline",
                  "name": "delete  sweep  outline"
              },
              {
                  "id": "delete-variant",
                  "name": "delete  variant"
              },
              {
                  "id": "delta",
                  "name": "delta"
              },
              {
                  "id": "desk",
                  "name": "desk"
              },
              {
                  "id": "desk-lamp",
                  "name": "desk  lamp"
              },
              {
                  "id": "desk-lamp-off",
                  "name": "desk  lamp  off"
              },
              {
                  "id": "desk-lamp-on",
                  "name": "desk  lamp  on"
              },
              {
                  "id": "deskphone",
                  "name": "deskphone"
              },
              {
                  "id": "desktop-classic",
                  "name": "desktop  classic"
              },
              {
                  "id": "desktop-tower",
                  "name": "desktop  tower"
              },
              {
                  "id": "desktop-tower-monitor",
                  "name": "desktop  tower  monitor"
              },
              {
                  "id": "details",
                  "name": "details"
              },
              {
                  "id": "dev-to",
                  "name": "dev  to"
              },
              {
                  "id": "developer-board",
                  "name": "developer  board"
              },
              {
                  "id": "deviantart",
                  "name": "deviantart"
              },
              {
                  "id": "devices",
                  "name": "devices"
              },
              {
                  "id": "dharmachakra",
                  "name": "dharmachakra"
              },
              {
                  "id": "diabetes",
                  "name": "diabetes"
              },
              {
                  "id": "dialpad",
                  "name": "dialpad"
              },
              {
                  "id": "diameter",
                  "name": "diameter"
              },
              {
                  "id": "diameter-outline",
                  "name": "diameter  outline"
              },
              {
                  "id": "diameter-variant",
                  "name": "diameter  variant"
              },
              {
                  "id": "diamond",
                  "name": "diamond"
              },
              {
                  "id": "diamond-outline",
                  "name": "diamond  outline"
              },
              {
                  "id": "diamond-stone",
                  "name": "diamond  stone"
              },
              {
                  "id": "dice-1",
                  "name": "dice  1"
              },
              {
                  "id": "dice-1-outline",
                  "name": "dice  1  outline"
              },
              {
                  "id": "dice-2",
                  "name": "dice  2"
              },
              {
                  "id": "dice-2-outline",
                  "name": "dice  2  outline"
              },
              {
                  "id": "dice-3",
                  "name": "dice  3"
              },
              {
                  "id": "dice-3-outline",
                  "name": "dice  3  outline"
              },
              {
                  "id": "dice-4",
                  "name": "dice  4"
              },
              {
                  "id": "dice-4-outline",
                  "name": "dice  4  outline"
              },
              {
                  "id": "dice-5",
                  "name": "dice  5"
              },
              {
                  "id": "dice-5-outline",
                  "name": "dice  5  outline"
              },
              {
                  "id": "dice-6",
                  "name": "dice  6"
              },
              {
                  "id": "dice-6-outline",
                  "name": "dice  6  outline"
              },
              {
                  "id": "dice-d10",
                  "name": "dice  d10"
              },
              {
                  "id": "dice-d10-outline",
                  "name": "dice  d10  outline"
              },
              {
                  "id": "dice-d12",
                  "name": "dice  d12"
              },
              {
                  "id": "dice-d12-outline",
                  "name": "dice  d12  outline"
              },
              {
                  "id": "dice-d20",
                  "name": "dice  d20"
              },
              {
                  "id": "dice-d20-outline",
                  "name": "dice  d20  outline"
              },
              {
                  "id": "dice-d4",
                  "name": "dice  d4"
              },
              {
                  "id": "dice-d4-outline",
                  "name": "dice  d4  outline"
              },
              {
                  "id": "dice-d6",
                  "name": "dice  d6"
              },
              {
                  "id": "dice-d6-outline",
                  "name": "dice  d6  outline"
              },
              {
                  "id": "dice-d8",
                  "name": "dice  d8"
              },
              {
                  "id": "dice-d8-outline",
                  "name": "dice  d8  outline"
              },
              {
                  "id": "dice-multiple",
                  "name": "dice  multiple"
              },
              {
                  "id": "dice-multiple-outline",
                  "name": "dice  multiple  outline"
              },
              {
                  "id": "digital-ocean",
                  "name": "digital  ocean"
              },
              {
                  "id": "dip-switch",
                  "name": "dip  switch"
              },
              {
                  "id": "directions",
                  "name": "directions"
              },
              {
                  "id": "directions-fork",
                  "name": "directions  fork"
              },
              {
                  "id": "disc",
                  "name": "disc"
              },
              {
                  "id": "disc-alert",
                  "name": "disc  alert"
              },
              {
                  "id": "disc-player",
                  "name": "disc  player"
              },
              {
                  "id": "dishwasher",
                  "name": "dishwasher"
              },
              {
                  "id": "dishwasher-alert",
                  "name": "dishwasher  alert"
              },
              {
                  "id": "dishwasher-off",
                  "name": "dishwasher  off"
              },
              {
                  "id": "disqus",
                  "name": "disqus"
              },
              {
                  "id": "distribute-horizontal-center",
                  "name": "distribute  horizontal  center"
              },
              {
                  "id": "distribute-horizontal-left",
                  "name": "distribute  horizontal  left"
              },
              {
                  "id": "distribute-horizontal-right",
                  "name": "distribute  horizontal  right"
              },
              {
                  "id": "distribute-vertical-bottom",
                  "name": "distribute  vertical  bottom"
              },
              {
                  "id": "distribute-vertical-center",
                  "name": "distribute  vertical  center"
              },
              {
                  "id": "distribute-vertical-top",
                  "name": "distribute  vertical  top"
              },
              {
                  "id": "diversify",
                  "name": "diversify"
              },
              {
                  "id": "diving",
                  "name": "diving"
              },
              {
                  "id": "diving-flippers",
                  "name": "diving  flippers"
              },
              {
                  "id": "diving-helmet",
                  "name": "diving  helmet"
              },
              {
                  "id": "diving-scuba",
                  "name": "diving  scuba"
              },
              {
                  "id": "diving-scuba-flag",
                  "name": "diving  scuba  flag"
              },
              {
                  "id": "diving-scuba-mask",
                  "name": "diving  scuba  mask"
              },
              {
                  "id": "diving-scuba-tank",
                  "name": "diving  scuba  tank"
              },
              {
                  "id": "diving-scuba-tank-multiple",
                  "name": "diving  scuba  tank  multiple"
              },
              {
                  "id": "diving-snorkel",
                  "name": "diving  snorkel"
              },
              {
                  "id": "division",
                  "name": "division"
              },
              {
                  "id": "division-box",
                  "name": "division  box"
              },
              {
                  "id": "dlna",
                  "name": "dlna"
              },
              {
                  "id": "dna",
                  "name": "dna"
              },
              {
                  "id": "dns",
                  "name": "dns"
              },
              {
                  "id": "dns-outline",
                  "name": "dns  outline"
              },
              {
                  "id": "dock-bottom",
                  "name": "dock  bottom"
              },
              {
                  "id": "dock-left",
                  "name": "dock  left"
              },
              {
                  "id": "dock-right",
                  "name": "dock  right"
              },
              {
                  "id": "dock-top",
                  "name": "dock  top"
              },
              {
                  "id": "dock-window",
                  "name": "dock  window"
              },
              {
                  "id": "docker",
                  "name": "docker"
              },
              {
                  "id": "doctor",
                  "name": "doctor"
              },
              {
                  "id": "dog",
                  "name": "dog"
              },
              {
                  "id": "dog-service",
                  "name": "dog  service"
              },
              {
                  "id": "dog-side",
                  "name": "dog  side"
              },
              {
                  "id": "dog-side-off",
                  "name": "dog  side  off"
              },
              {
                  "id": "dolby",
                  "name": "dolby"
              },
              {
                  "id": "dolly",
                  "name": "dolly"
              },
              {
                  "id": "dolphin",
                  "name": "dolphin"
              },
              {
                  "id": "domain",
                  "name": "domain"
              },
              {
                  "id": "domain-off",
                  "name": "domain  off"
              },
              {
                  "id": "domain-plus",
                  "name": "domain  plus"
              },
              {
                  "id": "domain-remove",
                  "name": "domain  remove"
              },
              {
                  "id": "domain-switch",
                  "name": "domain  switch"
              },
              {
                  "id": "dome-light",
                  "name": "dome  light"
              },
              {
                  "id": "domino-mask",
                  "name": "domino  mask"
              },
              {
                  "id": "donkey",
                  "name": "donkey"
              },
              {
                  "id": "door",
                  "name": "door"
              },
              {
                  "id": "door-closed",
                  "name": "door  closed"
              },
              {
                  "id": "door-closed-lock",
                  "name": "door  closed  lock"
              },
              {
                  "id": "door-open",
                  "name": "door  open"
              },
              {
                  "id": "door-sliding",
                  "name": "door  sliding"
              },
              {
                  "id": "door-sliding-lock",
                  "name": "door  sliding  lock"
              },
              {
                  "id": "door-sliding-open",
                  "name": "door  sliding  open"
              },
              {
                  "id": "doorbell",
                  "name": "doorbell"
              },
              {
                  "id": "doorbell-video",
                  "name": "doorbell  video"
              },
              {
                  "id": "dot-net",
                  "name": "dot  net"
              },
              {
                  "id": "dots-circle",
                  "name": "dots  circle"
              },
              {
                  "id": "dots-grid",
                  "name": "dots  grid"
              },
              {
                  "id": "dots-hexagon",
                  "name": "dots  hexagon"
              },
              {
                  "id": "dots-horizontal",
                  "name": "dots  horizontal"
              },
              {
                  "id": "dots-horizontal-circle",
                  "name": "dots  horizontal  circle"
              },
              {
                  "id": "dots-horizontal-circle-outline",
                  "name": "dots  horizontal  circle  outline"
              },
              {
                  "id": "dots-square",
                  "name": "dots  square"
              },
              {
                  "id": "dots-triangle",
                  "name": "dots  triangle"
              },
              {
                  "id": "dots-vertical",
                  "name": "dots  vertical"
              },
              {
                  "id": "dots-vertical-circle",
                  "name": "dots  vertical  circle"
              },
              {
                  "id": "dots-vertical-circle-outline",
                  "name": "dots  vertical  circle  outline"
              },
              {
                  "id": "download",
                  "name": "download"
              },
              {
                  "id": "download-box",
                  "name": "download  box"
              },
              {
                  "id": "download-box-outline",
                  "name": "download  box  outline"
              },
              {
                  "id": "download-circle",
                  "name": "download  circle"
              },
              {
                  "id": "download-circle-outline",
                  "name": "download  circle  outline"
              },
              {
                  "id": "download-lock",
                  "name": "download  lock"
              },
              {
                  "id": "download-lock-outline",
                  "name": "download  lock  outline"
              },
              {
                  "id": "download-multiple",
                  "name": "download  multiple"
              },
              {
                  "id": "download-network",
                  "name": "download  network"
              },
              {
                  "id": "download-network-outline",
                  "name": "download  network  outline"
              },
              {
                  "id": "download-off",
                  "name": "download  off"
              },
              {
                  "id": "download-off-outline",
                  "name": "download  off  outline"
              },
              {
                  "id": "download-outline",
                  "name": "download  outline"
              },
              {
                  "id": "drag",
                  "name": "drag"
              },
              {
                  "id": "drag-horizontal",
                  "name": "drag  horizontal"
              },
              {
                  "id": "drag-horizontal-variant",
                  "name": "drag  horizontal  variant"
              },
              {
                  "id": "drag-variant",
                  "name": "drag  variant"
              },
              {
                  "id": "drag-vertical",
                  "name": "drag  vertical"
              },
              {
                  "id": "drag-vertical-variant",
                  "name": "drag  vertical  variant"
              },
              {
                  "id": "drama-masks",
                  "name": "drama  masks"
              },
              {
                  "id": "draw",
                  "name": "draw"
              },
              {
                  "id": "draw-pen",
                  "name": "draw  pen"
              },
              {
                  "id": "drawing",
                  "name": "drawing"
              },
              {
                  "id": "drawing-box",
                  "name": "drawing  box"
              },
              {
                  "id": "dresser",
                  "name": "dresser"
              },
              {
                  "id": "dresser-outline",
                  "name": "dresser  outline"
              },
              {
                  "id": "drone",
                  "name": "drone"
              },
              {
                  "id": "dropbox",
                  "name": "dropbox"
              },
              {
                  "id": "drupal",
                  "name": "drupal"
              },
              {
                  "id": "duck",
                  "name": "duck"
              },
              {
                  "id": "dumbbell",
                  "name": "dumbbell"
              },
              {
                  "id": "dump-truck",
                  "name": "dump  truck"
              },
              {
                  "id": "ear-hearing",
                  "name": "ear  hearing"
              },
              {
                  "id": "ear-hearing-loop",
                  "name": "ear  hearing  loop"
              },
              {
                  "id": "ear-hearing-off",
                  "name": "ear  hearing  off"
              },
              {
                  "id": "earbuds",
                  "name": "earbuds"
              },
              {
                  "id": "earbuds-off",
                  "name": "earbuds  off"
              },
              {
                  "id": "earbuds-off-outline",
                  "name": "earbuds  off  outline"
              },
              {
                  "id": "earbuds-outline",
                  "name": "earbuds  outline"
              },
              {
                  "id": "earth",
                  "name": "earth"
              },
              {
                  "id": "earth-arrow-right",
                  "name": "earth  arrow  right"
              },
              {
                  "id": "earth-box",
                  "name": "earth  box"
              },
              {
                  "id": "earth-box-minus",
                  "name": "earth  box  minus"
              },
              {
                  "id": "earth-box-off",
                  "name": "earth  box  off"
              },
              {
                  "id": "earth-box-plus",
                  "name": "earth  box  plus"
              },
              {
                  "id": "earth-box-remove",
                  "name": "earth  box  remove"
              },
              {
                  "id": "earth-minus",
                  "name": "earth  minus"
              },
              {
                  "id": "earth-off",
                  "name": "earth  off"
              },
              {
                  "id": "earth-plus",
                  "name": "earth  plus"
              },
              {
                  "id": "earth-remove",
                  "name": "earth  remove"
              },
              {
                  "id": "egg",
                  "name": "egg"
              },
              {
                  "id": "egg-easter",
                  "name": "egg  easter"
              },
              {
                  "id": "egg-fried",
                  "name": "egg  fried"
              },
              {
                  "id": "egg-off",
                  "name": "egg  off"
              },
              {
                  "id": "egg-off-outline",
                  "name": "egg  off  outline"
              },
              {
                  "id": "egg-outline",
                  "name": "egg  outline"
              },
              {
                  "id": "eiffel-tower",
                  "name": "eiffel  tower"
              },
              {
                  "id": "eight-track",
                  "name": "eight  track"
              },
              {
                  "id": "eject",
                  "name": "eject"
              },
              {
                  "id": "eject-circle",
                  "name": "eject  circle"
              },
              {
                  "id": "eject-circle-outline",
                  "name": "eject  circle  outline"
              },
              {
                  "id": "eject-outline",
                  "name": "eject  outline"
              },
              {
                  "id": "electric-switch",
                  "name": "electric  switch"
              },
              {
                  "id": "electric-switch-closed",
                  "name": "electric  switch  closed"
              },
              {
                  "id": "electron-framework",
                  "name": "electron  framework"
              },
              {
                  "id": "elephant",
                  "name": "elephant"
              },
              {
                  "id": "elevation-decline",
                  "name": "elevation  decline"
              },
              {
                  "id": "elevation-rise",
                  "name": "elevation  rise"
              },
              {
                  "id": "elevator",
                  "name": "elevator"
              },
              {
                  "id": "elevator-down",
                  "name": "elevator  down"
              },
              {
                  "id": "elevator-passenger",
                  "name": "elevator  passenger"
              },
              {
                  "id": "elevator-passenger-off",
                  "name": "elevator  passenger  off"
              },
              {
                  "id": "elevator-passenger-off-outline",
                  "name": "elevator  passenger  off  outline"
              },
              {
                  "id": "elevator-passenger-outline",
                  "name": "elevator  passenger  outline"
              },
              {
                  "id": "elevator-up",
                  "name": "elevator  up"
              },
              {
                  "id": "ellipse",
                  "name": "ellipse"
              },
              {
                  "id": "ellipse-outline",
                  "name": "ellipse  outline"
              },
              {
                  "id": "email",
                  "name": "email"
              },
              {
                  "id": "email-alert",
                  "name": "email  alert"
              },
              {
                  "id": "email-alert-outline",
                  "name": "email  alert  outline"
              },
              {
                  "id": "email-arrow-left",
                  "name": "email  arrow  left"
              },
              {
                  "id": "email-arrow-left-outline",
                  "name": "email  arrow  left  outline"
              },
              {
                  "id": "email-arrow-right",
                  "name": "email  arrow  right"
              },
              {
                  "id": "email-arrow-right-outline",
                  "name": "email  arrow  right  outline"
              },
              {
                  "id": "email-box",
                  "name": "email  box"
              },
              {
                  "id": "email-check",
                  "name": "email  check"
              },
              {
                  "id": "email-check-outline",
                  "name": "email  check  outline"
              },
              {
                  "id": "email-edit",
                  "name": "email  edit"
              },
              {
                  "id": "email-edit-outline",
                  "name": "email  edit  outline"
              },
              {
                  "id": "email-fast",
                  "name": "email  fast"
              },
              {
                  "id": "email-fast-outline",
                  "name": "email  fast  outline"
              },
              {
                  "id": "email-heart-outline",
                  "name": "email  heart  outline"
              },
              {
                  "id": "email-lock",
                  "name": "email  lock"
              },
              {
                  "id": "email-lock-outline",
                  "name": "email  lock  outline"
              },
              {
                  "id": "email-mark-as-unread",
                  "name": "email  mark  as  unread"
              },
              {
                  "id": "email-minus",
                  "name": "email  minus"
              },
              {
                  "id": "email-minus-outline",
                  "name": "email  minus  outline"
              },
              {
                  "id": "email-multiple",
                  "name": "email  multiple"
              },
              {
                  "id": "email-multiple-outline",
                  "name": "email  multiple  outline"
              },
              {
                  "id": "email-newsletter",
                  "name": "email  newsletter"
              },
              {
                  "id": "email-off",
                  "name": "email  off"
              },
              {
                  "id": "email-off-outline",
                  "name": "email  off  outline"
              },
              {
                  "id": "email-open",
                  "name": "email  open"
              },
              {
                  "id": "email-open-heart-outline",
                  "name": "email  open  heart  outline"
              },
              {
                  "id": "email-open-multiple",
                  "name": "email  open  multiple"
              },
              {
                  "id": "email-open-multiple-outline",
                  "name": "email  open  multiple  outline"
              },
              {
                  "id": "email-open-outline",
                  "name": "email  open  outline"
              },
              {
                  "id": "email-outline",
                  "name": "email  outline"
              },
              {
                  "id": "email-plus",
                  "name": "email  plus"
              },
              {
                  "id": "email-plus-outline",
                  "name": "email  plus  outline"
              },
              {
                  "id": "email-remove",
                  "name": "email  remove"
              },
              {
                  "id": "email-remove-outline",
                  "name": "email  remove  outline"
              },
              {
                  "id": "email-seal",
                  "name": "email  seal"
              },
              {
                  "id": "email-seal-outline",
                  "name": "email  seal  outline"
              },
              {
                  "id": "email-search",
                  "name": "email  search"
              },
              {
                  "id": "email-search-outline",
                  "name": "email  search  outline"
              },
              {
                  "id": "email-sync",
                  "name": "email  sync"
              },
              {
                  "id": "email-sync-outline",
                  "name": "email  sync  outline"
              },
              {
                  "id": "email-variant",
                  "name": "email  variant"
              },
              {
                  "id": "ember",
                  "name": "ember"
              },
              {
                  "id": "emby",
                  "name": "emby"
              },
              {
                  "id": "emoticon",
                  "name": "emoticon"
              },
              {
                  "id": "emoticon-angry",
                  "name": "emoticon  angry"
              },
              {
                  "id": "emoticon-angry-outline",
                  "name": "emoticon  angry  outline"
              },
              {
                  "id": "emoticon-confused",
                  "name": "emoticon  confused"
              },
              {
                  "id": "emoticon-confused-outline",
                  "name": "emoticon  confused  outline"
              },
              {
                  "id": "emoticon-cool",
                  "name": "emoticon  cool"
              },
              {
                  "id": "emoticon-cool-outline",
                  "name": "emoticon  cool  outline"
              },
              {
                  "id": "emoticon-cry",
                  "name": "emoticon  cry"
              },
              {
                  "id": "emoticon-cry-outline",
                  "name": "emoticon  cry  outline"
              },
              {
                  "id": "emoticon-dead",
                  "name": "emoticon  dead"
              },
              {
                  "id": "emoticon-dead-outline",
                  "name": "emoticon  dead  outline"
              },
              {
                  "id": "emoticon-devil",
                  "name": "emoticon  devil"
              },
              {
                  "id": "emoticon-devil-outline",
                  "name": "emoticon  devil  outline"
              },
              {
                  "id": "emoticon-excited",
                  "name": "emoticon  excited"
              },
              {
                  "id": "emoticon-excited-outline",
                  "name": "emoticon  excited  outline"
              },
              {
                  "id": "emoticon-frown",
                  "name": "emoticon  frown"
              },
              {
                  "id": "emoticon-frown-outline",
                  "name": "emoticon  frown  outline"
              },
              {
                  "id": "emoticon-happy",
                  "name": "emoticon  happy"
              },
              {
                  "id": "emoticon-happy-outline",
                  "name": "emoticon  happy  outline"
              },
              {
                  "id": "emoticon-kiss",
                  "name": "emoticon  kiss"
              },
              {
                  "id": "emoticon-kiss-outline",
                  "name": "emoticon  kiss  outline"
              },
              {
                  "id": "emoticon-lol",
                  "name": "emoticon  lol"
              },
              {
                  "id": "emoticon-lol-outline",
                  "name": "emoticon  lol  outline"
              },
              {
                  "id": "emoticon-neutral",
                  "name": "emoticon  neutral"
              },
              {
                  "id": "emoticon-neutral-outline",
                  "name": "emoticon  neutral  outline"
              },
              {
                  "id": "emoticon-outline",
                  "name": "emoticon  outline"
              },
              {
                  "id": "emoticon-poop",
                  "name": "emoticon  poop"
              },
              {
                  "id": "emoticon-poop-outline",
                  "name": "emoticon  poop  outline"
              },
              {
                  "id": "emoticon-sad",
                  "name": "emoticon  sad"
              },
              {
                  "id": "emoticon-sad-outline",
                  "name": "emoticon  sad  outline"
              },
              {
                  "id": "emoticon-sick",
                  "name": "emoticon  sick"
              },
              {
                  "id": "emoticon-sick-outline",
                  "name": "emoticon  sick  outline"
              },
              {
                  "id": "emoticon-tongue",
                  "name": "emoticon  tongue"
              },
              {
                  "id": "emoticon-tongue-outline",
                  "name": "emoticon  tongue  outline"
              },
              {
                  "id": "emoticon-wink",
                  "name": "emoticon  wink"
              },
              {
                  "id": "emoticon-wink-outline",
                  "name": "emoticon  wink  outline"
              },
              {
                  "id": "engine",
                  "name": "engine"
              },
              {
                  "id": "engine-off",
                  "name": "engine  off"
              },
              {
                  "id": "engine-off-outline",
                  "name": "engine  off  outline"
              },
              {
                  "id": "engine-outline",
                  "name": "engine  outline"
              },
              {
                  "id": "epsilon",
                  "name": "epsilon"
              },
              {
                  "id": "equal",
                  "name": "equal"
              },
              {
                  "id": "equal-box",
                  "name": "equal  box"
              },
              {
                  "id": "equalizer",
                  "name": "equalizer"
              },
              {
                  "id": "equalizer-outline",
                  "name": "equalizer  outline"
              },
              {
                  "id": "eraser",
                  "name": "eraser"
              },
              {
                  "id": "eraser-variant",
                  "name": "eraser  variant"
              },
              {
                  "id": "escalator",
                  "name": "escalator"
              },
              {
                  "id": "escalator-box",
                  "name": "escalator  box"
              },
              {
                  "id": "escalator-down",
                  "name": "escalator  down"
              },
              {
                  "id": "escalator-up",
                  "name": "escalator  up"
              },
              {
                  "id": "eslint",
                  "name": "eslint"
              },
              {
                  "id": "et",
                  "name": "et"
              },
              {
                  "id": "ethereum",
                  "name": "ethereum"
              },
              {
                  "id": "ethernet",
                  "name": "ethernet"
              },
              {
                  "id": "ethernet-cable",
                  "name": "ethernet  cable"
              },
              {
                  "id": "ethernet-cable-off",
                  "name": "ethernet  cable  off"
              },
              {
                  "id": "ev-plug-ccs1",
                  "name": "ev  plug  ccs1"
              },
              {
                  "id": "ev-plug-ccs2",
                  "name": "ev  plug  ccs2"
              },
              {
                  "id": "ev-plug-chademo",
                  "name": "ev  plug  chademo"
              },
              {
                  "id": "ev-plug-tesla",
                  "name": "ev  plug  tesla"
              },
              {
                  "id": "ev-plug-type1",
                  "name": "ev  plug  type1"
              },
              {
                  "id": "ev-plug-type2",
                  "name": "ev  plug  type2"
              },
              {
                  "id": "ev-station",
                  "name": "ev  station"
              },
              {
                  "id": "evernote",
                  "name": "evernote"
              },
              {
                  "id": "excavator",
                  "name": "excavator"
              },
              {
                  "id": "exclamation",
                  "name": "exclamation"
              },
              {
                  "id": "exclamation-thick",
                  "name": "exclamation  thick"
              },
              {
                  "id": "exit-run",
                  "name": "exit  run"
              },
              {
                  "id": "exit-to-app",
                  "name": "exit  to  app"
              },
              {
                  "id": "expand-all",
                  "name": "expand  all"
              },
              {
                  "id": "expand-all-outline",
                  "name": "expand  all  outline"
              },
              {
                  "id": "expansion-card",
                  "name": "expansion  card"
              },
              {
                  "id": "expansion-card-variant",
                  "name": "expansion  card  variant"
              },
              {
                  "id": "exponent",
                  "name": "exponent"
              },
              {
                  "id": "exponent-box",
                  "name": "exponent  box"
              },
              {
                  "id": "export",
                  "name": "export"
              },
              {
                  "id": "export-variant",
                  "name": "export  variant"
              },
              {
                  "id": "eye",
                  "name": "eye"
              },
              {
                  "id": "eye-arrow-left",
                  "name": "eye  arrow  left"
              },
              {
                  "id": "eye-arrow-left-outline",
                  "name": "eye  arrow  left  outline"
              },
              {
                  "id": "eye-arrow-right",
                  "name": "eye  arrow  right"
              },
              {
                  "id": "eye-arrow-right-outline",
                  "name": "eye  arrow  right  outline"
              },
              {
                  "id": "eye-check",
                  "name": "eye  check"
              },
              {
                  "id": "eye-check-outline",
                  "name": "eye  check  outline"
              },
              {
                  "id": "eye-circle",
                  "name": "eye  circle"
              },
              {
                  "id": "eye-circle-outline",
                  "name": "eye  circle  outline"
              },
              {
                  "id": "eye-lock",
                  "name": "eye  lock"
              },
              {
                  "id": "eye-lock-open",
                  "name": "eye  lock  open"
              },
              {
                  "id": "eye-lock-open-outline",
                  "name": "eye  lock  open  outline"
              },
              {
                  "id": "eye-lock-outline",
                  "name": "eye  lock  outline"
              },
              {
                  "id": "eye-minus",
                  "name": "eye  minus"
              },
              {
                  "id": "eye-minus-outline",
                  "name": "eye  minus  outline"
              },
              {
                  "id": "eye-off",
                  "name": "eye  off"
              },
              {
                  "id": "eye-off-outline",
                  "name": "eye  off  outline"
              },
              {
                  "id": "eye-outline",
                  "name": "eye  outline"
              },
              {
                  "id": "eye-plus",
                  "name": "eye  plus"
              },
              {
                  "id": "eye-plus-outline",
                  "name": "eye  plus  outline"
              },
              {
                  "id": "eye-refresh",
                  "name": "eye  refresh"
              },
              {
                  "id": "eye-refresh-outline",
                  "name": "eye  refresh  outline"
              },
              {
                  "id": "eye-remove",
                  "name": "eye  remove"
              },
              {
                  "id": "eye-remove-outline",
                  "name": "eye  remove  outline"
              },
              {
                  "id": "eye-settings",
                  "name": "eye  settings"
              },
              {
                  "id": "eye-settings-outline",
                  "name": "eye  settings  outline"
              },
              {
                  "id": "eyedropper",
                  "name": "eyedropper"
              },
              {
                  "id": "eyedropper-minus",
                  "name": "eyedropper  minus"
              },
              {
                  "id": "eyedropper-off",
                  "name": "eyedropper  off"
              },
              {
                  "id": "eyedropper-plus",
                  "name": "eyedropper  plus"
              },
              {
                  "id": "eyedropper-remove",
                  "name": "eyedropper  remove"
              },
              {
                  "id": "eyedropper-variant",
                  "name": "eyedropper  variant"
              },
              {
                  "id": "face-agent",
                  "name": "face  agent"
              },
              {
                  "id": "face-man",
                  "name": "face  man"
              },
              {
                  "id": "face-man-outline",
                  "name": "face  man  outline"
              },
              {
                  "id": "face-man-profile",
                  "name": "face  man  profile"
              },
              {
                  "id": "face-man-shimmer",
                  "name": "face  man  shimmer"
              },
              {
                  "id": "face-man-shimmer-outline",
                  "name": "face  man  shimmer  outline"
              },
              {
                  "id": "face-mask",
                  "name": "face  mask"
              },
              {
                  "id": "face-mask-outline",
                  "name": "face  mask  outline"
              },
              {
                  "id": "face-recognition",
                  "name": "face  recognition"
              },
              {
                  "id": "face-woman",
                  "name": "face  woman"
              },
              {
                  "id": "face-woman-outline",
                  "name": "face  woman  outline"
              },
              {
                  "id": "face-woman-profile",
                  "name": "face  woman  profile"
              },
              {
                  "id": "face-woman-shimmer",
                  "name": "face  woman  shimmer"
              },
              {
                  "id": "face-woman-shimmer-outline",
                  "name": "face  woman  shimmer  outline"
              },
              {
                  "id": "facebook",
                  "name": "facebook"
              },
              {
                  "id": "facebook-gaming",
                  "name": "facebook  gaming"
              },
              {
                  "id": "facebook-messenger",
                  "name": "facebook  messenger"
              },
              {
                  "id": "facebook-workplace",
                  "name": "facebook  workplace"
              },
              {
                  "id": "factory",
                  "name": "factory"
              },
              {
                  "id": "family-tree",
                  "name": "family  tree"
              },
              {
                  "id": "fan",
                  "name": "fan"
              },
              {
                  "id": "fan-alert",
                  "name": "fan  alert"
              },
              {
                  "id": "fan-auto",
                  "name": "fan  auto"
              },
              {
                  "id": "fan-chevron-down",
                  "name": "fan  chevron  down"
              },
              {
                  "id": "fan-chevron-up",
                  "name": "fan  chevron  up"
              },
              {
                  "id": "fan-clock",
                  "name": "fan  clock"
              },
              {
                  "id": "fan-minus",
                  "name": "fan  minus"
              },
              {
                  "id": "fan-off",
                  "name": "fan  off"
              },
              {
                  "id": "fan-plus",
                  "name": "fan  plus"
              },
              {
                  "id": "fan-remove",
                  "name": "fan  remove"
              },
              {
                  "id": "fan-speed-1",
                  "name": "fan  speed  1"
              },
              {
                  "id": "fan-speed-2",
                  "name": "fan  speed  2"
              },
              {
                  "id": "fan-speed-3",
                  "name": "fan  speed  3"
              },
              {
                  "id": "fast-forward",
                  "name": "fast  forward"
              },
              {
                  "id": "fast-forward-10",
                  "name": "fast  forward  10"
              },
              {
                  "id": "fast-forward-15",
                  "name": "fast  forward  15"
              },
              {
                  "id": "fast-forward-30",
                  "name": "fast  forward  30"
              },
              {
                  "id": "fast-forward-45",
                  "name": "fast  forward  45"
              },
              {
                  "id": "fast-forward-5",
                  "name": "fast  forward  5"
              },
              {
                  "id": "fast-forward-60",
                  "name": "fast  forward  60"
              },
              {
                  "id": "fast-forward-outline",
                  "name": "fast  forward  outline"
              },
              {
                  "id": "faucet",
                  "name": "faucet"
              },
              {
                  "id": "faucet-variant",
                  "name": "faucet  variant"
              },
              {
                  "id": "fax",
                  "name": "fax"
              },
              {
                  "id": "feather",
                  "name": "feather"
              },
              {
                  "id": "feature-search",
                  "name": "feature  search"
              },
              {
                  "id": "feature-search-outline",
                  "name": "feature  search  outline"
              },
              {
                  "id": "fedora",
                  "name": "fedora"
              },
              {
                  "id": "fence",
                  "name": "fence"
              },
              {
                  "id": "fence-electric",
                  "name": "fence  electric"
              },
              {
                  "id": "fencing",
                  "name": "fencing"
              },
              {
                  "id": "ferris-wheel",
                  "name": "ferris  wheel"
              },
              {
                  "id": "ferry",
                  "name": "ferry"
              },
              {
                  "id": "file",
                  "name": "file"
              },
              {
                  "id": "file-account",
                  "name": "file  account"
              },
              {
                  "id": "file-account-outline",
                  "name": "file  account  outline"
              },
              {
                  "id": "file-alert",
                  "name": "file  alert"
              },
              {
                  "id": "file-alert-outline",
                  "name": "file  alert  outline"
              },
              {
                  "id": "file-arrow-left-right",
                  "name": "file  arrow  left  right"
              },
              {
                  "id": "file-arrow-left-right-outline",
                  "name": "file  arrow  left  right  outline"
              },
              {
                  "id": "file-arrow-up-down",
                  "name": "file  arrow  up  down"
              },
              {
                  "id": "file-arrow-up-down-outline",
                  "name": "file  arrow  up  down  outline"
              },
              {
                  "id": "file-cabinet",
                  "name": "file  cabinet"
              },
              {
                  "id": "file-cad",
                  "name": "file  cad"
              },
              {
                  "id": "file-cad-box",
                  "name": "file  cad  box"
              },
              {
                  "id": "file-cancel",
                  "name": "file  cancel"
              },
              {
                  "id": "file-cancel-outline",
                  "name": "file  cancel  outline"
              },
              {
                  "id": "file-certificate",
                  "name": "file  certificate"
              },
              {
                  "id": "file-certificate-outline",
                  "name": "file  certificate  outline"
              },
              {
                  "id": "file-chart",
                  "name": "file  chart"
              },
              {
                  "id": "file-chart-check",
                  "name": "file  chart  check"
              },
              {
                  "id": "file-chart-check-outline",
                  "name": "file  chart  check  outline"
              },
              {
                  "id": "file-chart-outline",
                  "name": "file  chart  outline"
              },
              {
                  "id": "file-check",
                  "name": "file  check"
              },
              {
                  "id": "file-check-outline",
                  "name": "file  check  outline"
              },
              {
                  "id": "file-clock",
                  "name": "file  clock"
              },
              {
                  "id": "file-clock-outline",
                  "name": "file  clock  outline"
              },
              {
                  "id": "file-cloud",
                  "name": "file  cloud"
              },
              {
                  "id": "file-cloud-outline",
                  "name": "file  cloud  outline"
              },
              {
                  "id": "file-code",
                  "name": "file  code"
              },
              {
                  "id": "file-code-outline",
                  "name": "file  code  outline"
              },
              {
                  "id": "file-cog",
                  "name": "file  cog"
              },
              {
                  "id": "file-cog-outline",
                  "name": "file  cog  outline"
              },
              {
                  "id": "file-compare",
                  "name": "file  compare"
              },
              {
                  "id": "file-delimited",
                  "name": "file  delimited"
              },
              {
                  "id": "file-delimited-outline",
                  "name": "file  delimited  outline"
              },
              {
                  "id": "file-document",
                  "name": "file  document"
              },
              {
                  "id": "file-document-alert",
                  "name": "file  document  alert"
              },
              {
                  "id": "file-document-alert-outline",
                  "name": "file  document  alert  outline"
              },
              {
                  "id": "file-document-arrow-right",
                  "name": "file  document  arrow  right"
              },
              {
                  "id": "file-document-arrow-right-outline",
                  "name": "file  document  arrow  right  outline"
              },
              {
                  "id": "file-document-check",
                  "name": "file  document  check"
              },
              {
                  "id": "file-document-check-outline",
                  "name": "file  document  check  outline"
              },
              {
                  "id": "file-document-edit",
                  "name": "file  document  edit"
              },
              {
                  "id": "file-document-edit-outline",
                  "name": "file  document  edit  outline"
              },
              {
                  "id": "file-document-minus",
                  "name": "file  document  minus"
              },
              {
                  "id": "file-document-minus-outline",
                  "name": "file  document  minus  outline"
              },
              {
                  "id": "file-document-multiple",
                  "name": "file  document  multiple"
              },
              {
                  "id": "file-document-multiple-outline",
                  "name": "file  document  multiple  outline"
              },
              {
                  "id": "file-document-outline",
                  "name": "file  document  outline"
              },
              {
                  "id": "file-document-plus",
                  "name": "file  document  plus"
              },
              {
                  "id": "file-document-plus-outline",
                  "name": "file  document  plus  outline"
              },
              {
                  "id": "file-document-refresh",
                  "name": "file  document  refresh"
              },
              {
                  "id": "file-document-refresh-outline",
                  "name": "file  document  refresh  outline"
              },
              {
                  "id": "file-document-remove",
                  "name": "file  document  remove"
              },
              {
                  "id": "file-document-remove-outline",
                  "name": "file  document  remove  outline"
              },
              {
                  "id": "file-download",
                  "name": "file  download"
              },
              {
                  "id": "file-download-outline",
                  "name": "file  download  outline"
              },
              {
                  "id": "file-edit",
                  "name": "file  edit"
              },
              {
                  "id": "file-edit-outline",
                  "name": "file  edit  outline"
              },
              {
                  "id": "file-excel",
                  "name": "file  excel"
              },
              {
                  "id": "file-excel-box",
                  "name": "file  excel  box"
              },
              {
                  "id": "file-excel-box-outline",
                  "name": "file  excel  box  outline"
              },
              {
                  "id": "file-excel-outline",
                  "name": "file  excel  outline"
              },
              {
                  "id": "file-export",
                  "name": "file  export"
              },
              {
                  "id": "file-export-outline",
                  "name": "file  export  outline"
              },
              {
                  "id": "file-eye",
                  "name": "file  eye"
              },
              {
                  "id": "file-eye-outline",
                  "name": "file  eye  outline"
              },
              {
                  "id": "file-find",
                  "name": "file  find"
              },
              {
                  "id": "file-find-outline",
                  "name": "file  find  outline"
              },
              {
                  "id": "file-gif-box",
                  "name": "file  gif  box"
              },
              {
                  "id": "file-hidden",
                  "name": "file  hidden"
              },
              {
                  "id": "file-image",
                  "name": "file  image"
              },
              {
                  "id": "file-image-marker",
                  "name": "file  image  marker"
              },
              {
                  "id": "file-image-marker-outline",
                  "name": "file  image  marker  outline"
              },
              {
                  "id": "file-image-minus",
                  "name": "file  image  minus"
              },
              {
                  "id": "file-image-minus-outline",
                  "name": "file  image  minus  outline"
              },
              {
                  "id": "file-image-outline",
                  "name": "file  image  outline"
              },
              {
                  "id": "file-image-plus",
                  "name": "file  image  plus"
              },
              {
                  "id": "file-image-plus-outline",
                  "name": "file  image  plus  outline"
              },
              {
                  "id": "file-image-remove",
                  "name": "file  image  remove"
              },
              {
                  "id": "file-image-remove-outline",
                  "name": "file  image  remove  outline"
              },
              {
                  "id": "file-import",
                  "name": "file  import"
              },
              {
                  "id": "file-import-outline",
                  "name": "file  import  outline"
              },
              {
                  "id": "file-jpg-box",
                  "name": "file  jpg  box"
              },
              {
                  "id": "file-key",
                  "name": "file  key"
              },
              {
                  "id": "file-key-outline",
                  "name": "file  key  outline"
              },
              {
                  "id": "file-link",
                  "name": "file  link"
              },
              {
                  "id": "file-link-outline",
                  "name": "file  link  outline"
              },
              {
                  "id": "file-lock",
                  "name": "file  lock"
              },
              {
                  "id": "file-lock-open",
                  "name": "file  lock  open"
              },
              {
                  "id": "file-lock-open-outline",
                  "name": "file  lock  open  outline"
              },
              {
                  "id": "file-lock-outline",
                  "name": "file  lock  outline"
              },
              {
                  "id": "file-marker",
                  "name": "file  marker"
              },
              {
                  "id": "file-marker-outline",
                  "name": "file  marker  outline"
              },
              {
                  "id": "file-minus",
                  "name": "file  minus"
              },
              {
                  "id": "file-minus-outline",
                  "name": "file  minus  outline"
              },
              {
                  "id": "file-move",
                  "name": "file  move"
              },
              {
                  "id": "file-move-outline",
                  "name": "file  move  outline"
              },
              {
                  "id": "file-multiple",
                  "name": "file  multiple"
              },
              {
                  "id": "file-multiple-outline",
                  "name": "file  multiple  outline"
              },
              {
                  "id": "file-music",
                  "name": "file  music"
              },
              {
                  "id": "file-music-outline",
                  "name": "file  music  outline"
              },
              {
                  "id": "file-outline",
                  "name": "file  outline"
              },
              {
                  "id": "file-pdf-box",
                  "name": "file  pdf  box"
              },
              {
                  "id": "file-percent",
                  "name": "file  percent"
              },
              {
                  "id": "file-percent-outline",
                  "name": "file  percent  outline"
              },
              {
                  "id": "file-phone",
                  "name": "file  phone"
              },
              {
                  "id": "file-phone-outline",
                  "name": "file  phone  outline"
              },
              {
                  "id": "file-plus",
                  "name": "file  plus"
              },
              {
                  "id": "file-plus-outline",
                  "name": "file  plus  outline"
              },
              {
                  "id": "file-png-box",
                  "name": "file  png  box"
              },
              {
                  "id": "file-powerpoint",
                  "name": "file  powerpoint"
              },
              {
                  "id": "file-powerpoint-box",
                  "name": "file  powerpoint  box"
              },
              {
                  "id": "file-powerpoint-box-outline",
                  "name": "file  powerpoint  box  outline"
              },
              {
                  "id": "file-powerpoint-outline",
                  "name": "file  powerpoint  outline"
              },
              {
                  "id": "file-presentation-box",
                  "name": "file  presentation  box"
              },
              {
                  "id": "file-question",
                  "name": "file  question"
              },
              {
                  "id": "file-question-outline",
                  "name": "file  question  outline"
              },
              {
                  "id": "file-refresh",
                  "name": "file  refresh"
              },
              {
                  "id": "file-refresh-outline",
                  "name": "file  refresh  outline"
              },
              {
                  "id": "file-remove",
                  "name": "file  remove"
              },
              {
                  "id": "file-remove-outline",
                  "name": "file  remove  outline"
              },
              {
                  "id": "file-replace",
                  "name": "file  replace"
              },
              {
                  "id": "file-replace-outline",
                  "name": "file  replace  outline"
              },
              {
                  "id": "file-restore",
                  "name": "file  restore"
              },
              {
                  "id": "file-restore-outline",
                  "name": "file  restore  outline"
              },
              {
                  "id": "file-rotate-left",
                  "name": "file  rotate  left"
              },
              {
                  "id": "file-rotate-left-outline",
                  "name": "file  rotate  left  outline"
              },
              {
                  "id": "file-rotate-right",
                  "name": "file  rotate  right"
              },
              {
                  "id": "file-rotate-right-outline",
                  "name": "file  rotate  right  outline"
              },
              {
                  "id": "file-search",
                  "name": "file  search"
              },
              {
                  "id": "file-search-outline",
                  "name": "file  search  outline"
              },
              {
                  "id": "file-send",
                  "name": "file  send"
              },
              {
                  "id": "file-send-outline",
                  "name": "file  send  outline"
              },
              {
                  "id": "file-settings",
                  "name": "file  settings"
              },
              {
                  "id": "file-settings-outline",
                  "name": "file  settings  outline"
              },
              {
                  "id": "file-sign",
                  "name": "file  sign"
              },
              {
                  "id": "file-star",
                  "name": "file  star"
              },
              {
                  "id": "file-star-four-points",
                  "name": "file  star  four  points"
              },
              {
                  "id": "file-star-four-points-outline",
                  "name": "file  star  four  points  outline"
              },
              {
                  "id": "file-star-outline",
                  "name": "file  star  outline"
              },
              {
                  "id": "file-swap",
                  "name": "file  swap"
              },
              {
                  "id": "file-swap-outline",
                  "name": "file  swap  outline"
              },
              {
                  "id": "file-sync",
                  "name": "file  sync"
              },
              {
                  "id": "file-sync-outline",
                  "name": "file  sync  outline"
              },
              {
                  "id": "file-table",
                  "name": "file  table"
              },
              {
                  "id": "file-table-box",
                  "name": "file  table  box"
              },
              {
                  "id": "file-table-box-multiple",
                  "name": "file  table  box  multiple"
              },
              {
                  "id": "file-table-box-multiple-outline",
                  "name": "file  table  box  multiple  outline"
              },
              {
                  "id": "file-table-box-outline",
                  "name": "file  table  box  outline"
              },
              {
                  "id": "file-table-outline",
                  "name": "file  table  outline"
              },
              {
                  "id": "file-tree",
                  "name": "file  tree"
              },
              {
                  "id": "file-tree-outline",
                  "name": "file  tree  outline"
              },
              {
                  "id": "file-undo",
                  "name": "file  undo"
              },
              {
                  "id": "file-undo-outline",
                  "name": "file  undo  outline"
              },
              {
                  "id": "file-upload",
                  "name": "file  upload"
              },
              {
                  "id": "file-upload-outline",
                  "name": "file  upload  outline"
              },
              {
                  "id": "file-video",
                  "name": "file  video"
              },
              {
                  "id": "file-video-outline",
                  "name": "file  video  outline"
              },
              {
                  "id": "file-word",
                  "name": "file  word"
              },
              {
                  "id": "file-word-box",
                  "name": "file  word  box"
              },
              {
                  "id": "file-word-box-outline",
                  "name": "file  word  box  outline"
              },
              {
                  "id": "file-word-outline",
                  "name": "file  word  outline"
              },
              {
                  "id": "file-xml-box",
                  "name": "file  xml  box"
              },
              {
                  "id": "film",
                  "name": "film"
              },
              {
                  "id": "filmstrip",
                  "name": "filmstrip"
              },
              {
                  "id": "filmstrip-box",
                  "name": "filmstrip  box"
              },
              {
                  "id": "filmstrip-box-multiple",
                  "name": "filmstrip  box  multiple"
              },
              {
                  "id": "filmstrip-off",
                  "name": "filmstrip  off"
              },
              {
                  "id": "filter",
                  "name": "filter"
              },
              {
                  "id": "filter-check",
                  "name": "filter  check"
              },
              {
                  "id": "filter-check-outline",
                  "name": "filter  check  outline"
              },
              {
                  "id": "filter-cog",
                  "name": "filter  cog"
              },
              {
                  "id": "filter-cog-outline",
                  "name": "filter  cog  outline"
              },
              {
                  "id": "filter-menu",
                  "name": "filter  menu"
              },
              {
                  "id": "filter-menu-outline",
                  "name": "filter  menu  outline"
              },
              {
                  "id": "filter-minus",
                  "name": "filter  minus"
              },
              {
                  "id": "filter-minus-outline",
                  "name": "filter  minus  outline"
              },
              {
                  "id": "filter-multiple",
                  "name": "filter  multiple"
              },
              {
                  "id": "filter-multiple-outline",
                  "name": "filter  multiple  outline"
              },
              {
                  "id": "filter-off",
                  "name": "filter  off"
              },
              {
                  "id": "filter-off-outline",
                  "name": "filter  off  outline"
              },
              {
                  "id": "filter-outline",
                  "name": "filter  outline"
              },
              {
                  "id": "filter-plus",
                  "name": "filter  plus"
              },
              {
                  "id": "filter-plus-outline",
                  "name": "filter  plus  outline"
              },
              {
                  "id": "filter-remove",
                  "name": "filter  remove"
              },
              {
                  "id": "filter-remove-outline",
                  "name": "filter  remove  outline"
              },
              {
                  "id": "filter-settings",
                  "name": "filter  settings"
              },
              {
                  "id": "filter-settings-outline",
                  "name": "filter  settings  outline"
              },
              {
                  "id": "filter-variant",
                  "name": "filter  variant"
              },
              {
                  "id": "filter-variant-minus",
                  "name": "filter  variant  minus"
              },
              {
                  "id": "filter-variant-plus",
                  "name": "filter  variant  plus"
              },
              {
                  "id": "filter-variant-remove",
                  "name": "filter  variant  remove"
              },
              {
                  "id": "finance",
                  "name": "finance"
              },
              {
                  "id": "find-replace",
                  "name": "find  replace"
              },
              {
                  "id": "fingerprint",
                  "name": "fingerprint"
              },
              {
                  "id": "fingerprint-off",
                  "name": "fingerprint  off"
              },
              {
                  "id": "fire",
                  "name": "fire"
              },
              {
                  "id": "fire-alert",
                  "name": "fire  alert"
              },
              {
                  "id": "fire-circle",
                  "name": "fire  circle"
              },
              {
                  "id": "fire-extinguisher",
                  "name": "fire  extinguisher"
              },
              {
                  "id": "fire-hydrant",
                  "name": "fire  hydrant"
              },
              {
                  "id": "fire-hydrant-alert",
                  "name": "fire  hydrant  alert"
              },
              {
                  "id": "fire-hydrant-off",
                  "name": "fire  hydrant  off"
              },
              {
                  "id": "fire-off",
                  "name": "fire  off"
              },
              {
                  "id": "fire-truck",
                  "name": "fire  truck"
              },
              {
                  "id": "firebase",
                  "name": "firebase"
              },
              {
                  "id": "firefox",
                  "name": "firefox"
              },
              {
                  "id": "fireplace",
                  "name": "fireplace"
              },
              {
                  "id": "fireplace-off",
                  "name": "fireplace  off"
              },
              {
                  "id": "firewire",
                  "name": "firewire"
              },
              {
                  "id": "firework",
                  "name": "firework"
              },
              {
                  "id": "firework-off",
                  "name": "firework  off"
              },
              {
                  "id": "fish",
                  "name": "fish"
              },
              {
                  "id": "fish-off",
                  "name": "fish  off"
              },
              {
                  "id": "fishbowl",
                  "name": "fishbowl"
              },
              {
                  "id": "fishbowl-outline",
                  "name": "fishbowl  outline"
              },
              {
                  "id": "fit-to-page",
                  "name": "fit  to  page"
              },
              {
                  "id": "fit-to-page-outline",
                  "name": "fit  to  page  outline"
              },
              {
                  "id": "fit-to-screen",
                  "name": "fit  to  screen"
              },
              {
                  "id": "fit-to-screen-outline",
                  "name": "fit  to  screen  outline"
              },
              {
                  "id": "flag",
                  "name": "flag"
              },
              {
                  "id": "flag-checkered",
                  "name": "flag  checkered"
              },
              {
                  "id": "flag-minus",
                  "name": "flag  minus"
              },
              {
                  "id": "flag-minus-outline",
                  "name": "flag  minus  outline"
              },
              {
                  "id": "flag-off",
                  "name": "flag  off"
              },
              {
                  "id": "flag-off-outline",
                  "name": "flag  off  outline"
              },
              {
                  "id": "flag-outline",
                  "name": "flag  outline"
              },
              {
                  "id": "flag-plus",
                  "name": "flag  plus"
              },
              {
                  "id": "flag-plus-outline",
                  "name": "flag  plus  outline"
              },
              {
                  "id": "flag-remove",
                  "name": "flag  remove"
              },
              {
                  "id": "flag-remove-outline",
                  "name": "flag  remove  outline"
              },
              {
                  "id": "flag-triangle",
                  "name": "flag  triangle"
              },
              {
                  "id": "flag-variant",
                  "name": "flag  variant"
              },
              {
                  "id": "flag-variant-minus",
                  "name": "flag  variant  minus"
              },
              {
                  "id": "flag-variant-minus-outline",
                  "name": "flag  variant  minus  outline"
              },
              {
                  "id": "flag-variant-off",
                  "name": "flag  variant  off"
              },
              {
                  "id": "flag-variant-off-outline",
                  "name": "flag  variant  off  outline"
              },
              {
                  "id": "flag-variant-outline",
                  "name": "flag  variant  outline"
              },
              {
                  "id": "flag-variant-plus",
                  "name": "flag  variant  plus"
              },
              {
                  "id": "flag-variant-plus-outline",
                  "name": "flag  variant  plus  outline"
              },
              {
                  "id": "flag-variant-remove",
                  "name": "flag  variant  remove"
              },
              {
                  "id": "flag-variant-remove-outline",
                  "name": "flag  variant  remove  outline"
              },
              {
                  "id": "flare",
                  "name": "flare"
              },
              {
                  "id": "flash",
                  "name": "flash"
              },
              {
                  "id": "flash-alert",
                  "name": "flash  alert"
              },
              {
                  "id": "flash-alert-outline",
                  "name": "flash  alert  outline"
              },
              {
                  "id": "flash-auto",
                  "name": "flash  auto"
              },
              {
                  "id": "flash-off",
                  "name": "flash  off"
              },
              {
                  "id": "flash-off-outline",
                  "name": "flash  off  outline"
              },
              {
                  "id": "flash-outline",
                  "name": "flash  outline"
              },
              {
                  "id": "flash-red-eye",
                  "name": "flash  red  eye"
              },
              {
                  "id": "flash-triangle",
                  "name": "flash  triangle"
              },
              {
                  "id": "flash-triangle-outline",
                  "name": "flash  triangle  outline"
              },
              {
                  "id": "flashlight",
                  "name": "flashlight"
              },
              {
                  "id": "flashlight-off",
                  "name": "flashlight  off"
              },
              {
                  "id": "flask",
                  "name": "flask"
              },
              {
                  "id": "flask-empty",
                  "name": "flask  empty"
              },
              {
                  "id": "flask-empty-minus",
                  "name": "flask  empty  minus"
              },
              {
                  "id": "flask-empty-minus-outline",
                  "name": "flask  empty  minus  outline"
              },
              {
                  "id": "flask-empty-off",
                  "name": "flask  empty  off"
              },
              {
                  "id": "flask-empty-off-outline",
                  "name": "flask  empty  off  outline"
              },
              {
                  "id": "flask-empty-outline",
                  "name": "flask  empty  outline"
              },
              {
                  "id": "flask-empty-plus",
                  "name": "flask  empty  plus"
              },
              {
                  "id": "flask-empty-plus-outline",
                  "name": "flask  empty  plus  outline"
              },
              {
                  "id": "flask-empty-remove",
                  "name": "flask  empty  remove"
              },
              {
                  "id": "flask-empty-remove-outline",
                  "name": "flask  empty  remove  outline"
              },
              {
                  "id": "flask-minus",
                  "name": "flask  minus"
              },
              {
                  "id": "flask-minus-outline",
                  "name": "flask  minus  outline"
              },
              {
                  "id": "flask-off",
                  "name": "flask  off"
              },
              {
                  "id": "flask-off-outline",
                  "name": "flask  off  outline"
              },
              {
                  "id": "flask-outline",
                  "name": "flask  outline"
              },
              {
                  "id": "flask-plus",
                  "name": "flask  plus"
              },
              {
                  "id": "flask-plus-outline",
                  "name": "flask  plus  outline"
              },
              {
                  "id": "flask-remove",
                  "name": "flask  remove"
              },
              {
                  "id": "flask-remove-outline",
                  "name": "flask  remove  outline"
              },
              {
                  "id": "flask-round-bottom",
                  "name": "flask  round  bottom"
              },
              {
                  "id": "flask-round-bottom-empty",
                  "name": "flask  round  bottom  empty"
              },
              {
                  "id": "flask-round-bottom-empty-outline",
                  "name": "flask  round  bottom  empty  outline"
              },
              {
                  "id": "flask-round-bottom-outline",
                  "name": "flask  round  bottom  outline"
              },
              {
                  "id": "fleur-de-lis",
                  "name": "fleur  de  lis"
              },
              {
                  "id": "flip-horizontal",
                  "name": "flip  horizontal"
              },
              {
                  "id": "flip-to-back",
                  "name": "flip  to  back"
              },
              {
                  "id": "flip-to-front",
                  "name": "flip  to  front"
              },
              {
                  "id": "flip-vertical",
                  "name": "flip  vertical"
              },
              {
                  "id": "floor-lamp",
                  "name": "floor  lamp"
              },
              {
                  "id": "floor-lamp-dual",
                  "name": "floor  lamp  dual"
              },
              {
                  "id": "floor-lamp-dual-outline",
                  "name": "floor  lamp  dual  outline"
              },
              {
                  "id": "floor-lamp-outline",
                  "name": "floor  lamp  outline"
              },
              {
                  "id": "floor-lamp-torchiere",
                  "name": "floor  lamp  torchiere"
              },
              {
                  "id": "floor-lamp-torchiere-outline",
                  "name": "floor  lamp  torchiere  outline"
              },
              {
                  "id": "floor-lamp-torchiere-variant",
                  "name": "floor  lamp  torchiere  variant"
              },
              {
                  "id": "floor-lamp-torchiere-variant-outline",
                  "name": "floor  lamp  torchiere  variant  outline"
              },
              {
                  "id": "floor-plan",
                  "name": "floor  plan"
              },
              {
                  "id": "floppy",
                  "name": "floppy"
              },
              {
                  "id": "floppy-variant",
                  "name": "floppy  variant"
              },
              {
                  "id": "flower",
                  "name": "flower"
              },
              {
                  "id": "flower-outline",
                  "name": "flower  outline"
              },
              {
                  "id": "flower-pollen",
                  "name": "flower  pollen"
              },
              {
                  "id": "flower-pollen-outline",
                  "name": "flower  pollen  outline"
              },
              {
                  "id": "flower-poppy",
                  "name": "flower  poppy"
              },
              {
                  "id": "flower-tulip",
                  "name": "flower  tulip"
              },
              {
                  "id": "flower-tulip-outline",
                  "name": "flower  tulip  outline"
              },
              {
                  "id": "focus-auto",
                  "name": "focus  auto"
              },
              {
                  "id": "focus-field",
                  "name": "focus  field"
              },
              {
                  "id": "focus-field-horizontal",
                  "name": "focus  field  horizontal"
              },
              {
                  "id": "focus-field-vertical",
                  "name": "focus  field  vertical"
              },
              {
                  "id": "folder",
                  "name": "folder"
              },
              {
                  "id": "folder-account",
                  "name": "folder  account"
              },
              {
                  "id": "folder-account-outline",
                  "name": "folder  account  outline"
              },
              {
                  "id": "folder-alert",
                  "name": "folder  alert"
              },
              {
                  "id": "folder-alert-outline",
                  "name": "folder  alert  outline"
              },
              {
                  "id": "folder-arrow-down",
                  "name": "folder  arrow  down"
              },
              {
                  "id": "folder-arrow-down-outline",
                  "name": "folder  arrow  down  outline"
              },
              {
                  "id": "folder-arrow-left",
                  "name": "folder  arrow  left"
              },
              {
                  "id": "folder-arrow-left-outline",
                  "name": "folder  arrow  left  outline"
              },
              {
                  "id": "folder-arrow-left-right",
                  "name": "folder  arrow  left  right"
              },
              {
                  "id": "folder-arrow-left-right-outline",
                  "name": "folder  arrow  left  right  outline"
              },
              {
                  "id": "folder-arrow-right",
                  "name": "folder  arrow  right"
              },
              {
                  "id": "folder-arrow-right-outline",
                  "name": "folder  arrow  right  outline"
              },
              {
                  "id": "folder-arrow-up",
                  "name": "folder  arrow  up"
              },
              {
                  "id": "folder-arrow-up-down",
                  "name": "folder  arrow  up  down"
              },
              {
                  "id": "folder-arrow-up-down-outline",
                  "name": "folder  arrow  up  down  outline"
              },
              {
                  "id": "folder-arrow-up-outline",
                  "name": "folder  arrow  up  outline"
              },
              {
                  "id": "folder-cancel",
                  "name": "folder  cancel"
              },
              {
                  "id": "folder-cancel-outline",
                  "name": "folder  cancel  outline"
              },
              {
                  "id": "folder-check",
                  "name": "folder  check"
              },
              {
                  "id": "folder-check-outline",
                  "name": "folder  check  outline"
              },
              {
                  "id": "folder-clock",
                  "name": "folder  clock"
              },
              {
                  "id": "folder-clock-outline",
                  "name": "folder  clock  outline"
              },
              {
                  "id": "folder-cog",
                  "name": "folder  cog"
              },
              {
                  "id": "folder-cog-outline",
                  "name": "folder  cog  outline"
              },
              {
                  "id": "folder-download",
                  "name": "folder  download"
              },
              {
                  "id": "folder-download-outline",
                  "name": "folder  download  outline"
              },
              {
                  "id": "folder-edit",
                  "name": "folder  edit"
              },
              {
                  "id": "folder-edit-outline",
                  "name": "folder  edit  outline"
              },
              {
                  "id": "folder-eye",
                  "name": "folder  eye"
              },
              {
                  "id": "folder-eye-outline",
                  "name": "folder  eye  outline"
              },
              {
                  "id": "folder-file",
                  "name": "folder  file"
              },
              {
                  "id": "folder-file-outline",
                  "name": "folder  file  outline"
              },
              {
                  "id": "folder-google-drive",
                  "name": "folder  google  drive"
              },
              {
                  "id": "folder-heart",
                  "name": "folder  heart"
              },
              {
                  "id": "folder-heart-outline",
                  "name": "folder  heart  outline"
              },
              {
                  "id": "folder-hidden",
                  "name": "folder  hidden"
              },
              {
                  "id": "folder-home",
                  "name": "folder  home"
              },
              {
                  "id": "folder-home-outline",
                  "name": "folder  home  outline"
              },
              {
                  "id": "folder-image",
                  "name": "folder  image"
              },
              {
                  "id": "folder-information",
                  "name": "folder  information"
              },
              {
                  "id": "folder-information-outline",
                  "name": "folder  information  outline"
              },
              {
                  "id": "folder-key",
                  "name": "folder  key"
              },
              {
                  "id": "folder-key-network",
                  "name": "folder  key  network"
              },
              {
                  "id": "folder-key-network-outline",
                  "name": "folder  key  network  outline"
              },
              {
                  "id": "folder-key-outline",
                  "name": "folder  key  outline"
              },
              {
                  "id": "folder-lock",
                  "name": "folder  lock"
              },
              {
                  "id": "folder-lock-open",
                  "name": "folder  lock  open"
              },
              {
                  "id": "folder-lock-open-outline",
                  "name": "folder  lock  open  outline"
              },
              {
                  "id": "folder-lock-outline",
                  "name": "folder  lock  outline"
              },
              {
                  "id": "folder-marker",
                  "name": "folder  marker"
              },
              {
                  "id": "folder-marker-outline",
                  "name": "folder  marker  outline"
              },
              {
                  "id": "folder-minus",
                  "name": "folder  minus"
              },
              {
                  "id": "folder-minus-outline",
                  "name": "folder  minus  outline"
              },
              {
                  "id": "folder-move",
                  "name": "folder  move"
              },
              {
                  "id": "folder-move-outline",
                  "name": "folder  move  outline"
              },
              {
                  "id": "folder-multiple",
                  "name": "folder  multiple"
              },
              {
                  "id": "folder-multiple-image",
                  "name": "folder  multiple  image"
              },
              {
                  "id": "folder-multiple-outline",
                  "name": "folder  multiple  outline"
              },
              {
                  "id": "folder-multiple-plus",
                  "name": "folder  multiple  plus"
              },
              {
                  "id": "folder-multiple-plus-outline",
                  "name": "folder  multiple  plus  outline"
              },
              {
                  "id": "folder-music",
                  "name": "folder  music"
              },
              {
                  "id": "folder-music-outline",
                  "name": "folder  music  outline"
              },
              {
                  "id": "folder-network",
                  "name": "folder  network"
              },
              {
                  "id": "folder-network-outline",
                  "name": "folder  network  outline"
              },
              {
                  "id": "folder-off",
                  "name": "folder  off"
              },
              {
                  "id": "folder-off-outline",
                  "name": "folder  off  outline"
              },
              {
                  "id": "folder-open",
                  "name": "folder  open"
              },
              {
                  "id": "folder-open-outline",
                  "name": "folder  open  outline"
              },
              {
                  "id": "folder-outline",
                  "name": "folder  outline"
              },
              {
                  "id": "folder-play",
                  "name": "folder  play"
              },
              {
                  "id": "folder-play-outline",
                  "name": "folder  play  outline"
              },
              {
                  "id": "folder-plus",
                  "name": "folder  plus"
              },
              {
                  "id": "folder-plus-outline",
                  "name": "folder  plus  outline"
              },
              {
                  "id": "folder-pound",
                  "name": "folder  pound"
              },
              {
                  "id": "folder-pound-outline",
                  "name": "folder  pound  outline"
              },
              {
                  "id": "folder-question",
                  "name": "folder  question"
              },
              {
                  "id": "folder-question-outline",
                  "name": "folder  question  outline"
              },
              {
                  "id": "folder-refresh",
                  "name": "folder  refresh"
              },
              {
                  "id": "folder-refresh-outline",
                  "name": "folder  refresh  outline"
              },
              {
                  "id": "folder-remove",
                  "name": "folder  remove"
              },
              {
                  "id": "folder-remove-outline",
                  "name": "folder  remove  outline"
              },
              {
                  "id": "folder-search",
                  "name": "folder  search"
              },
              {
                  "id": "folder-search-outline",
                  "name": "folder  search  outline"
              },
              {
                  "id": "folder-settings",
                  "name": "folder  settings"
              },
              {
                  "id": "folder-settings-outline",
                  "name": "folder  settings  outline"
              },
              {
                  "id": "folder-star",
                  "name": "folder  star"
              },
              {
                  "id": "folder-star-multiple",
                  "name": "folder  star  multiple"
              },
              {
                  "id": "folder-star-multiple-outline",
                  "name": "folder  star  multiple  outline"
              },
              {
                  "id": "folder-star-outline",
                  "name": "folder  star  outline"
              },
              {
                  "id": "folder-swap",
                  "name": "folder  swap"
              },
              {
                  "id": "folder-swap-outline",
                  "name": "folder  swap  outline"
              },
              {
                  "id": "folder-sync",
                  "name": "folder  sync"
              },
              {
                  "id": "folder-sync-outline",
                  "name": "folder  sync  outline"
              },
              {
                  "id": "folder-table",
                  "name": "folder  table"
              },
              {
                  "id": "folder-table-outline",
                  "name": "folder  table  outline"
              },
              {
                  "id": "folder-text",
                  "name": "folder  text"
              },
              {
                  "id": "folder-text-outline",
                  "name": "folder  text  outline"
              },
              {
                  "id": "folder-upload",
                  "name": "folder  upload"
              },
              {
                  "id": "folder-upload-outline",
                  "name": "folder  upload  outline"
              },
              {
                  "id": "folder-wrench",
                  "name": "folder  wrench"
              },
              {
                  "id": "folder-wrench-outline",
                  "name": "folder  wrench  outline"
              },
              {
                  "id": "folder-zip",
                  "name": "folder  zip"
              },
              {
                  "id": "folder-zip-outline",
                  "name": "folder  zip  outline"
              },
              {
                  "id": "font-awesome",
                  "name": "font  awesome"
              },
              {
                  "id": "food",
                  "name": "food"
              },
              {
                  "id": "food-apple",
                  "name": "food  apple"
              },
              {
                  "id": "food-apple-outline",
                  "name": "food  apple  outline"
              },
              {
                  "id": "food-croissant",
                  "name": "food  croissant"
              },
              {
                  "id": "food-drumstick",
                  "name": "food  drumstick"
              },
              {
                  "id": "food-drumstick-off",
                  "name": "food  drumstick  off"
              },
              {
                  "id": "food-drumstick-off-outline",
                  "name": "food  drumstick  off  outline"
              },
              {
                  "id": "food-drumstick-outline",
                  "name": "food  drumstick  outline"
              },
              {
                  "id": "food-fork-drink",
                  "name": "food  fork  drink"
              },
              {
                  "id": "food-halal",
                  "name": "food  halal"
              },
              {
                  "id": "food-hot-dog",
                  "name": "food  hot  dog"
              },
              {
                  "id": "food-kosher",
                  "name": "food  kosher"
              },
              {
                  "id": "food-off",
                  "name": "food  off"
              },
              {
                  "id": "food-off-outline",
                  "name": "food  off  outline"
              },
              {
                  "id": "food-outline",
                  "name": "food  outline"
              },
              {
                  "id": "food-steak",
                  "name": "food  steak"
              },
              {
                  "id": "food-steak-off",
                  "name": "food  steak  off"
              },
              {
                  "id": "food-takeout-box",
                  "name": "food  takeout  box"
              },
              {
                  "id": "food-takeout-box-outline",
                  "name": "food  takeout  box  outline"
              },
              {
                  "id": "food-turkey",
                  "name": "food  turkey"
              },
              {
                  "id": "food-variant",
                  "name": "food  variant"
              },
              {
                  "id": "food-variant-off",
                  "name": "food  variant  off"
              },
              {
                  "id": "foot-print",
                  "name": "foot  print"
              },
              {
                  "id": "football",
                  "name": "football"
              },
              {
                  "id": "football-australian",
                  "name": "football  australian"
              },
              {
                  "id": "football-helmet",
                  "name": "football  helmet"
              },
              {
                  "id": "forest",
                  "name": "forest"
              },
              {
                  "id": "forest-outline",
                  "name": "forest  outline"
              },
              {
                  "id": "forklift",
                  "name": "forklift"
              },
              {
                  "id": "form-dropdown",
                  "name": "form  dropdown"
              },
              {
                  "id": "form-select",
                  "name": "form  select"
              },
              {
                  "id": "form-textarea",
                  "name": "form  textarea"
              },
              {
                  "id": "form-textbox",
                  "name": "form  textbox"
              },
              {
                  "id": "form-textbox-lock",
                  "name": "form  textbox  lock"
              },
              {
                  "id": "form-textbox-password",
                  "name": "form  textbox  password"
              },
              {
                  "id": "format-align-bottom",
                  "name": "format  align  bottom"
              },
              {
                  "id": "format-align-center",
                  "name": "format  align  center"
              },
              {
                  "id": "format-align-justify",
                  "name": "format  align  justify"
              },
              {
                  "id": "format-align-left",
                  "name": "format  align  left"
              },
              {
                  "id": "format-align-middle",
                  "name": "format  align  middle"
              },
              {
                  "id": "format-align-right",
                  "name": "format  align  right"
              },
              {
                  "id": "format-align-top",
                  "name": "format  align  top"
              },
              {
                  "id": "format-annotation-minus",
                  "name": "format  annotation  minus"
              },
              {
                  "id": "format-annotation-plus",
                  "name": "format  annotation  plus"
              },
              {
                  "id": "format-bold",
                  "name": "format  bold"
              },
              {
                  "id": "format-clear",
                  "name": "format  clear"
              },
              {
                  "id": "format-color-fill",
                  "name": "format  color  fill"
              },
              {
                  "id": "format-color-highlight",
                  "name": "format  color  highlight"
              },
              {
                  "id": "format-color-marker-cancel",
                  "name": "format  color  marker  cancel"
              },
              {
                  "id": "format-color-text",
                  "name": "format  color  text"
              },
              {
                  "id": "format-columns",
                  "name": "format  columns"
              },
              {
                  "id": "format-float-center",
                  "name": "format  float  center"
              },
              {
                  "id": "format-float-left",
                  "name": "format  float  left"
              },
              {
                  "id": "format-float-none",
                  "name": "format  float  none"
              },
              {
                  "id": "format-float-right",
                  "name": "format  float  right"
              },
              {
                  "id": "format-font",
                  "name": "format  font"
              },
              {
                  "id": "format-font-size-decrease",
                  "name": "format  font  size  decrease"
              },
              {
                  "id": "format-font-size-increase",
                  "name": "format  font  size  increase"
              },
              {
                  "id": "format-header-1",
                  "name": "format  header  1"
              },
              {
                  "id": "format-header-2",
                  "name": "format  header  2"
              },
              {
                  "id": "format-header-3",
                  "name": "format  header  3"
              },
              {
                  "id": "format-header-4",
                  "name": "format  header  4"
              },
              {
                  "id": "format-header-5",
                  "name": "format  header  5"
              },
              {
                  "id": "format-header-6",
                  "name": "format  header  6"
              },
              {
                  "id": "format-header-decrease",
                  "name": "format  header  decrease"
              },
              {
                  "id": "format-header-equal",
                  "name": "format  header  equal"
              },
              {
                  "id": "format-header-increase",
                  "name": "format  header  increase"
              },
              {
                  "id": "format-header-pound",
                  "name": "format  header  pound"
              },
              {
                  "id": "format-horizontal-align-center",
                  "name": "format  horizontal  align  center"
              },
              {
                  "id": "format-horizontal-align-left",
                  "name": "format  horizontal  align  left"
              },
              {
                  "id": "format-horizontal-align-right",
                  "name": "format  horizontal  align  right"
              },
              {
                  "id": "format-indent-decrease",
                  "name": "format  indent  decrease"
              },
              {
                  "id": "format-indent-increase",
                  "name": "format  indent  increase"
              },
              {
                  "id": "format-italic",
                  "name": "format  italic"
              },
              {
                  "id": "format-letter-case",
                  "name": "format  letter  case"
              },
              {
                  "id": "format-letter-case-lower",
                  "name": "format  letter  case  lower"
              },
              {
                  "id": "format-letter-case-upper",
                  "name": "format  letter  case  upper"
              },
              {
                  "id": "format-letter-ends-with",
                  "name": "format  letter  ends  with"
              },
              {
                  "id": "format-letter-matches",
                  "name": "format  letter  matches"
              },
              {
                  "id": "format-letter-spacing",
                  "name": "format  letter  spacing"
              },
              {
                  "id": "format-letter-spacing-variant",
                  "name": "format  letter  spacing  variant"
              },
              {
                  "id": "format-letter-starts-with",
                  "name": "format  letter  starts  with"
              },
              {
                  "id": "format-line-height",
                  "name": "format  line  height"
              },
              {
                  "id": "format-line-spacing",
                  "name": "format  line  spacing"
              },
              {
                  "id": "format-line-style",
                  "name": "format  line  style"
              },
              {
                  "id": "format-line-weight",
                  "name": "format  line  weight"
              },
              {
                  "id": "format-list-bulleted",
                  "name": "format  list  bulleted"
              },
              {
                  "id": "format-list-bulleted-square",
                  "name": "format  list  bulleted  square"
              },
              {
                  "id": "format-list-bulleted-triangle",
                  "name": "format  list  bulleted  triangle"
              },
              {
                  "id": "format-list-bulleted-type",
                  "name": "format  list  bulleted  type"
              },
              {
                  "id": "format-list-checkbox",
                  "name": "format  list  checkbox"
              },
              {
                  "id": "format-list-checks",
                  "name": "format  list  checks"
              },
              {
                  "id": "format-list-group",
                  "name": "format  list  group"
              },
              {
                  "id": "format-list-group-plus",
                  "name": "format  list  group  plus"
              },
              {
                  "id": "format-list-numbered",
                  "name": "format  list  numbered"
              },
              {
                  "id": "format-list-numbered-rtl",
                  "name": "format  list  numbered  rtl"
              },
              {
                  "id": "format-list-text",
                  "name": "format  list  text"
              },
              {
                  "id": "format-overline",
                  "name": "format  overline"
              },
              {
                  "id": "format-page-break",
                  "name": "format  page  break"
              },
              {
                  "id": "format-page-split",
                  "name": "format  page  split"
              },
              {
                  "id": "format-paint",
                  "name": "format  paint"
              },
              {
                  "id": "format-paragraph",
                  "name": "format  paragraph"
              },
              {
                  "id": "format-paragraph-spacing",
                  "name": "format  paragraph  spacing"
              },
              {
                  "id": "format-pilcrow",
                  "name": "format  pilcrow"
              },
              {
                  "id": "format-pilcrow-arrow-left",
                  "name": "format  pilcrow  arrow  left"
              },
              {
                  "id": "format-pilcrow-arrow-right",
                  "name": "format  pilcrow  arrow  right"
              },
              {
                  "id": "format-quote-close",
                  "name": "format  quote  close"
              },
              {
                  "id": "format-quote-close-outline",
                  "name": "format  quote  close  outline"
              },
              {
                  "id": "format-quote-open",
                  "name": "format  quote  open"
              },
              {
                  "id": "format-quote-open-outline",
                  "name": "format  quote  open  outline"
              },
              {
                  "id": "format-rotate-90",
                  "name": "format  rotate  90"
              },
              {
                  "id": "format-section",
                  "name": "format  section"
              },
              {
                  "id": "format-size",
                  "name": "format  size"
              },
              {
                  "id": "format-strikethrough",
                  "name": "format  strikethrough"
              },
              {
                  "id": "format-strikethrough-variant",
                  "name": "format  strikethrough  variant"
              },
              {
                  "id": "format-subscript",
                  "name": "format  subscript"
              },
              {
                  "id": "format-superscript",
                  "name": "format  superscript"
              },
              {
                  "id": "format-text",
                  "name": "format  text"
              },
              {
                  "id": "format-text-rotation-angle-down",
                  "name": "format  text  rotation  angle  down"
              },
              {
                  "id": "format-text-rotation-angle-up",
                  "name": "format  text  rotation  angle  up"
              },
              {
                  "id": "format-text-rotation-down",
                  "name": "format  text  rotation  down"
              },
              {
                  "id": "format-text-rotation-down-vertical",
                  "name": "format  text  rotation  down  vertical"
              },
              {
                  "id": "format-text-rotation-none",
                  "name": "format  text  rotation  none"
              },
              {
                  "id": "format-text-rotation-up",
                  "name": "format  text  rotation  up"
              },
              {
                  "id": "format-text-rotation-vertical",
                  "name": "format  text  rotation  vertical"
              },
              {
                  "id": "format-text-variant",
                  "name": "format  text  variant"
              },
              {
                  "id": "format-text-variant-outline",
                  "name": "format  text  variant  outline"
              },
              {
                  "id": "format-text-wrapping-clip",
                  "name": "format  text  wrapping  clip"
              },
              {
                  "id": "format-text-wrapping-overflow",
                  "name": "format  text  wrapping  overflow"
              },
              {
                  "id": "format-text-wrapping-wrap",
                  "name": "format  text  wrapping  wrap"
              },
              {
                  "id": "format-textbox",
                  "name": "format  textbox"
              },
              {
                  "id": "format-title",
                  "name": "format  title"
              },
              {
                  "id": "format-underline",
                  "name": "format  underline"
              },
              {
                  "id": "format-underline-wavy",
                  "name": "format  underline  wavy"
              },
              {
                  "id": "format-vertical-align-bottom",
                  "name": "format  vertical  align  bottom"
              },
              {
                  "id": "format-vertical-align-center",
                  "name": "format  vertical  align  center"
              },
              {
                  "id": "format-vertical-align-top",
                  "name": "format  vertical  align  top"
              },
              {
                  "id": "format-wrap-inline",
                  "name": "format  wrap  inline"
              },
              {
                  "id": "format-wrap-square",
                  "name": "format  wrap  square"
              },
              {
                  "id": "format-wrap-tight",
                  "name": "format  wrap  tight"
              },
              {
                  "id": "format-wrap-top-bottom",
                  "name": "format  wrap  top  bottom"
              },
              {
                  "id": "forum",
                  "name": "forum"
              },
              {
                  "id": "forum-minus",
                  "name": "forum  minus"
              },
              {
                  "id": "forum-minus-outline",
                  "name": "forum  minus  outline"
              },
              {
                  "id": "forum-outline",
                  "name": "forum  outline"
              },
              {
                  "id": "forum-plus",
                  "name": "forum  plus"
              },
              {
                  "id": "forum-plus-outline",
                  "name": "forum  plus  outline"
              },
              {
                  "id": "forum-remove",
                  "name": "forum  remove"
              },
              {
                  "id": "forum-remove-outline",
                  "name": "forum  remove  outline"
              },
              {
                  "id": "forward",
                  "name": "forward"
              },
              {
                  "id": "forwardburger",
                  "name": "forwardburger"
              },
              {
                  "id": "fountain",
                  "name": "fountain"
              },
              {
                  "id": "fountain-pen",
                  "name": "fountain  pen"
              },
              {
                  "id": "fountain-pen-tip",
                  "name": "fountain  pen  tip"
              },
              {
                  "id": "fraction-one-half",
                  "name": "fraction  one  half"
              },
              {
                  "id": "freebsd",
                  "name": "freebsd"
              },
              {
                  "id": "french-fries",
                  "name": "french  fries"
              },
              {
                  "id": "frequently-asked-questions",
                  "name": "frequently  asked  questions"
              },
              {
                  "id": "fridge",
                  "name": "fridge"
              },
              {
                  "id": "fridge-alert",
                  "name": "fridge  alert"
              },
              {
                  "id": "fridge-alert-outline",
                  "name": "fridge  alert  outline"
              },
              {
                  "id": "fridge-bottom",
                  "name": "fridge  bottom"
              },
              {
                  "id": "fridge-industrial",
                  "name": "fridge  industrial"
              },
              {
                  "id": "fridge-industrial-alert",
                  "name": "fridge  industrial  alert"
              },
              {
                  "id": "fridge-industrial-alert-outline",
                  "name": "fridge  industrial  alert  outline"
              },
              {
                  "id": "fridge-industrial-off",
                  "name": "fridge  industrial  off"
              },
              {
                  "id": "fridge-industrial-off-outline",
                  "name": "fridge  industrial  off  outline"
              },
              {
                  "id": "fridge-industrial-outline",
                  "name": "fridge  industrial  outline"
              },
              {
                  "id": "fridge-off",
                  "name": "fridge  off"
              },
              {
                  "id": "fridge-off-outline",
                  "name": "fridge  off  outline"
              },
              {
                  "id": "fridge-outline",
                  "name": "fridge  outline"
              },
              {
                  "id": "fridge-top",
                  "name": "fridge  top"
              },
              {
                  "id": "fridge-variant",
                  "name": "fridge  variant"
              },
              {
                  "id": "fridge-variant-alert",
                  "name": "fridge  variant  alert"
              },
              {
                  "id": "fridge-variant-alert-outline",
                  "name": "fridge  variant  alert  outline"
              },
              {
                  "id": "fridge-variant-off",
                  "name": "fridge  variant  off"
              },
              {
                  "id": "outline",
                  "name": "outline"
              },
              {
                  "id": "fridge-variant-off-outline",
                  "name": "fridge  variant  off  outline"
              },
              {
                  "id": "fridge-variant-outline",
                  "name": "fridge  variant  outline"
              },
              {
                  "id": "fruit-cherries",
                  "name": "fruit  cherries"
              },
              {
                  "id": "fruit-cherries-off",
                  "name": "fruit  cherries  off"
              },
              {
                  "id": "fruit-citrus",
                  "name": "fruit  citrus"
              },
              {
                  "id": "fruit-citrus-off",
                  "name": "fruit  citrus  off"
              },
              {
                  "id": "fruit-grapes",
                  "name": "fruit  grapes"
              },
              {
                  "id": "fruit-grapes-outline",
                  "name": "fruit  grapes  outline"
              },
              {
                  "id": "fruit-pear",
                  "name": "fruit  pear"
              },
              {
                  "id": "fruit-pineapple",
                  "name": "fruit  pineapple"
              },
              {
                  "id": "fruit-watermelon",
                  "name": "fruit  watermelon"
              },
              {
                  "id": "fuel",
                  "name": "fuel"
              },
              {
                  "id": "fuel-cell",
                  "name": "fuel  cell"
              },
              {
                  "id": "fullscreen",
                  "name": "fullscreen"
              },
              {
                  "id": "fullscreen-exit",
                  "name": "fullscreen  exit"
              },
              {
                  "id": "function",
                  "name": "function"
              },
              {
                  "id": "function-variant",
                  "name": "function  variant"
              },
              {
                  "id": "furigana-horizontal",
                  "name": "furigana  horizontal"
              },
              {
                  "id": "furigana-vertical",
                  "name": "furigana  vertical"
              },
              {
                  "id": "fuse",
                  "name": "fuse"
              },
              {
                  "id": "fuse-alert",
                  "name": "fuse  alert"
              },
              {
                  "id": "fuse-blade",
                  "name": "fuse  blade"
              },
              {
                  "id": "fuse-off",
                  "name": "fuse  off"
              },
              {
                  "id": "gamepad",
                  "name": "gamepad"
              },
              {
                  "id": "gamepad-circle",
                  "name": "gamepad  circle"
              },
              {
                  "id": "gamepad-circle-down",
                  "name": "gamepad  circle  down"
              },
              {
                  "id": "gamepad-circle-left",
                  "name": "gamepad  circle  left"
              },
              {
                  "id": "gamepad-circle-outline",
                  "name": "gamepad  circle  outline"
              },
              {
                  "id": "gamepad-circle-right",
                  "name": "gamepad  circle  right"
              },
              {
                  "id": "gamepad-circle-up",
                  "name": "gamepad  circle  up"
              },
              {
                  "id": "gamepad-down",
                  "name": "gamepad  down"
              },
              {
                  "id": "gamepad-left",
                  "name": "gamepad  left"
              },
              {
                  "id": "gamepad-outline",
                  "name": "gamepad  outline"
              },
              {
                  "id": "gamepad-right",
                  "name": "gamepad  right"
              },
              {
                  "id": "gamepad-round",
                  "name": "gamepad  round"
              },
              {
                  "id": "gamepad-round-down",
                  "name": "gamepad  round  down"
              },
              {
                  "id": "gamepad-round-left",
                  "name": "gamepad  round  left"
              },
              {
                  "id": "gamepad-round-outline",
                  "name": "gamepad  round  outline"
              },
              {
                  "id": "gamepad-round-right",
                  "name": "gamepad  round  right"
              },
              {
                  "id": "gamepad-round-up",
                  "name": "gamepad  round  up"
              },
              {
                  "id": "gamepad-square",
                  "name": "gamepad  square"
              },
              {
                  "id": "gamepad-square-outline",
                  "name": "gamepad  square  outline"
              },
              {
                  "id": "gamepad-up",
                  "name": "gamepad  up"
              },
              {
                  "id": "gamepad-variant",
                  "name": "gamepad  variant"
              },
              {
                  "id": "gamepad-variant-outline",
                  "name": "gamepad  variant  outline"
              },
              {
                  "id": "gamma",
                  "name": "gamma"
              },
              {
                  "id": "gantry-crane",
                  "name": "gantry  crane"
              },
              {
                  "id": "garage",
                  "name": "garage"
              },
              {
                  "id": "garage-alert",
                  "name": "garage  alert"
              },
              {
                  "id": "garage-alert-variant",
                  "name": "garage  alert  variant"
              },
              {
                  "id": "garage-lock",
                  "name": "garage  lock"
              },
              {
                  "id": "garage-open",
                  "name": "garage  open"
              },
              {
                  "id": "garage-open-variant",
                  "name": "garage  open  variant"
              },
              {
                  "id": "garage-variant",
                  "name": "garage  variant"
              },
              {
                  "id": "garage-variant-lock",
                  "name": "garage  variant  lock"
              },
              {
                  "id": "gas-burner",
                  "name": "gas  burner"
              },
              {
                  "id": "gas-cylinder",
                  "name": "gas  cylinder"
              },
              {
                  "id": "gas-station",
                  "name": "gas  station"
              },
              {
                  "id": "gas-station-off",
                  "name": "gas  station  off"
              },
              {
                  "id": "gas-station-off-outline",
                  "name": "gas  station  off  outline"
              },
              {
                  "id": "gas-station-outline",
                  "name": "gas  station  outline"
              },
              {
                  "id": "gate",
                  "name": "gate"
              },
              {
                  "id": "gate-alert",
                  "name": "gate  alert"
              },
              {
                  "id": "gate-and",
                  "name": "gate  and"
              },
              {
                  "id": "gate-arrow-left",
                  "name": "gate  arrow  left"
              },
              {
                  "id": "gate-arrow-right",
                  "name": "gate  arrow  right"
              },
              {
                  "id": "gate-buffer",
                  "name": "gate  buffer"
              },
              {
                  "id": "gate-nand",
                  "name": "gate  nand"
              },
              {
                  "id": "gate-nor",
                  "name": "gate  nor"
              },
              {
                  "id": "gate-not",
                  "name": "gate  not"
              },
              {
                  "id": "gate-open",
                  "name": "gate  open"
              },
              {
                  "id": "gate-or",
                  "name": "gate  or"
              },
              {
                  "id": "gate-xnor",
                  "name": "gate  xnor"
              },
              {
                  "id": "gate-xor",
                  "name": "gate  xor"
              },
              {
                  "id": "gatsby",
                  "name": "gatsby"
              },
              {
                  "id": "gauge",
                  "name": "gauge"
              },
              {
                  "id": "gauge-empty",
                  "name": "gauge  empty"
              },
              {
                  "id": "gauge-full",
                  "name": "gauge  full"
              },
              {
                  "id": "gauge-low",
                  "name": "gauge  low"
              },
              {
                  "id": "gavel",
                  "name": "gavel"
              },
              {
                  "id": "gender-female",
                  "name": "gender  female"
              },
              {
                  "id": "gender-male",
                  "name": "gender  male"
              },
              {
                  "id": "gender-male-female",
                  "name": "gender  male  female"
              },
              {
                  "id": "gender-male-female-variant",
                  "name": "gender  male  female  variant"
              },
              {
                  "id": "gender-non-binary",
                  "name": "gender  non  binary"
              },
              {
                  "id": "gender-transgender",
                  "name": "gender  transgender"
              },
              {
                  "id": "gentoo",
                  "name": "gentoo"
              },
              {
                  "id": "gesture",
                  "name": "gesture"
              },
              {
                  "id": "gesture-double-tap",
                  "name": "gesture  double  tap"
              },
              {
                  "id": "gesture-pinch",
                  "name": "gesture  pinch"
              },
              {
                  "id": "gesture-spread",
                  "name": "gesture  spread"
              },
              {
                  "id": "gesture-swipe",
                  "name": "gesture  swipe"
              },
              {
                  "id": "gesture-swipe-down",
                  "name": "gesture  swipe  down"
              },
              {
                  "id": "gesture-swipe-horizontal",
                  "name": "gesture  swipe  horizontal"
              },
              {
                  "id": "gesture-swipe-left",
                  "name": "gesture  swipe  left"
              },
              {
                  "id": "gesture-swipe-right",
                  "name": "gesture  swipe  right"
              },
              {
                  "id": "gesture-swipe-up",
                  "name": "gesture  swipe  up"
              },
              {
                  "id": "gesture-swipe-vertical",
                  "name": "gesture  swipe  vertical"
              },
              {
                  "id": "gesture-tap",
                  "name": "gesture  tap"
              },
              {
                  "id": "gesture-tap-box",
                  "name": "gesture  tap  box"
              },
              {
                  "id": "gesture-tap-button",
                  "name": "gesture  tap  button"
              },
              {
                  "id": "gesture-tap-hold",
                  "name": "gesture  tap  hold"
              },
              {
                  "id": "gesture-two-double-tap",
                  "name": "gesture  two  double  tap"
              },
              {
                  "id": "gesture-two-tap",
                  "name": "gesture  two  tap"
              },
              {
                  "id": "ghost",
                  "name": "ghost"
              },
              {
                  "id": "ghost-off",
                  "name": "ghost  off"
              },
              {
                  "id": "ghost-off-outline",
                  "name": "ghost  off  outline"
              },
              {
                  "id": "ghost-outline",
                  "name": "ghost  outline"
              },
              {
                  "id": "gift",
                  "name": "gift"
              },
              {
                  "id": "gift-off",
                  "name": "gift  off"
              },
              {
                  "id": "gift-off-outline",
                  "name": "gift  off  outline"
              },
              {
                  "id": "gift-open",
                  "name": "gift  open"
              },
              {
                  "id": "gift-open-outline",
                  "name": "gift  open  outline"
              },
              {
                  "id": "gift-outline",
                  "name": "gift  outline"
              },
              {
                  "id": "git",
                  "name": "git"
              },
              {
                  "id": "github",
                  "name": "github"
              },
              {
                  "id": "gitlab",
                  "name": "gitlab"
              },
              {
                  "id": "glass-cocktail",
                  "name": "glass  cocktail"
              },
              {
                  "id": "glass-cocktail-off",
                  "name": "glass  cocktail  off"
              },
              {
                  "id": "glass-flute",
                  "name": "glass  flute"
              },
              {
                  "id": "glass-fragile",
                  "name": "glass  fragile"
              },
              {
                  "id": "glass-mug",
                  "name": "glass  mug"
              },
              {
                  "id": "glass-mug-off",
                  "name": "glass  mug  off"
              },
              {
                  "id": "glass-mug-variant",
                  "name": "glass  mug  variant"
              },
              {
                  "id": "glass-mug-variant-off",
                  "name": "glass  mug  variant  off"
              },
              {
                  "id": "glass-pint-outline",
                  "name": "glass  pint  outline"
              },
              {
                  "id": "glass-stange",
                  "name": "glass  stange"
              },
              {
                  "id": "glass-tulip",
                  "name": "glass  tulip"
              },
              {
                  "id": "glass-wine",
                  "name": "glass  wine"
              },
              {
                  "id": "glasses",
                  "name": "glasses"
              },
              {
                  "id": "globe-light",
                  "name": "globe  light"
              },
              {
                  "id": "globe-light-outline",
                  "name": "globe  light  outline"
              },
              {
                  "id": "globe-model",
                  "name": "globe  model"
              },
              {
                  "id": "gmail",
                  "name": "gmail"
              },
              {
                  "id": "gnome",
                  "name": "gnome"
              },
              {
                  "id": "go-kart",
                  "name": "go  kart"
              },
              {
                  "id": "go-kart-track",
                  "name": "go  kart  track"
              },
              {
                  "id": "gog",
                  "name": "gog"
              },
              {
                  "id": "gold",
                  "name": "gold"
              },
              {
                  "id": "golf",
                  "name": "golf"
              },
              {
                  "id": "golf-cart",
                  "name": "golf  cart"
              },
              {
                  "id": "golf-tee",
                  "name": "golf  tee"
              },
              {
                  "id": "gondola",
                  "name": "gondola"
              },
              {
                  "id": "goodreads",
                  "name": "goodreads"
              },
              {
                  "id": "google",
                  "name": "google"
              },
              {
                  "id": "google-ads",
                  "name": "google  ads"
              },
              {
                  "id": "google-analytics",
                  "name": "google  analytics"
              },
              {
                  "id": "google-assistant",
                  "name": "google  assistant"
              },
              {
                  "id": "google-cardboard",
                  "name": "google  cardboard"
              },
              {
                  "id": "google-chrome",
                  "name": "google  chrome"
              },
              {
                  "id": "google-circles",
                  "name": "google  circles"
              },
              {
                  "id": "google-circles-communities",
                  "name": "google  circles  communities"
              },
              {
                  "id": "google-circles-extended",
                  "name": "google  circles  extended"
              },
              {
                  "id": "google-circles-group",
                  "name": "google  circles  group"
              },
              {
                  "id": "google-classroom",
                  "name": "google  classroom"
              },
              {
                  "id": "google-cloud",
                  "name": "google  cloud"
              },
              {
                  "id": "google-downasaur",
                  "name": "google  downasaur"
              },
              {
                  "id": "google-drive",
                  "name": "google  drive"
              },
              {
                  "id": "google-earth",
                  "name": "google  earth"
              },
              {
                  "id": "google-fit",
                  "name": "google  fit"
              },
              {
                  "id": "google-glass",
                  "name": "google  glass"
              },
              {
                  "id": "google-hangouts",
                  "name": "google  hangouts"
              },
              {
                  "id": "google-keep",
                  "name": "google  keep"
              },
              {
                  "id": "google-lens",
                  "name": "google  lens"
              },
              {
                  "id": "google-maps",
                  "name": "google  maps"
              },
              {
                  "id": "google-my-business",
                  "name": "google  my  business"
              },
              {
                  "id": "google-nearby",
                  "name": "google  nearby"
              },
              {
                  "id": "google-play",
                  "name": "google  play"
              },
              {
                  "id": "google-plus",
                  "name": "google  plus"
              },
              {
                  "id": "google-podcast",
                  "name": "google  podcast"
              },
              {
                  "id": "google-spreadsheet",
                  "name": "google  spreadsheet"
              },
              {
                  "id": "google-street-view",
                  "name": "google  street  view"
              },
              {
                  "id": "google-translate",
                  "name": "google  translate"
              },
              {
                  "id": "gradient-horizontal",
                  "name": "gradient  horizontal"
              },
              {
                  "id": "gradient-vertical",
                  "name": "gradient  vertical"
              },
              {
                  "id": "grain",
                  "name": "grain"
              },
              {
                  "id": "graph",
                  "name": "graph"
              },
              {
                  "id": "graph-outline",
                  "name": "graph  outline"
              },
              {
                  "id": "graphql",
                  "name": "graphql"
              },
              {
                  "id": "grass",
                  "name": "grass"
              },
              {
                  "id": "grave-stone",
                  "name": "grave  stone"
              },
              {
                  "id": "grease-pencil",
                  "name": "grease  pencil"
              },
              {
                  "id": "greater-than",
                  "name": "greater  than"
              },
              {
                  "id": "greater-than-or-equal",
                  "name": "greater  than  or  equal"
              },
              {
                  "id": "greenhouse",
                  "name": "greenhouse"
              },
              {
                  "id": "grid",
                  "name": "grid"
              },
              {
                  "id": "grid-large",
                  "name": "grid  large"
              },
              {
                  "id": "grid-off",
                  "name": "grid  off"
              },
              {
                  "id": "grill",
                  "name": "grill"
              },
              {
                  "id": "grill-outline",
                  "name": "grill  outline"
              },
              {
                  "id": "group",
                  "name": "group"
              },
              {
                  "id": "guitar-acoustic",
                  "name": "guitar  acoustic"
              },
              {
                  "id": "guitar-electric",
                  "name": "guitar  electric"
              },
              {
                  "id": "guitar-pick",
                  "name": "guitar  pick"
              },
              {
                  "id": "guitar-pick-outline",
                  "name": "guitar  pick  outline"
              },
              {
                  "id": "guy-fawkes-mask",
                  "name": "guy  fawkes  mask"
              },
              {
                  "id": "gymnastics",
                  "name": "gymnastics"
              },
              {
                  "id": "hail",
                  "name": "hail"
              },
              {
                  "id": "hair-dryer",
                  "name": "hair  dryer"
              },
              {
                  "id": "hair-dryer-outline",
                  "name": "hair  dryer  outline"
              },
              {
                  "id": "halloween",
                  "name": "halloween"
              },
              {
                  "id": "hamburger",
                  "name": "hamburger"
              },
              {
                  "id": "hamburger-check",
                  "name": "hamburger  check"
              },
              {
                  "id": "hamburger-minus",
                  "name": "hamburger  minus"
              },
              {
                  "id": "hamburger-off",
                  "name": "hamburger  off"
              },
              {
                  "id": "hamburger-plus",
                  "name": "hamburger  plus"
              },
              {
                  "id": "hamburger-remove",
                  "name": "hamburger  remove"
              },
              {
                  "id": "hammer",
                  "name": "hammer"
              },
              {
                  "id": "hammer-screwdriver",
                  "name": "hammer  screwdriver"
              },
              {
                  "id": "hammer-sickle",
                  "name": "hammer  sickle"
              },
              {
                  "id": "hammer-wrench",
                  "name": "hammer  wrench"
              },
              {
                  "id": "hand-back-left",
                  "name": "hand  back  left"
              },
              {
                  "id": "hand-back-left-off",
                  "name": "hand  back  left  off"
              },
              {
                  "id": "hand-back-left-off-outline",
                  "name": "hand  back  left  off  outline"
              },
              {
                  "id": "hand-back-left-outline",
                  "name": "hand  back  left  outline"
              },
              {
                  "id": "hand-back-right",
                  "name": "hand  back  right"
              },
              {
                  "id": "hand-back-right-off",
                  "name": "hand  back  right  off"
              },
              {
                  "id": "hand-back-right-off-outline",
                  "name": "hand  back  right  off  outline"
              },
              {
                  "id": "hand-back-right-outline",
                  "name": "hand  back  right  outline"
              },
              {
                  "id": "hand-clap",
                  "name": "hand  clap"
              },
              {
                  "id": "hand-clap-off",
                  "name": "hand  clap  off"
              },
              {
                  "id": "hand-coin",
                  "name": "hand  coin"
              },
              {
                  "id": "hand-coin-outline",
                  "name": "hand  coin  outline"
              },
              {
                  "id": "hand-cycle",
                  "name": "hand  cycle"
              },
              {
                  "id": "hand-extended",
                  "name": "hand  extended"
              },
              {
                  "id": "hand-extended-outline",
                  "name": "hand  extended  outline"
              },
              {
                  "id": "hand-front-left",
                  "name": "hand  front  left"
              },
              {
                  "id": "hand-front-left-outline",
                  "name": "hand  front  left  outline"
              },
              {
                  "id": "hand-front-right",
                  "name": "hand  front  right"
              },
              {
                  "id": "hand-front-right-outline",
                  "name": "hand  front  right  outline"
              },
              {
                  "id": "hand-heart",
                  "name": "hand  heart"
              },
              {
                  "id": "hand-heart-outline",
                  "name": "hand  heart  outline"
              },
              {
                  "id": "hand-okay",
                  "name": "hand  okay"
              },
              {
                  "id": "hand-peace",
                  "name": "hand  peace"
              },
              {
                  "id": "handball",
                  "name": "handball"
              },
              {
                  "id": "handcuffs",
                  "name": "handcuffs"
              },
              {
                  "id": "hands-pray",
                  "name": "hands  pray"
              },
              {
                  "id": "handshake",
                  "name": "handshake"
              },
              {
                  "id": "handshake-outline",
                  "name": "handshake  outline"
              },
              {
                  "id": "hanger",
                  "name": "hanger"
              },
              {
                  "id": "hard-hat",
                  "name": "hard  hat"
              },
              {
                  "id": "harddisk",
                  "name": "harddisk"
              },
              {
                  "id": "harddisk-plus",
                  "name": "harddisk  plus"
              },
              {
                  "id": "harddisk-remove",
                  "name": "harddisk  remove"
              },
              {
                  "id": "hat-fedora",
                  "name": "hat  fedora"
              },
              {
                  "id": "hazard-lights",
                  "name": "hazard  lights"
              },
              {
                  "id": "hdmi-port",
                  "name": "hdmi  port"
              },
              {
                  "id": "hdr",
                  "name": "hdr"
              },
              {
                  "id": "hdr-off",
                  "name": "hdr  off"
              },
              {
                  "id": "head",
                  "name": "head"
              },
              {
                  "id": "head-alert",
                  "name": "head  alert"
              },
              {
                  "id": "head-alert-outline",
                  "name": "head  alert  outline"
              },
              {
                  "id": "head-check",
                  "name": "head  check"
              },
              {
                  "id": "head-check-outline",
                  "name": "head  check  outline"
              },
              {
                  "id": "head-cog",
                  "name": "head  cog"
              },
              {
                  "id": "head-cog-outline",
                  "name": "head  cog  outline"
              },
              {
                  "id": "head-dots-horizontal",
                  "name": "head  dots  horizontal"
              },
              {
                  "id": "head-dots-horizontal-outline",
                  "name": "head  dots  horizontal  outline"
              },
              {
                  "id": "head-flash",
                  "name": "head  flash"
              },
              {
                  "id": "head-flash-outline",
                  "name": "head  flash  outline"
              },
              {
                  "id": "head-heart",
                  "name": "head  heart"
              },
              {
                  "id": "head-heart-outline",
                  "name": "head  heart  outline"
              },
              {
                  "id": "head-lightbulb",
                  "name": "head  lightbulb"
              },
              {
                  "id": "head-lightbulb-outline",
                  "name": "head  lightbulb  outline"
              },
              {
                  "id": "head-minus",
                  "name": "head  minus"
              },
              {
                  "id": "head-minus-outline",
                  "name": "head  minus  outline"
              },
              {
                  "id": "head-outline",
                  "name": "head  outline"
              },
              {
                  "id": "head-plus",
                  "name": "head  plus"
              },
              {
                  "id": "head-plus-outline",
                  "name": "head  plus  outline"
              },
              {
                  "id": "head-question",
                  "name": "head  question"
              },
              {
                  "id": "head-question-outline",
                  "name": "head  question  outline"
              },
              {
                  "id": "head-remove",
                  "name": "head  remove"
              },
              {
                  "id": "head-remove-outline",
                  "name": "head  remove  outline"
              },
              {
                  "id": "head-snowflake",
                  "name": "head  snowflake"
              },
              {
                  "id": "head-snowflake-outline",
                  "name": "head  snowflake  outline"
              },
              {
                  "id": "head-sync",
                  "name": "head  sync"
              },
              {
                  "id": "head-sync-outline",
                  "name": "head  sync  outline"
              },
              {
                  "id": "headphones",
                  "name": "headphones"
              },
              {
                  "id": "headphones-bluetooth",
                  "name": "headphones  bluetooth"
              },
              {
                  "id": "headphones-box",
                  "name": "headphones  box"
              },
              {
                  "id": "headphones-off",
                  "name": "headphones  off"
              },
              {
                  "id": "headphones-settings",
                  "name": "headphones  settings"
              },
              {
                  "id": "headset",
                  "name": "headset"
              },
              {
                  "id": "headset-dock",
                  "name": "headset  dock"
              },
              {
                  "id": "headset-off",
                  "name": "headset  off"
              },
              {
                  "id": "heart",
                  "name": "heart"
              },
              {
                  "id": "heart-box",
                  "name": "heart  box"
              },
              {
                  "id": "heart-box-outline",
                  "name": "heart  box  outline"
              },
              {
                  "id": "heart-broken",
                  "name": "heart  broken"
              },
              {
                  "id": "heart-broken-outline",
                  "name": "heart  broken  outline"
              },
              {
                  "id": "heart-circle",
                  "name": "heart  circle"
              },
              {
                  "id": "heart-circle-outline",
                  "name": "heart  circle  outline"
              },
              {
                  "id": "heart-cog",
                  "name": "heart  cog"
              },
              {
                  "id": "heart-cog-outline",
                  "name": "heart  cog  outline"
              },
              {
                  "id": "heart-flash",
                  "name": "heart  flash"
              },
              {
                  "id": "heart-half",
                  "name": "heart  half"
              },
              {
                  "id": "heart-half-full",
                  "name": "heart  half  full"
              },
              {
                  "id": "heart-half-outline",
                  "name": "heart  half  outline"
              },
              {
                  "id": "heart-minus",
                  "name": "heart  minus"
              },
              {
                  "id": "heart-minus-outline",
                  "name": "heart  minus  outline"
              },
              {
                  "id": "heart-multiple",
                  "name": "heart  multiple"
              },
              {
                  "id": "heart-multiple-outline",
                  "name": "heart  multiple  outline"
              },
              {
                  "id": "heart-off",
                  "name": "heart  off"
              },
              {
                  "id": "heart-off-outline",
                  "name": "heart  off  outline"
              },
              {
                  "id": "heart-outline",
                  "name": "heart  outline"
              },
              {
                  "id": "heart-plus",
                  "name": "heart  plus"
              },
              {
                  "id": "heart-plus-outline",
                  "name": "heart  plus  outline"
              },
              {
                  "id": "heart-pulse",
                  "name": "heart  pulse"
              },
              {
                  "id": "heart-remove",
                  "name": "heart  remove"
              },
              {
                  "id": "heart-remove-outline",
                  "name": "heart  remove  outline"
              },
              {
                  "id": "heart-settings",
                  "name": "heart  settings"
              },
              {
                  "id": "heart-settings-outline",
                  "name": "heart  settings  outline"
              },
              {
                  "id": "heat-pump",
                  "name": "heat  pump"
              },
              {
                  "id": "heat-pump-outline",
                  "name": "heat  pump  outline"
              },
              {
                  "id": "heat-wave",
                  "name": "heat  wave"
              },
              {
                  "id": "heating-coil",
                  "name": "heating  coil"
              },
              {
                  "id": "helicopter",
                  "name": "helicopter"
              },
              {
                  "id": "help",
                  "name": "help"
              },
              {
                  "id": "help-box",
                  "name": "help  box"
              },
              {
                  "id": "help-box-multiple",
                  "name": "help  box  multiple"
              },
              {
                  "id": "help-box-multiple-outline",
                  "name": "help  box  multiple  outline"
              },
              {
                  "id": "help-box-outline",
                  "name": "help  box  outline"
              },
              {
                  "id": "help-circle",
                  "name": "help  circle"
              },
              {
                  "id": "help-circle-outline",
                  "name": "help  circle  outline"
              },
              {
                  "id": "help-network",
                  "name": "help  network"
              },
              {
                  "id": "help-network-outline",
                  "name": "help  network  outline"
              },
              {
                  "id": "help-rhombus",
                  "name": "help  rhombus"
              },
              {
                  "id": "help-rhombus-outline",
                  "name": "help  rhombus  outline"
              },
              {
                  "id": "hexadecimal",
                  "name": "hexadecimal"
              },
              {
                  "id": "hexagon",
                  "name": "hexagon"
              },
              {
                  "id": "hexagon-multiple",
                  "name": "hexagon  multiple"
              },
              {
                  "id": "hexagon-multiple-outline",
                  "name": "hexagon  multiple  outline"
              },
              {
                  "id": "hexagon-outline",
                  "name": "hexagon  outline"
              },
              {
                  "id": "hexagon-slice-1",
                  "name": "hexagon  slice  1"
              },
              {
                  "id": "hexagon-slice-2",
                  "name": "hexagon  slice  2"
              },
              {
                  "id": "hexagon-slice-3",
                  "name": "hexagon  slice  3"
              },
              {
                  "id": "hexagon-slice-4",
                  "name": "hexagon  slice  4"
              },
              {
                  "id": "hexagon-slice-5",
                  "name": "hexagon  slice  5"
              },
              {
                  "id": "hexagon-slice-6",
                  "name": "hexagon  slice  6"
              },
              {
                  "id": "hexagram",
                  "name": "hexagram"
              },
              {
                  "id": "hexagram-outline",
                  "name": "hexagram  outline"
              },
              {
                  "id": "high-definition",
                  "name": "high  definition"
              },
              {
                  "id": "high-definition-box",
                  "name": "high  definition  box"
              },
              {
                  "id": "highway",
                  "name": "highway"
              },
              {
                  "id": "hiking",
                  "name": "hiking"
              },
              {
                  "id": "history",
                  "name": "history"
              },
              {
                  "id": "hockey-puck",
                  "name": "hockey  puck"
              },
              {
                  "id": "hockey-sticks",
                  "name": "hockey  sticks"
              },
              {
                  "id": "hololens",
                  "name": "hololens"
              },
              {
                  "id": "home",
                  "name": "home"
              },
              {
                  "id": "home-account",
                  "name": "home  account"
              },
              {
                  "id": "home-alert",
                  "name": "home  alert"
              },
              {
                  "id": "home-alert-outline",
                  "name": "home  alert  outline"
              },
              {
                  "id": "home-analytics",
                  "name": "home  analytics"
              },
              {
                  "id": "home-assistant",
                  "name": "home  assistant"
              },
              {
                  "id": "home-automation",
                  "name": "home  automation"
              },
              {
                  "id": "home-battery",
                  "name": "home  battery"
              },
              {
                  "id": "home-battery-outline",
                  "name": "home  battery  outline"
              },
              {
                  "id": "home-circle",
                  "name": "home  circle"
              },
              {
                  "id": "home-circle-outline",
                  "name": "home  circle  outline"
              },
              {
                  "id": "home-city",
                  "name": "home  city"
              },
              {
                  "id": "home-city-outline",
                  "name": "home  city  outline"
              },
              {
                  "id": "home-clock",
                  "name": "home  clock"
              },
              {
                  "id": "home-clock-outline",
                  "name": "home  clock  outline"
              },
              {
                  "id": "home-edit",
                  "name": "home  edit"
              },
              {
                  "id": "home-edit-outline",
                  "name": "home  edit  outline"
              },
              {
                  "id": "home-export-outline",
                  "name": "home  export  outline"
              },
              {
                  "id": "home-flood",
                  "name": "home  flood"
              },
              {
                  "id": "home-floor-0",
                  "name": "home  floor  0"
              },
              {
                  "id": "home-floor-1",
                  "name": "home  floor  1"
              },
              {
                  "id": "home-floor-2",
                  "name": "home  floor  2"
              },
              {
                  "id": "home-floor-3",
                  "name": "home  floor  3"
              },
              {
                  "id": "home-floor-a",
                  "name": "home  floor  a"
              },
              {
                  "id": "home-floor-b",
                  "name": "home  floor  b"
              },
              {
                  "id": "home-floor-g",
                  "name": "home  floor  g"
              },
              {
                  "id": "home-floor-l",
                  "name": "home  floor  l"
              },
              {
                  "id": "home-floor-negative-1",
                  "name": "home  floor  negative  1"
              },
              {
                  "id": "home-group",
                  "name": "home  group"
              },
              {
                  "id": "home-group-minus",
                  "name": "home  group  minus"
              },
              {
                  "id": "home-group-plus",
                  "name": "home  group  plus"
              },
              {
                  "id": "home-group-remove",
                  "name": "home  group  remove"
              },
              {
                  "id": "home-heart",
                  "name": "home  heart"
              },
              {
                  "id": "home-import-outline",
                  "name": "home  import  outline"
              },
              {
                  "id": "home-lightbulb",
                  "name": "home  lightbulb"
              },
              {
                  "id": "home-lightbulb-outline",
                  "name": "home  lightbulb  outline"
              },
              {
                  "id": "home-lightning-bolt",
                  "name": "home  lightning  bolt"
              },
              {
                  "id": "home-lightning-bolt-outline",
                  "name": "home  lightning  bolt  outline"
              },
              {
                  "id": "home-lock",
                  "name": "home  lock"
              },
              {
                  "id": "home-lock-open",
                  "name": "home  lock  open"
              },
              {
                  "id": "home-map-marker",
                  "name": "home  map  marker"
              },
              {
                  "id": "home-minus",
                  "name": "home  minus"
              },
              {
                  "id": "home-minus-outline",
                  "name": "home  minus  outline"
              },
              {
                  "id": "home-modern",
                  "name": "home  modern"
              },
              {
                  "id": "home-off",
                  "name": "home  off"
              },
              {
                  "id": "home-off-outline",
                  "name": "home  off  outline"
              },
              {
                  "id": "home-outline",
                  "name": "home  outline"
              },
              {
                  "id": "home-percent",
                  "name": "home  percent"
              },
              {
                  "id": "home-percent-outline",
                  "name": "home  percent  outline"
              },
              {
                  "id": "home-plus",
                  "name": "home  plus"
              },
              {
                  "id": "home-plus-outline",
                  "name": "home  plus  outline"
              },
              {
                  "id": "home-remove",
                  "name": "home  remove"
              },
              {
                  "id": "home-remove-outline",
                  "name": "home  remove  outline"
              },
              {
                  "id": "home-roof",
                  "name": "home  roof"
              },
              {
                  "id": "home-search",
                  "name": "home  search"
              },
              {
                  "id": "home-search-outline",
                  "name": "home  search  outline"
              },
              {
                  "id": "home-silo",
                  "name": "home  silo"
              },
              {
                  "id": "home-silo-outline",
                  "name": "home  silo  outline"
              },
              {
                  "id": "home-sound-in",
                  "name": "home  sound  in"
              },
              {
                  "id": "home-sound-in-outline",
                  "name": "home  sound  in  outline"
              },
              {
                  "id": "home-sound-out",
                  "name": "home  sound  out"
              },
              {
                  "id": "home-sound-out-outline",
                  "name": "home  sound  out  outline"
              },
              {
                  "id": "home-switch",
                  "name": "home  switch"
              },
              {
                  "id": "home-switch-outline",
                  "name": "home  switch  outline"
              },
              {
                  "id": "home-thermometer",
                  "name": "home  thermometer"
              },
              {
                  "id": "home-thermometer-outline",
                  "name": "home  thermometer  outline"
              },
              {
                  "id": "home-variant",
                  "name": "home  variant"
              },
              {
                  "id": "home-variant-outline",
                  "name": "home  variant  outline"
              },
              {
                  "id": "hook",
                  "name": "hook"
              },
              {
                  "id": "hook-off",
                  "name": "hook  off"
              },
              {
                  "id": "hoop-house",
                  "name": "hoop  house"
              },
              {
                  "id": "hops",
                  "name": "hops"
              },
              {
                  "id": "horizontal-rotate-clockwise",
                  "name": "horizontal  rotate  clockwise"
              },
              {
                  "id": "horizontal-rotate-counterclockwise",
                  "name": "horizontal  rotate  counterclockwise"
              },
              {
                  "id": "horse",
                  "name": "horse"
              },
              {
                  "id": "horse-human",
                  "name": "horse  human"
              },
              {
                  "id": "horse-variant",
                  "name": "horse  variant"
              },
              {
                  "id": "horse-variant-fast",
                  "name": "horse  variant  fast"
              },
              {
                  "id": "horseshoe",
                  "name": "horseshoe"
              },
              {
                  "id": "hospital",
                  "name": "hospital"
              },
              {
                  "id": "hospital-box",
                  "name": "hospital  box"
              },
              {
                  "id": "hospital-box-outline",
                  "name": "hospital  box  outline"
              },
              {
                  "id": "hospital-building",
                  "name": "hospital  building"
              },
              {
                  "id": "hospital-marker",
                  "name": "hospital  marker"
              },
              {
                  "id": "hot-tub",
                  "name": "hot  tub"
              },
              {
                  "id": "hours-24",
                  "name": "hours  24"
              },
              {
                  "id": "hubspot",
                  "name": "hubspot"
              },
              {
                  "id": "hulu",
                  "name": "hulu"
              },
              {
                  "id": "human",
                  "name": "human"
              },
              {
                  "id": "human-baby-changing-table",
                  "name": "human  baby  changing  table"
              },
              {
                  "id": "human-cane",
                  "name": "human  cane"
              },
              {
                  "id": "human-capacity-decrease",
                  "name": "human  capacity  decrease"
              },
              {
                  "id": "human-capacity-increase",
                  "name": "human  capacity  increase"
              },
              {
                  "id": "human-child",
                  "name": "human  child"
              },
              {
                  "id": "human-dolly",
                  "name": "human  dolly"
              },
              {
                  "id": "human-edit",
                  "name": "human  edit"
              },
              {
                  "id": "human-female",
                  "name": "human  female"
              },
              {
                  "id": "human-female-boy",
                  "name": "human  female  boy"
              },
              {
                  "id": "human-female-dance",
                  "name": "human  female  dance"
              },
              {
                  "id": "human-female-female",
                  "name": "human  female  female"
              },
              {
                  "id": "human-female-girl",
                  "name": "human  female  girl"
              },
              {
                  "id": "human-greeting",
                  "name": "human  greeting"
              },
              {
                  "id": "human-greeting-proximity",
                  "name": "human  greeting  proximity"
              },
              {
                  "id": "human-greeting-variant",
                  "name": "human  greeting  variant"
              },
              {
                  "id": "human-handsdown",
                  "name": "human  handsdown"
              },
              {
                  "id": "human-handsup",
                  "name": "human  handsup"
              },
              {
                  "id": "human-male",
                  "name": "human  male"
              },
              {
                  "id": "human-male-board",
                  "name": "human  male  board"
              },
              {
                  "id": "human-male-board-poll",
                  "name": "human  male  board  poll"
              },
              {
                  "id": "human-male-boy",
                  "name": "human  male  boy"
              },
              {
                  "id": "human-male-child",
                  "name": "human  male  child"
              },
              {
                  "id": "human-male-female",
                  "name": "human  male  female"
              },
              {
                  "id": "human-male-female-child",
                  "name": "human  male  female  child"
              },
              {
                  "id": "human-male-girl",
                  "name": "human  male  girl"
              },
              {
                  "id": "human-male-height",
                  "name": "human  male  height"
              },
              {
                  "id": "human-male-height-variant",
                  "name": "human  male  height  variant"
              },
              {
                  "id": "human-male-male",
                  "name": "human  male  male"
              },
              {
                  "id": "human-non-binary",
                  "name": "human  non  binary"
              },
              {
                  "id": "human-pregnant",
                  "name": "human  pregnant"
              },
              {
                  "id": "human-queue",
                  "name": "human  queue"
              },
              {
                  "id": "human-scooter",
                  "name": "human  scooter"
              },
              {
                  "id": "human-walker",
                  "name": "human  walker"
              },
              {
                  "id": "human-wheelchair",
                  "name": "human  wheelchair"
              },
              {
                  "id": "human-white-cane",
                  "name": "human  white  cane"
              },
              {
                  "id": "humble-bundle",
                  "name": "humble  bundle"
              },
              {
                  "id": "hvac",
                  "name": "hvac"
              },
              {
                  "id": "hvac-off",
                  "name": "hvac  off"
              },
              {
                  "id": "hydraulic-oil-level",
                  "name": "hydraulic  oil  level"
              },
              {
                  "id": "hydraulic-oil-temperature",
                  "name": "hydraulic  oil  temperature"
              },
              {
                  "id": "hydro-power",
                  "name": "hydro  power"
              },
              {
                  "id": "hydrogen-station",
                  "name": "hydrogen  station"
              },
              {
                  "id": "ice-cream",
                  "name": "ice  cream"
              },
              {
                  "id": "ice-cream-off",
                  "name": "ice  cream  off"
              },
              {
                  "id": "ice-pop",
                  "name": "ice  pop"
              },
              {
                  "id": "id-card",
                  "name": "id  card"
              },
              {
                  "id": "identifier",
                  "name": "identifier"
              },
              {
                  "id": "ideogram-cjk",
                  "name": "ideogram  cjk"
              },
              {
                  "id": "ideogram-cjk-variant",
                  "name": "ideogram  cjk  variant"
              },
              {
                  "id": "image",
                  "name": "image"
              },
              {
                  "id": "image-album",
                  "name": "image  album"
              },
              {
                  "id": "image-area",
                  "name": "image  area"
              },
              {
                  "id": "image-area-close",
                  "name": "image  area  close"
              },
              {
                  "id": "image-auto-adjust",
                  "name": "image  auto  adjust"
              },
              {
                  "id": "image-broken",
                  "name": "image  broken"
              },
              {
                  "id": "image-broken-variant",
                  "name": "image  broken  variant"
              },
              {
                  "id": "image-check",
                  "name": "image  check"
              },
              {
                  "id": "image-check-outline",
                  "name": "image  check  outline"
              },
              {
                  "id": "image-edit",
                  "name": "image  edit"
              },
              {
                  "id": "image-edit-outline",
                  "name": "image  edit  outline"
              },
              {
                  "id": "image-filter-black-white",
                  "name": "image  filter  black  white"
              },
              {
                  "id": "image-filter-center-focus",
                  "name": "image  filter  center  focus"
              },
              {
                  "id": "image-filter-center-focus-strong",
                  "name": "image  filter  center  focus  strong"
              },
              {
                  "id": "image-filter-center-focus-strong-outline",
                  "name": "image  filter  center  focus  strong  outline"
              },
              {
                  "id": "image-filter-center-focus-weak",
                  "name": "image  filter  center  focus  weak"
              },
              {
                  "id": "image-filter-drama",
                  "name": "image  filter  drama"
              },
              {
                  "id": "image-filter-drama-outline",
                  "name": "image  filter  drama  outline"
              },
              {
                  "id": "image-filter-frames",
                  "name": "image  filter  frames"
              },
              {
                  "id": "image-filter-hdr",
                  "name": "image  filter  hdr"
              },
              {
                  "id": "image-filter-hdr-outline",
                  "name": "image  filter  hdr  outline"
              },
              {
                  "id": "image-filter-none",
                  "name": "image  filter  none"
              },
              {
                  "id": "image-filter-tilt-shift",
                  "name": "image  filter  tilt  shift"
              },
              {
                  "id": "image-filter-vintage",
                  "name": "image  filter  vintage"
              },
              {
                  "id": "image-frame",
                  "name": "image  frame"
              },
              {
                  "id": "image-lock",
                  "name": "image  lock"
              },
              {
                  "id": "image-lock-outline",
                  "name": "image  lock  outline"
              },
              {
                  "id": "image-marker",
                  "name": "image  marker"
              },
              {
                  "id": "image-marker-outline",
                  "name": "image  marker  outline"
              },
              {
                  "id": "image-minus",
                  "name": "image  minus"
              },
              {
                  "id": "image-minus-outline",
                  "name": "image  minus  outline"
              },
              {
                  "id": "image-move",
                  "name": "image  move"
              },
              {
                  "id": "image-multiple",
                  "name": "image  multiple"
              },
              {
                  "id": "image-multiple-outline",
                  "name": "image  multiple  outline"
              },
              {
                  "id": "image-off",
                  "name": "image  off"
              },
              {
                  "id": "image-off-outline",
                  "name": "image  off  outline"
              },
              {
                  "id": "image-outline",
                  "name": "image  outline"
              },
              {
                  "id": "image-plus",
                  "name": "image  plus"
              },
              {
                  "id": "image-plus-outline",
                  "name": "image  plus  outline"
              },
              {
                  "id": "image-refresh",
                  "name": "image  refresh"
              },
              {
                  "id": "image-refresh-outline",
                  "name": "image  refresh  outline"
              },
              {
                  "id": "image-remove",
                  "name": "image  remove"
              },
              {
                  "id": "image-remove-outline",
                  "name": "image  remove  outline"
              },
              {
                  "id": "image-search",
                  "name": "image  search"
              },
              {
                  "id": "image-search-outline",
                  "name": "image  search  outline"
              },
              {
                  "id": "image-size-select-actual",
                  "name": "image  size  select  actual"
              },
              {
                  "id": "image-size-select-large",
                  "name": "image  size  select  large"
              },
              {
                  "id": "image-size-select-small",
                  "name": "image  size  select  small"
              },
              {
                  "id": "image-sync",
                  "name": "image  sync"
              },
              {
                  "id": "image-sync-outline",
                  "name": "image  sync  outline"
              },
              {
                  "id": "image-text",
                  "name": "image  text"
              },
              {
                  "id": "import",
                  "name": "import"
              },
              {
                  "id": "inbox",
                  "name": "inbox"
              },
              {
                  "id": "inbox-arrow-down",
                  "name": "inbox  arrow  down"
              },
              {
                  "id": "inbox-arrow-down-outline",
                  "name": "inbox  arrow  down  outline"
              },
              {
                  "id": "inbox-arrow-up",
                  "name": "inbox  arrow  up"
              },
              {
                  "id": "inbox-arrow-up-outline",
                  "name": "inbox  arrow  up  outline"
              },
              {
                  "id": "inbox-full",
                  "name": "inbox  full"
              },
              {
                  "id": "inbox-full-outline",
                  "name": "inbox  full  outline"
              },
              {
                  "id": "inbox-multiple",
                  "name": "inbox  multiple"
              },
              {
                  "id": "inbox-multiple-outline",
                  "name": "inbox  multiple  outline"
              },
              {
                  "id": "inbox-outline",
                  "name": "inbox  outline"
              },
              {
                  "id": "inbox-remove",
                  "name": "inbox  remove"
              },
              {
                  "id": "inbox-remove-outline",
                  "name": "inbox  remove  outline"
              },
              {
                  "id": "incognito",
                  "name": "incognito"
              },
              {
                  "id": "incognito-circle",
                  "name": "incognito  circle"
              },
              {
                  "id": "incognito-circle-off",
                  "name": "incognito  circle  off"
              },
              {
                  "id": "incognito-off",
                  "name": "incognito  off"
              },
              {
                  "id": "induction",
                  "name": "induction"
              },
              {
                  "id": "infinity",
                  "name": "infinity"
              },
              {
                  "id": "information",
                  "name": "information"
              },
              {
                  "id": "information-box",
                  "name": "information  box"
              },
              {
                  "id": "information-box-outline",
                  "name": "information  box  outline"
              },
              {
                  "id": "information-off",
                  "name": "information  off"
              },
              {
                  "id": "information-off-outline",
                  "name": "information  off  outline"
              },
              {
                  "id": "information-outline",
                  "name": "information  outline"
              },
              {
                  "id": "information-slab-box",
                  "name": "information  slab  box"
              },
              {
                  "id": "information-slab-box-outline",
                  "name": "information  slab  box  outline"
              },
              {
                  "id": "information-slab-circle",
                  "name": "information  slab  circle"
              },
              {
                  "id": "information-slab-circle-outline",
                  "name": "information  slab  circle  outline"
              },
              {
                  "id": "information-slab-symbol",
                  "name": "information  slab  symbol"
              },
              {
                  "id": "information-symbol",
                  "name": "information  symbol"
              },
              {
                  "id": "information-variant",
                  "name": "information  variant"
              },
              {
                  "id": "information-variant-box",
                  "name": "information  variant  box"
              },
              {
                  "id": "information-variant-box-outline",
                  "name": "information  variant  box  outline"
              },
              {
                  "id": "information-variant-circle",
                  "name": "information  variant  circle"
              },
              {
                  "id": "information-variant-circle-outline",
                  "name": "information  variant  circle  outline"
              },
              {
                  "id": "instagram",
                  "name": "instagram"
              },
              {
                  "id": "instrument-triangle",
                  "name": "instrument  triangle"
              },
              {
                  "id": "integrated-circuit-chip",
                  "name": "integrated  circuit  chip"
              },
              {
                  "id": "invert-colors",
                  "name": "invert  colors"
              },
              {
                  "id": "invert-colors-off",
                  "name": "invert  colors  off"
              },
              {
                  "id": "iobroker",
                  "name": "iobroker"
              },
              {
                  "id": "ip",
                  "name": "ip"
              },
              {
                  "id": "ip-network",
                  "name": "ip  network"
              },
              {
                  "id": "ip-network-outline",
                  "name": "ip  network  outline"
              },
              {
                  "id": "ip-outline",
                  "name": "ip  outline"
              },
              {
                  "id": "ipod",
                  "name": "ipod"
              },
              {
                  "id": "iron",
                  "name": "iron"
              },
              {
                  "id": "iron-board",
                  "name": "iron  board"
              },
              {
                  "id": "iron-outline",
                  "name": "iron  outline"
              },
              {
                  "id": "island",
                  "name": "island"
              },
              {
                  "id": "iv-bag",
                  "name": "iv  bag"
              },
              {
                  "id": "jabber",
                  "name": "jabber"
              },
              {
                  "id": "jeepney",
                  "name": "jeepney"
              },
              {
                  "id": "jellyfish",
                  "name": "jellyfish"
              },
              {
                  "id": "jellyfish-outline",
                  "name": "jellyfish  outline"
              },
              {
                  "id": "jira",
                  "name": "jira"
              },
              {
                  "id": "jquery",
                  "name": "jquery"
              },
              {
                  "id": "jsfiddle",
                  "name": "jsfiddle"
              },
              {
                  "id": "jump-rope",
                  "name": "jump  rope"
              },
              {
                  "id": "kabaddi",
                  "name": "kabaddi"
              },
              {
                  "id": "kangaroo",
                  "name": "kangaroo"
              },
              {
                  "id": "karate",
                  "name": "karate"
              },
              {
                  "id": "kayaking",
                  "name": "kayaking"
              },
              {
                  "id": "keg",
                  "name": "keg"
              },
              {
                  "id": "kettle",
                  "name": "kettle"
              },
              {
                  "id": "kettle-alert",
                  "name": "kettle  alert"
              },
              {
                  "id": "kettle-alert-outline",
                  "name": "kettle  alert  outline"
              },
              {
                  "id": "kettle-off",
                  "name": "kettle  off"
              },
              {
                  "id": "kettle-off-outline",
                  "name": "kettle  off  outline"
              },
              {
                  "id": "kettle-outline",
                  "name": "kettle  outline"
              },
              {
                  "id": "kettle-pour-over",
                  "name": "kettle  pour  over"
              },
              {
                  "id": "kettle-steam",
                  "name": "kettle  steam"
              },
              {
                  "id": "kettle-steam-outline",
                  "name": "kettle  steam  outline"
              },
              {
                  "id": "kettlebell",
                  "name": "kettlebell"
              },
              {
                  "id": "id",
                  "name": "id"
              },
              {
                  "id": "key-alert",
                  "name": "key  alert"
              },
              {
                  "id": "key-alert-outline",
                  "name": "key  alert  outline"
              },
              {
                  "id": "key-arrow-right",
                  "name": "key  arrow  right"
              },
              {
                  "id": "key-chain",
                  "name": "key  chain"
              },
              {
                  "id": "key-chain-variant",
                  "name": "key  chain  variant"
              },
              {
                  "id": "key-change",
                  "name": "key  change"
              },
              {
                  "id": "key-link",
                  "name": "key  link"
              },
              {
                  "id": "key-minus",
                  "name": "key  minus"
              },
              {
                  "id": "key-outline",
                  "name": "key  outline"
              },
              {
                  "id": "key-plus",
                  "name": "key  plus"
              },
              {
                  "id": "key-remove",
                  "name": "key  remove"
              },
              {
                  "id": "key-star",
                  "name": "key  star"
              },
              {
                  "id": "key-variant",
                  "name": "key  variant"
              },
              {
                  "id": "key-wireless",
                  "name": "key  wireless"
              },
              {
                  "id": "keyboard",
                  "name": "keyboard"
              },
              {
                  "id": "keyboard-backspace",
                  "name": "keyboard  backspace"
              },
              {
                  "id": "keyboard-caps",
                  "name": "keyboard  caps"
              },
              {
                  "id": "keyboard-close",
                  "name": "keyboard  close"
              },
              {
                  "id": "keyboard-close-outline",
                  "name": "keyboard  close  outline"
              },
              {
                  "id": "keyboard-esc",
                  "name": "keyboard  esc"
              },
              {
                  "id": "keyboard-f1",
                  "name": "keyboard  f1"
              },
              {
                  "id": "keyboard-f10",
                  "name": "keyboard  f10"
              },
              {
                  "id": "keyboard-f11",
                  "name": "keyboard  f11"
              },
              {
                  "id": "keyboard-f12",
                  "name": "keyboard  f12"
              },
              {
                  "id": "keyboard-f2",
                  "name": "keyboard  f2"
              },
              {
                  "id": "keyboard-f3",
                  "name": "keyboard  f3"
              },
              {
                  "id": "keyboard-f4",
                  "name": "keyboard  f4"
              },
              {
                  "id": "keyboard-f5",
                  "name": "keyboard  f5"
              },
              {
                  "id": "keyboard-f6",
                  "name": "keyboard  f6"
              },
              {
                  "id": "keyboard-f7",
                  "name": "keyboard  f7"
              },
              {
                  "id": "keyboard-f8",
                  "name": "keyboard  f8"
              },
              {
                  "id": "keyboard-f9",
                  "name": "keyboard  f9"
              },
              {
                  "id": "keyboard-off",
                  "name": "keyboard  off"
              },
              {
                  "id": "keyboard-off-outline",
                  "name": "keyboard  off  outline"
              },
              {
                  "id": "keyboard-outline",
                  "name": "keyboard  outline"
              },
              {
                  "id": "keyboard-return",
                  "name": "keyboard  return"
              },
              {
                  "id": "keyboard-settings",
                  "name": "keyboard  settings"
              },
              {
                  "id": "keyboard-settings-outline",
                  "name": "keyboard  settings  outline"
              },
              {
                  "id": "keyboard-space",
                  "name": "keyboard  space"
              },
              {
                  "id": "keyboard-tab",
                  "name": "keyboard  tab"
              },
              {
                  "id": "keyboard-tab-reverse",
                  "name": "keyboard  tab  reverse"
              },
              {
                  "id": "keyboard-variant",
                  "name": "keyboard  variant"
              },
              {
                  "id": "khanda",
                  "name": "khanda"
              },
              {
                  "id": "kickstarter",
                  "name": "kickstarter"
              },
              {
                  "id": "kite",
                  "name": "kite"
              },
              {
                  "id": "kite-outline",
                  "name": "kite  outline"
              },
              {
                  "id": "kitesurfing",
                  "name": "kitesurfing"
              },
              {
                  "id": "klingon",
                  "name": "klingon"
              },
              {
                  "id": "knife",
                  "name": "knife"
              },
              {
                  "id": "knife-military",
                  "name": "knife  military"
              },
              {
                  "id": "knob",
                  "name": "knob"
              },
              {
                  "id": "koala",
                  "name": "koala"
              },
              {
                  "id": "kodi",
                  "name": "kodi"
              },
              {
                  "id": "kubernetes",
                  "name": "kubernetes"
              },
              {
                  "id": "label",
                  "name": "label"
              },
              {
                  "id": "label-multiple",
                  "name": "label  multiple"
              },
              {
                  "id": "label-multiple-outline",
                  "name": "label  multiple  outline"
              },
              {
                  "id": "label-off",
                  "name": "label  off"
              },
              {
                  "id": "label-off-outline",
                  "name": "label  off  outline"
              },
              {
                  "id": "label-outline",
                  "name": "label  outline"
              },
              {
                  "id": "label-percent",
                  "name": "label  percent"
              },
              {
                  "id": "label-percent-outline",
                  "name": "label  percent  outline"
              },
              {
                  "id": "label-variant",
                  "name": "label  variant"
              },
              {
                  "id": "label-variant-outline",
                  "name": "label  variant  outline"
              },
              {
                  "id": "ladder",
                  "name": "ladder"
              },
              {
                  "id": "ladybug",
                  "name": "ladybug"
              },
              {
                  "id": "lambda",
                  "name": "lambda"
              },
              {
                  "id": "lamp",
                  "name": "lamp"
              },
              {
                  "id": "lamp-outline",
                  "name": "lamp  outline"
              },
              {
                  "id": "lamps",
                  "name": "lamps"
              },
              {
                  "id": "lamps-outline",
                  "name": "lamps  outline"
              },
              {
                  "id": "lan",
                  "name": "lan"
              },
              {
                  "id": "lan-check",
                  "name": "lan  check"
              },
              {
                  "id": "lan-connect",
                  "name": "lan  connect"
              },
              {
                  "id": "lan-disconnect",
                  "name": "lan  disconnect"
              },
              {
                  "id": "lan-pending",
                  "name": "lan  pending"
              },
              {
                  "id": "land-fields",
                  "name": "land  fields"
              },
              {
                  "id": "land-plots",
                  "name": "land  plots"
              },
              {
                  "id": "land-plots-circle",
                  "name": "land  plots  circle"
              },
              {
                  "id": "land-plots-circle-variant",
                  "name": "land  plots  circle  variant"
              },
              {
                  "id": "land-plots-marker",
                  "name": "land  plots  marker"
              },
              {
                  "id": "land-rows-horizontal",
                  "name": "land  rows  horizontal"
              },
              {
                  "id": "land-rows-vertical",
                  "name": "land  rows  vertical"
              },
              {
                  "id": "landslide",
                  "name": "landslide"
              },
              {
                  "id": "landslide-outline",
                  "name": "landslide  outline"
              },
              {
                  "id": "language-c",
                  "name": "language  c"
              },
              {
                  "id": "language-cpp",
                  "name": "language  cpp"
              },
              {
                  "id": "language-csharp",
                  "name": "language  csharp"
              },
              {
                  "id": "language-css3",
                  "name": "language  css3"
              },
              {
                  "id": "language-fortran",
                  "name": "language  fortran"
              },
              {
                  "id": "language-go",
                  "name": "language  go"
              },
              {
                  "id": "language-haskell",
                  "name": "language  haskell"
              },
              {
                  "id": "language-html5",
                  "name": "language  html5"
              },
              {
                  "id": "language-java",
                  "name": "language  java"
              },
              {
                  "id": "language-javascript",
                  "name": "language  javascript"
              },
              {
                  "id": "language-kotlin",
                  "name": "language  kotlin"
              },
              {
                  "id": "language-lua",
                  "name": "language  lua"
              },
              {
                  "id": "language-markdown",
                  "name": "language  markdown"
              },
              {
                  "id": "language-markdown-outline",
                  "name": "language  markdown  outline"
              },
              {
                  "id": "language-php",
                  "name": "language  php"
              },
              {
                  "id": "language-python",
                  "name": "language  python"
              },
              {
                  "id": "language-r",
                  "name": "language  r"
              },
              {
                  "id": "language-ruby",
                  "name": "language  ruby"
              },
              {
                  "id": "language-ruby-on-rails",
                  "name": "language  ruby  on  rails"
              },
              {
                  "id": "language-rust",
                  "name": "language  rust"
              },
              {
                  "id": "language-swift",
                  "name": "language  swift"
              },
              {
                  "id": "language-typescript",
                  "name": "language  typescript"
              },
              {
                  "id": "language-xaml",
                  "name": "language  xaml"
              },
              {
                  "id": "laptop",
                  "name": "laptop"
              },
              {
                  "id": "laptop-account",
                  "name": "laptop  account"
              },
              {
                  "id": "laptop-off",
                  "name": "laptop  off"
              },
              {
                  "id": "laravel",
                  "name": "laravel"
              },
              {
                  "id": "laser-pointer",
                  "name": "laser  pointer"
              },
              {
                  "id": "lasso",
                  "name": "lasso"
              },
              {
                  "id": "lastpass",
                  "name": "lastpass"
              },
              {
                  "id": "latitude",
                  "name": "latitude"
              },
              {
                  "id": "launch",
                  "name": "launch"
              },
              {
                  "id": "lava-lamp",
                  "name": "lava  lamp"
              },
              {
                  "id": "layers",
                  "name": "layers"
              },
              {
                  "id": "layers-edit",
                  "name": "layers  edit"
              },
              {
                  "id": "layers-minus",
                  "name": "layers  minus"
              },
              {
                  "id": "layers-off",
                  "name": "layers  off"
              },
              {
                  "id": "layers-off-outline",
                  "name": "layers  off  outline"
              },
              {
                  "id": "layers-outline",
                  "name": "layers  outline"
              },
              {
                  "id": "layers-plus",
                  "name": "layers  plus"
              },
              {
                  "id": "layers-remove",
                  "name": "layers  remove"
              },
              {
                  "id": "layers-search",
                  "name": "layers  search"
              },
              {
                  "id": "layers-search-outline",
                  "name": "layers  search  outline"
              },
              {
                  "id": "layers-triple",
                  "name": "layers  triple"
              },
              {
                  "id": "layers-triple-outline",
                  "name": "layers  triple  outline"
              },
              {
                  "id": "lead-pencil",
                  "name": "lead  pencil"
              },
              {
                  "id": "leaf",
                  "name": "leaf"
              },
              {
                  "id": "leaf-circle",
                  "name": "leaf  circle"
              },
              {
                  "id": "leaf-circle-outline",
                  "name": "leaf  circle  outline"
              },
              {
                  "id": "leaf-maple",
                  "name": "leaf  maple"
              },
              {
                  "id": "leaf-maple-off",
                  "name": "leaf  maple  off"
              },
              {
                  "id": "leaf-off",
                  "name": "leaf  off"
              },
              {
                  "id": "light-recessed",
                  "name": "light  recessed"
              },
              {
                  "id": "light-switch",
                  "name": "light  switch"
              },
              {
                  "id": "light-switch-off",
                  "name": "light  switch  off"
              },
              {
                  "id": "lightbulb",
                  "name": "lightbulb"
              },
              {
                  "id": "lightbulb-alert",
                  "name": "lightbulb  alert"
              },
              {
                  "id": "lightbulb-alert-outline",
                  "name": "lightbulb  alert  outline"
              },
              {
                  "id": "lightbulb-auto",
                  "name": "lightbulb  auto"
              },
              {
                  "id": "lightbulb-auto-outline",
                  "name": "lightbulb  auto  outline"
              },
              {
                  "id": "lightbulb-cfl",
                  "name": "lightbulb  cfl"
              },
              {
                  "id": "lightbulb-cfl-off",
                  "name": "lightbulb  cfl  off"
              },
              {
                  "id": "lightbulb-cfl-spiral",
                  "name": "lightbulb  cfl  spiral"
              },
              {
                  "id": "lightbulb-cfl-spiral-off",
                  "name": "lightbulb  cfl  spiral  off"
              },
              {
                  "id": "lightbulb-fluorescent-tube",
                  "name": "lightbulb  fluorescent  tube"
              },
              {
                  "id": "lightbulb-fluorescent-tube-outline",
                  "name": "lightbulb  fluorescent  tube  outline"
              },
              {
                  "id": "lightbulb-group",
                  "name": "lightbulb  group"
              },
              {
                  "id": "lightbulb-group-off",
                  "name": "lightbulb  group  off"
              },
              {
                  "id": "lightbulb-group-off-outline",
                  "name": "lightbulb  group  off  outline"
              },
              {
                  "id": "lightbulb-group-outline",
                  "name": "lightbulb  group  outline"
              },
              {
                  "id": "lightbulb-multiple",
                  "name": "lightbulb  multiple"
              },
              {
                  "id": "lightbulb-multiple-off",
                  "name": "lightbulb  multiple  off"
              },
              {
                  "id": "lightbulb-multiple-off-outline",
                  "name": "lightbulb  multiple  off  outline"
              },
              {
                  "id": "lightbulb-multiple-outline",
                  "name": "lightbulb  multiple  outline"
              },
              {
                  "id": "lightbulb-night",
                  "name": "lightbulb  night"
              },
              {
                  "id": "lightbulb-night-outline",
                  "name": "lightbulb  night  outline"
              },
              {
                  "id": "lightbulb-off",
                  "name": "lightbulb  off"
              },
              {
                  "id": "lightbulb-off-outline",
                  "name": "lightbulb  off  outline"
              },
              {
                  "id": "lightbulb-on",
                  "name": "lightbulb  on"
              },
              {
                  "id": "lightbulb-on-10",
                  "name": "lightbulb  on  10"
              },
              {
                  "id": "lightbulb-on-20",
                  "name": "lightbulb  on  20"
              },
              {
                  "id": "lightbulb-on-30",
                  "name": "lightbulb  on  30"
              },
              {
                  "id": "lightbulb-on-40",
                  "name": "lightbulb  on  40"
              },
              {
                  "id": "lightbulb-on-50",
                  "name": "lightbulb  on  50"
              },
              {
                  "id": "lightbulb-on-60",
                  "name": "lightbulb  on  60"
              },
              {
                  "id": "lightbulb-on-70",
                  "name": "lightbulb  on  70"
              },
              {
                  "id": "lightbulb-on-80",
                  "name": "lightbulb  on  80"
              },
              {
                  "id": "lightbulb-on-90",
                  "name": "lightbulb  on  90"
              },
              {
                  "id": "lightbulb-on-outline",
                  "name": "lightbulb  on  outline"
              },
              {
                  "id": "lightbulb-outline",
                  "name": "lightbulb  outline"
              },
              {
                  "id": "lightbulb-question",
                  "name": "lightbulb  question"
              },
              {
                  "id": "lightbulb-question-outline",
                  "name": "lightbulb  question  outline"
              },
              {
                  "id": "lightbulb-spot",
                  "name": "lightbulb  spot"
              },
              {
                  "id": "lightbulb-spot-off",
                  "name": "lightbulb  spot  off"
              },
              {
                  "id": "lightbulb-variant",
                  "name": "lightbulb  variant"
              },
              {
                  "id": "lightbulb-variant-outline",
                  "name": "lightbulb  variant  outline"
              },
              {
                  "id": "lighthouse",
                  "name": "lighthouse"
              },
              {
                  "id": "lighthouse-on",
                  "name": "lighthouse  on"
              },
              {
                  "id": "lightning-bolt",
                  "name": "lightning  bolt"
              },
              {
                  "id": "lightning-bolt-circle",
                  "name": "lightning  bolt  circle"
              },
              {
                  "id": "lightning-bolt-outline",
                  "name": "lightning  bolt  outline"
              },
              {
                  "id": "line-scan",
                  "name": "line  scan"
              },
              {
                  "id": "lingerie",
                  "name": "lingerie"
              },
              {
                  "id": "link",
                  "name": "link"
              },
              {
                  "id": "link-box",
                  "name": "link  box"
              },
              {
                  "id": "link-box-outline",
                  "name": "link  box  outline"
              },
              {
                  "id": "link-box-variant",
                  "name": "link  box  variant"
              },
              {
                  "id": "link-box-variant-outline",
                  "name": "link  box  variant  outline"
              },
              {
                  "id": "link-lock",
                  "name": "link  lock"
              },
              {
                  "id": "link-off",
                  "name": "link  off"
              },
              {
                  "id": "link-plus",
                  "name": "link  plus"
              },
              {
                  "id": "link-variant",
                  "name": "link  variant"
              },
              {
                  "id": "link-variant-minus",
                  "name": "link  variant  minus"
              },
              {
                  "id": "link-variant-off",
                  "name": "link  variant  off"
              },
              {
                  "id": "link-variant-plus",
                  "name": "link  variant  plus"
              },
              {
                  "id": "link-variant-remove",
                  "name": "link  variant  remove"
              },
              {
                  "id": "linkedin",
                  "name": "linkedin"
              },
              {
                  "id": "linux",
                  "name": "linux"
              },
              {
                  "id": "linux-mint",
                  "name": "linux  mint"
              },
              {
                  "id": "lipstick",
                  "name": "lipstick"
              },
              {
                  "id": "liquid-spot",
                  "name": "liquid  spot"
              },
              {
                  "id": "liquor",
                  "name": "liquor"
              },
              {
                  "id": "list-box",
                  "name": "list  box"
              },
              {
                  "id": "list-box-outline",
                  "name": "list  box  outline"
              },
              {
                  "id": "list-status",
                  "name": "list  status"
              },
              {
                  "id": "litecoin",
                  "name": "litecoin"
              },
              {
                  "id": "loading",
                  "name": "loading"
              },
              {
                  "id": "location-enter",
                  "name": "location  enter"
              },
              {
                  "id": "location-exit",
                  "name": "location  exit"
              },
              {
                  "id": "lock",
                  "name": "lock"
              },
              {
                  "id": "lock-alert",
                  "name": "lock  alert"
              },
              {
                  "id": "lock-alert-outline",
                  "name": "lock  alert  outline"
              },
              {
                  "id": "lock-check",
                  "name": "lock  check"
              },
              {
                  "id": "lock-check-outline",
                  "name": "lock  check  outline"
              },
              {
                  "id": "lock-clock",
                  "name": "lock  clock"
              },
              {
                  "id": "lock-minus",
                  "name": "lock  minus"
              },
              {
                  "id": "lock-minus-outline",
                  "name": "lock  minus  outline"
              },
              {
                  "id": "lock-off",
                  "name": "lock  off"
              },
              {
                  "id": "lock-off-outline",
                  "name": "lock  off  outline"
              },
              {
                  "id": "lock-open",
                  "name": "lock  open"
              },
              {
                  "id": "lock-open-alert",
                  "name": "lock  open  alert"
              },
              {
                  "id": "lock-open-alert-outline",
                  "name": "lock  open  alert  outline"
              },
              {
                  "id": "lock-open-check",
                  "name": "lock  open  check"
              },
              {
                  "id": "lock-open-check-outline",
                  "name": "lock  open  check  outline"
              },
              {
                  "id": "lock-open-minus",
                  "name": "lock  open  minus"
              },
              {
                  "id": "lock-open-minus-outline",
                  "name": "lock  open  minus  outline"
              },
              {
                  "id": "lock-open-outline",
                  "name": "lock  open  outline"
              },
              {
                  "id": "lock-open-plus",
                  "name": "lock  open  plus"
              },
              {
                  "id": "lock-open-plus-outline",
                  "name": "lock  open  plus  outline"
              },
              {
                  "id": "lock-open-remove",
                  "name": "lock  open  remove"
              },
              {
                  "id": "lock-open-remove-outline",
                  "name": "lock  open  remove  outline"
              },
              {
                  "id": "lock-open-variant",
                  "name": "lock  open  variant"
              },
              {
                  "id": "lock-open-variant-outline",
                  "name": "lock  open  variant  outline"
              },
              {
                  "id": "lock-outline",
                  "name": "lock  outline"
              },
              {
                  "id": "lock-pattern",
                  "name": "lock  pattern"
              },
              {
                  "id": "lock-percent",
                  "name": "lock  percent"
              },
              {
                  "id": "lock-percent-open",
                  "name": "lock  percent  open"
              },
              {
                  "id": "lock-percent-open-outline",
                  "name": "lock  percent  open  outline"
              },
              {
                  "id": "lock-percent-open-variant",
                  "name": "lock  percent  open  variant"
              },
              {
                  "id": "lock-percent-open-variant-outline",
                  "name": "lock  percent  open  variant  outline"
              },
              {
                  "id": "lock-percent-outline",
                  "name": "lock  percent  outline"
              },
              {
                  "id": "lock-plus",
                  "name": "lock  plus"
              },
              {
                  "id": "lock-plus-outline",
                  "name": "lock  plus  outline"
              },
              {
                  "id": "lock-question",
                  "name": "lock  question"
              },
              {
                  "id": "lock-remove",
                  "name": "lock  remove"
              },
              {
                  "id": "lock-remove-outline",
                  "name": "lock  remove  outline"
              },
              {
                  "id": "lock-reset",
                  "name": "lock  reset"
              },
              {
                  "id": "lock-smart",
                  "name": "lock  smart"
              },
              {
                  "id": "locker",
                  "name": "locker"
              },
              {
                  "id": "locker-multiple",
                  "name": "locker  multiple"
              },
              {
                  "id": "login",
                  "name": "login"
              },
              {
                  "id": "login-variant",
                  "name": "login  variant"
              },
              {
                  "id": "logout",
                  "name": "logout"
              },
              {
                  "id": "logout-variant",
                  "name": "logout  variant"
              },
              {
                  "id": "longitude",
                  "name": "longitude"
              },
              {
                  "id": "looks",
                  "name": "looks"
              },
              {
                  "id": "lotion",
                  "name": "lotion"
              },
              {
                  "id": "lotion-outline",
                  "name": "lotion  outline"
              },
              {
                  "id": "lotion-plus",
                  "name": "lotion  plus"
              },
              {
                  "id": "lotion-plus-outline",
                  "name": "lotion  plus  outline"
              },
              {
                  "id": "loupe",
                  "name": "loupe"
              },
              {
                  "id": "lumx",
                  "name": "lumx"
              },
              {
                  "id": "lungs",
                  "name": "lungs"
              },
              {
                  "id": "mace",
                  "name": "mace"
              },
              {
                  "id": "magazine-pistol",
                  "name": "magazine  pistol"
              },
              {
                  "id": "magazine-rifle",
                  "name": "magazine  rifle"
              },
              {
                  "id": "magic-staff",
                  "name": "magic  staff"
              },
              {
                  "id": "magnet",
                  "name": "magnet"
              },
              {
                  "id": "magnet-on",
                  "name": "magnet  on"
              },
              {
                  "id": "magnify",
                  "name": "magnify"
              },
              {
                  "id": "magnify-close",
                  "name": "magnify  close"
              },
              {
                  "id": "magnify-expand",
                  "name": "magnify  expand"
              },
              {
                  "id": "magnify-minus",
                  "name": "magnify  minus"
              },
              {
                  "id": "magnify-minus-cursor",
                  "name": "magnify  minus  cursor"
              },
              {
                  "id": "magnify-minus-outline",
                  "name": "magnify  minus  outline"
              },
              {
                  "id": "magnify-plus",
                  "name": "magnify  plus"
              },
              {
                  "id": "magnify-plus-cursor",
                  "name": "magnify  plus  cursor"
              },
              {
                  "id": "magnify-plus-outline",
                  "name": "magnify  plus  outline"
              },
              {
                  "id": "magnify-remove-cursor",
                  "name": "magnify  remove  cursor"
              },
              {
                  "id": "magnify-remove-outline",
                  "name": "magnify  remove  outline"
              },
              {
                  "id": "magnify-scan",
                  "name": "magnify  scan"
              },
              {
                  "id": "mail",
                  "name": "mail"
              },
              {
                  "id": "mailbox",
                  "name": "mailbox"
              },
              {
                  "id": "mailbox-open",
                  "name": "mailbox  open"
              },
              {
                  "id": "mailbox-open-outline",
                  "name": "mailbox  open  outline"
              },
              {
                  "id": "mailbox-open-up",
                  "name": "mailbox  open  up"
              },
              {
                  "id": "mailbox-open-up-outline",
                  "name": "mailbox  open  up  outline"
              },
              {
                  "id": "mailbox-outline",
                  "name": "mailbox  outline"
              },
              {
                  "id": "mailbox-up",
                  "name": "mailbox  up"
              },
              {
                  "id": "mailbox-up-outline",
                  "name": "mailbox  up  outline"
              },
              {
                  "id": "manjaro",
                  "name": "manjaro"
              },
              {
                  "id": "map",
                  "name": "map"
              },
              {
                  "id": "map-check",
                  "name": "map  check"
              },
              {
                  "id": "map-check-outline",
                  "name": "map  check  outline"
              },
              {
                  "id": "map-clock",
                  "name": "map  clock"
              },
              {
                  "id": "map-clock-outline",
                  "name": "map  clock  outline"
              },
              {
                  "id": "map-legend",
                  "name": "map  legend"
              },
              {
                  "id": "map-marker",
                  "name": "map  marker"
              },
              {
                  "id": "map-marker-account",
                  "name": "map  marker  account"
              },
              {
                  "id": "map-marker-account-outline",
                  "name": "map  marker  account  outline"
              },
              {
                  "id": "map-marker-alert",
                  "name": "map  marker  alert"
              },
              {
                  "id": "map-marker-alert-outline",
                  "name": "map  marker  alert  outline"
              },
              {
                  "id": "map-marker-check",
                  "name": "map  marker  check"
              },
              {
                  "id": "map-marker-check-outline",
                  "name": "map  marker  check  outline"
              },
              {
                  "id": "map-marker-circle",
                  "name": "map  marker  circle"
              },
              {
                  "id": "map-marker-distance",
                  "name": "map  marker  distance"
              },
              {
                  "id": "map-marker-down",
                  "name": "map  marker  down"
              },
              {
                  "id": "map-marker-left",
                  "name": "map  marker  left"
              },
              {
                  "id": "map-marker-left-outline",
                  "name": "map  marker  left  outline"
              },
              {
                  "id": "map-marker-minus",
                  "name": "map  marker  minus"
              },
              {
                  "id": "map-marker-minus-outline",
                  "name": "map  marker  minus  outline"
              },
              {
                  "id": "map-marker-multiple",
                  "name": "map  marker  multiple"
              },
              {
                  "id": "map-marker-multiple-outline",
                  "name": "map  marker  multiple  outline"
              },
              {
                  "id": "map-marker-off",
                  "name": "map  marker  off"
              },
              {
                  "id": "map-marker-off-outline",
                  "name": "map  marker  off  outline"
              },
              {
                  "id": "map-marker-outline",
                  "name": "map  marker  outline"
              },
              {
                  "id": "map-marker-path",
                  "name": "map  marker  path"
              },
              {
                  "id": "map-marker-plus",
                  "name": "map  marker  plus"
              },
              {
                  "id": "map-marker-plus-outline",
                  "name": "map  marker  plus  outline"
              },
              {
                  "id": "map-marker-question",
                  "name": "map  marker  question"
              },
              {
                  "id": "map-marker-question-outline",
                  "name": "map  marker  question  outline"
              },
              {
                  "id": "map-marker-radius",
                  "name": "map  marker  radius"
              },
              {
                  "id": "map-marker-radius-outline",
                  "name": "map  marker  radius  outline"
              },
              {
                  "id": "map-marker-remove",
                  "name": "map  marker  remove"
              },
              {
                  "id": "map-marker-remove-outline",
                  "name": "map  marker  remove  outline"
              },
              {
                  "id": "map-marker-remove-variant",
                  "name": "map  marker  remove  variant"
              },
              {
                  "id": "map-marker-right",
                  "name": "map  marker  right"
              },
              {
                  "id": "map-marker-right-outline",
                  "name": "map  marker  right  outline"
              },
              {
                  "id": "map-marker-star",
                  "name": "map  marker  star"
              },
              {
                  "id": "map-marker-star-outline",
                  "name": "map  marker  star  outline"
              },
              {
                  "id": "map-marker-up",
                  "name": "map  marker  up"
              },
              {
                  "id": "map-minus",
                  "name": "map  minus"
              },
              {
                  "id": "map-outline",
                  "name": "map  outline"
              },
              {
                  "id": "map-plus",
                  "name": "map  plus"
              },
              {
                  "id": "map-search",
                  "name": "map  search"
              },
              {
                  "id": "map-search-outline",
                  "name": "map  search  outline"
              },
              {
                  "id": "mapbox",
                  "name": "mapbox"
              },
              {
                  "id": "margin",
                  "name": "margin"
              },
              {
                  "id": "marker",
                  "name": "marker"
              },
              {
                  "id": "marker-cancel",
                  "name": "marker  cancel"
              },
              {
                  "id": "marker-check",
                  "name": "marker  check"
              },
              {
                  "id": "mastodon",
                  "name": "mastodon"
              },
              {
                  "id": "material-design",
                  "name": "material  design"
              },
              {
                  "id": "material-ui",
                  "name": "material  ui"
              },
              {
                  "id": "math-compass",
                  "name": "math  compass"
              },
              {
                  "id": "math-cos",
                  "name": "math  cos"
              },
              {
                  "id": "math-integral",
                  "name": "math  integral"
              },
              {
                  "id": "math-integral-box",
                  "name": "math  integral  box"
              },
              {
                  "id": "math-log",
                  "name": "math  log"
              },
              {
                  "id": "math-norm",
                  "name": "math  norm"
              },
              {
                  "id": "math-norm-box",
                  "name": "math  norm  box"
              },
              {
                  "id": "math-sin",
                  "name": "math  sin"
              },
              {
                  "id": "math-tan",
                  "name": "math  tan"
              },
              {
                  "id": "matrix",
                  "name": "matrix"
              },
              {
                  "id": "medal",
                  "name": "medal"
              },
              {
                  "id": "medal-outline",
                  "name": "medal  outline"
              },
              {
                  "id": "medical-bag",
                  "name": "medical  bag"
              },
              {
                  "id": "medical-cotton-swab",
                  "name": "medical  cotton  swab"
              },
              {
                  "id": "medication",
                  "name": "medication"
              },
              {
                  "id": "medication-outline",
                  "name": "medication  outline"
              },
              {
                  "id": "meditation",
                  "name": "meditation"
              },
              {
                  "id": "memory",
                  "name": "memory"
              },
              {
                  "id": "menorah",
                  "name": "menorah"
              },
              {
                  "id": "menorah-fire",
                  "name": "menorah  fire"
              },
              {
                  "id": "menu",
                  "name": "menu"
              },
              {
                  "id": "menu-down",
                  "name": "menu  down"
              },
              {
                  "id": "menu-down-outline",
                  "name": "menu  down  outline"
              },
              {
                  "id": "menu-left",
                  "name": "menu  left"
              },
              {
                  "id": "menu-left-outline",
                  "name": "menu  left  outline"
              },
              {
                  "id": "menu-open",
                  "name": "menu  open"
              },
              {
                  "id": "menu-right",
                  "name": "menu  right"
              },
              {
                  "id": "menu-right-outline",
                  "name": "menu  right  outline"
              },
              {
                  "id": "menu-swap",
                  "name": "menu  swap"
              },
              {
                  "id": "menu-swap-outline",
                  "name": "menu  swap  outline"
              },
              {
                  "id": "menu-up",
                  "name": "menu  up"
              },
              {
                  "id": "menu-up-outline",
                  "name": "menu  up  outline"
              },
              {
                  "id": "merge",
                  "name": "merge"
              },
              {
                  "id": "message",
                  "name": "message"
              },
              {
                  "id": "message-alert",
                  "name": "message  alert"
              },
              {
                  "id": "message-alert-outline",
                  "name": "message  alert  outline"
              },
              {
                  "id": "message-arrow-left",
                  "name": "message  arrow  left"
              },
              {
                  "id": "message-arrow-left-outline",
                  "name": "message  arrow  left  outline"
              },
              {
                  "id": "message-arrow-right",
                  "name": "message  arrow  right"
              },
              {
                  "id": "message-arrow-right-outline",
                  "name": "message  arrow  right  outline"
              },
              {
                  "id": "message-badge",
                  "name": "message  badge"
              },
              {
                  "id": "message-badge-outline",
                  "name": "message  badge  outline"
              },
              {
                  "id": "message-bookmark",
                  "name": "message  bookmark"
              },
              {
                  "id": "message-bookmark-outline",
                  "name": "message  bookmark  outline"
              },
              {
                  "id": "message-bulleted",
                  "name": "message  bulleted"
              },
              {
                  "id": "message-bulleted-off",
                  "name": "message  bulleted  off"
              },
              {
                  "id": "message-check",
                  "name": "message  check"
              },
              {
                  "id": "message-check-outline",
                  "name": "message  check  outline"
              },
              {
                  "id": "message-cog",
                  "name": "message  cog"
              },
              {
                  "id": "message-cog-outline",
                  "name": "message  cog  outline"
              },
              {
                  "id": "message-draw",
                  "name": "message  draw"
              },
              {
                  "id": "message-fast",
                  "name": "message  fast"
              },
              {
                  "id": "message-fast-outline",
                  "name": "message  fast  outline"
              },
              {
                  "id": "message-flash",
                  "name": "message  flash"
              },
              {
                  "id": "message-flash-outline",
                  "name": "message  flash  outline"
              },
              {
                  "id": "message-image",
                  "name": "message  image"
              },
              {
                  "id": "message-image-outline",
                  "name": "message  image  outline"
              },
              {
                  "id": "message-lock",
                  "name": "message  lock"
              },
              {
                  "id": "message-lock-outline",
                  "name": "message  lock  outline"
              },
              {
                  "id": "message-minus",
                  "name": "message  minus"
              },
              {
                  "id": "message-minus-outline",
                  "name": "message  minus  outline"
              },
              {
                  "id": "message-off",
                  "name": "message  off"
              },
              {
                  "id": "message-off-outline",
                  "name": "message  off  outline"
              },
              {
                  "id": "message-outline",
                  "name": "message  outline"
              },
              {
                  "id": "message-plus",
                  "name": "message  plus"
              },
              {
                  "id": "message-plus-outline",
                  "name": "message  plus  outline"
              },
              {
                  "id": "message-processing",
                  "name": "message  processing"
              },
              {
                  "id": "message-processing-outline",
                  "name": "message  processing  outline"
              },
              {
                  "id": "message-question",
                  "name": "message  question"
              },
              {
                  "id": "message-question-outline",
                  "name": "message  question  outline"
              },
              {
                  "id": "message-reply",
                  "name": "message  reply"
              },
              {
                  "id": "message-reply-outline",
                  "name": "message  reply  outline"
              },
              {
                  "id": "message-reply-text",
                  "name": "message  reply  text"
              },
              {
                  "id": "message-reply-text-outline",
                  "name": "message  reply  text  outline"
              },
              {
                  "id": "message-settings",
                  "name": "message  settings"
              },
              {
                  "id": "message-settings-outline",
                  "name": "message  settings  outline"
              },
              {
                  "id": "message-star",
                  "name": "message  star"
              },
              {
                  "id": "message-star-outline",
                  "name": "message  star  outline"
              },
              {
                  "id": "message-text",
                  "name": "message  text"
              },
              {
                  "id": "message-text-clock",
                  "name": "message  text  clock"
              },
              {
                  "id": "message-text-clock-outline",
                  "name": "message  text  clock  outline"
              },
              {
                  "id": "message-text-fast",
                  "name": "message  text  fast"
              },
              {
                  "id": "message-text-fast-outline",
                  "name": "message  text  fast  outline"
              },
              {
                  "id": "message-text-lock",
                  "name": "message  text  lock"
              },
              {
                  "id": "message-text-lock-outline",
                  "name": "message  text  lock  outline"
              },
              {
                  "id": "message-text-outline",
                  "name": "message  text  outline"
              },
              {
                  "id": "message-video",
                  "name": "message  video"
              },
              {
                  "id": "meteor",
                  "name": "meteor"
              },
              {
                  "id": "meter-electric",
                  "name": "meter  electric"
              },
              {
                  "id": "meter-electric-outline",
                  "name": "meter  electric  outline"
              },
              {
                  "id": "meter-gas",
                  "name": "meter  gas"
              },
              {
                  "id": "meter-gas-outline",
                  "name": "meter  gas  outline"
              },
              {
                  "id": "metronome",
                  "name": "metronome"
              },
              {
                  "id": "metronome-tick",
                  "name": "metronome  tick"
              },
              {
                  "id": "micro-sd",
                  "name": "micro  sd"
              },
              {
                  "id": "microphone",
                  "name": "microphone"
              },
              {
                  "id": "microphone-message",
                  "name": "microphone  message"
              },
              {
                  "id": "microphone-message-off",
                  "name": "microphone  message  off"
              },
              {
                  "id": "microphone-minus",
                  "name": "microphone  minus"
              },
              {
                  "id": "microphone-off",
                  "name": "microphone  off"
              },
              {
                  "id": "microphone-outline",
                  "name": "microphone  outline"
              },
              {
                  "id": "microphone-plus",
                  "name": "microphone  plus"
              },
              {
                  "id": "microphone-question",
                  "name": "microphone  question"
              },
              {
                  "id": "microphone-question-outline",
                  "name": "microphone  question  outline"
              },
              {
                  "id": "microphone-settings",
                  "name": "microphone  settings"
              },
              {
                  "id": "microphone-variant",
                  "name": "microphone  variant"
              },
              {
                  "id": "microphone-variant-off",
                  "name": "microphone  variant  off"
              },
              {
                  "id": "microscope",
                  "name": "microscope"
              },
              {
                  "id": "microsoft",
                  "name": "microsoft"
              },
              {
                  "id": "microsoft-access",
                  "name": "microsoft  access"
              },
              {
                  "id": "microsoft-azure",
                  "name": "microsoft  azure"
              },
              {
                  "id": "microsoft-azure-devops",
                  "name": "microsoft  azure  devops"
              },
              {
                  "id": "microsoft-bing",
                  "name": "microsoft  bing"
              },
              {
                  "id": "microsoft-dynamics-365",
                  "name": "microsoft  dynamics  365"
              },
              {
                  "id": "microsoft-edge",
                  "name": "microsoft  edge"
              },
              {
                  "id": "microsoft-excel",
                  "name": "microsoft  excel"
              },
              {
                  "id": "microsoft-internet-explorer",
                  "name": "microsoft  internet  explorer"
              },
              {
                  "id": "microsoft-office",
                  "name": "microsoft  office"
              },
              {
                  "id": "microsoft-onedrive",
                  "name": "microsoft  onedrive"
              },
              {
                  "id": "microsoft-onenote",
                  "name": "microsoft  onenote"
              },
              {
                  "id": "microsoft-outlook",
                  "name": "microsoft  outlook"
              },
              {
                  "id": "microsoft-powerpoint",
                  "name": "microsoft  powerpoint"
              },
              {
                  "id": "microsoft-sharepoint",
                  "name": "microsoft  sharepoint"
              },
              {
                  "id": "microsoft-teams",
                  "name": "microsoft  teams"
              },
              {
                  "id": "microsoft-visual-studio",
                  "name": "microsoft  visual  studio"
              },
              {
                  "id": "microsoft-visual-studio-code",
                  "name": "microsoft  visual  studio  code"
              },
              {
                  "id": "microsoft-windows",
                  "name": "microsoft  windows"
              },
              {
                  "id": "microsoft-windows-classic",
                  "name": "microsoft  windows  classic"
              },
              {
                  "id": "microsoft-word",
                  "name": "microsoft  word"
              },
              {
                  "id": "microsoft-xbox",
                  "name": "microsoft  xbox"
              },
              {
                  "id": "microsoft-xbox-controller",
                  "name": "microsoft  xbox  controller"
              },
              {
                  "id": "microsoft-xbox-controller-battery-alert",
                  "name": "microsoft  xbox  controller  battery  alert"
              },
              {
                  "id": "microsoft-xbox-controller-battery-charging",
                  "name": "microsoft  xbox  controller  battery  charging"
              },
              {
                  "id": "microsoft-xbox-controller-battery-empty",
                  "name": "microsoft  xbox  controller  battery  empty"
              },
              {
                  "id": "microsoft-xbox-controller-battery-full",
                  "name": "microsoft  xbox  controller  battery  full"
              },
              {
                  "id": "microsoft-xbox-controller-battery-low",
                  "name": "microsoft  xbox  controller  battery  low"
              },
              {
                  "id": "microsoft-xbox-controller-battery-medium",
                  "name": "microsoft  xbox  controller  battery  medium"
              },
              {
                  "id": "microsoft-xbox-controller-battery-unknown",
                  "name": "microsoft  xbox  controller  battery  unknown"
              },
              {
                  "id": "microsoft-xbox-controller-menu",
                  "name": "microsoft  xbox  controller  menu"
              },
              {
                  "id": "microsoft-xbox-controller-off",
                  "name": "microsoft  xbox  controller  off"
              },
              {
                  "id": "microsoft-xbox-controller-view",
                  "name": "microsoft  xbox  controller  view"
              },
              {
                  "id": "microwave",
                  "name": "microwave"
              },
              {
                  "id": "microwave-off",
                  "name": "microwave  off"
              },
              {
                  "id": "middleware",
                  "name": "middleware"
              },
              {
                  "id": "middleware-outline",
                  "name": "middleware  outline"
              },
              {
                  "id": "midi",
                  "name": "midi"
              },
              {
                  "id": "midi-port",
                  "name": "midi  port"
              },
              {
                  "id": "mine",
                  "name": "mine"
              },
              {
                  "id": "minecraft",
                  "name": "minecraft"
              },
              {
                  "id": "mini-sd",
                  "name": "mini  sd"
              },
              {
                  "id": "minidisc",
                  "name": "minidisc"
              },
              {
                  "id": "minus",
                  "name": "minus"
              },
              {
                  "id": "minus-box",
                  "name": "minus  box"
              },
              {
                  "id": "minus-box-multiple",
                  "name": "minus  box  multiple"
              },
              {
                  "id": "minus-box-multiple-outline",
                  "name": "minus  box  multiple  outline"
              },
              {
                  "id": "minus-box-outline",
                  "name": "minus  box  outline"
              },
              {
                  "id": "minus-circle",
                  "name": "minus  circle"
              },
              {
                  "id": "minus-circle-multiple",
                  "name": "minus  circle  multiple"
              },
              {
                  "id": "minus-circle-multiple-outline",
                  "name": "minus  circle  multiple  outline"
              },
              {
                  "id": "minus-circle-off",
                  "name": "minus  circle  off"
              },
              {
                  "id": "minus-circle-off-outline",
                  "name": "minus  circle  off  outline"
              },
              {
                  "id": "minus-circle-outline",
                  "name": "minus  circle  outline"
              },
              {
                  "id": "minus-network",
                  "name": "minus  network"
              },
              {
                  "id": "minus-network-outline",
                  "name": "minus  network  outline"
              },
              {
                  "id": "minus-thick",
                  "name": "minus  thick"
              },
              {
                  "id": "mirror",
                  "name": "mirror"
              },
              {
                  "id": "mirror-rectangle",
                  "name": "mirror  rectangle"
              },
              {
                  "id": "mirror-variant",
                  "name": "mirror  variant"
              },
              {
                  "id": "mixed-martial-arts",
                  "name": "mixed  martial  arts"
              },
              {
                  "id": "mixed-reality",
                  "name": "mixed  reality"
              },
              {
                  "id": "molecule",
                  "name": "molecule"
              },
              {
                  "id": "molecule-co",
                  "name": "molecule  co"
              },
              {
                  "id": "molecule-co2",
                  "name": "molecule  co2"
              },
              {
                  "id": "monitor",
                  "name": "monitor"
              },
              {
                  "id": "monitor-account",
                  "name": "monitor  account"
              },
              {
                  "id": "monitor-arrow-down",
                  "name": "monitor  arrow  down"
              },
              {
                  "id": "monitor-arrow-down-variant",
                  "name": "monitor  arrow  down  variant"
              },
              {
                  "id": "monitor-cellphone",
                  "name": "monitor  cellphone"
              },
              {
                  "id": "monitor-cellphone-star",
                  "name": "monitor  cellphone  star"
              },
              {
                  "id": "monitor-dashboard",
                  "name": "monitor  dashboard"
              },
              {
                  "id": "monitor-edit",
                  "name": "monitor  edit"
              },
              {
                  "id": "monitor-eye",
                  "name": "monitor  eye"
              },
              {
                  "id": "monitor-lock",
                  "name": "monitor  lock"
              },
              {
                  "id": "monitor-multiple",
                  "name": "monitor  multiple"
              },
              {
                  "id": "monitor-off",
                  "name": "monitor  off"
              },
              {
                  "id": "monitor-screenshot",
                  "name": "monitor  screenshot"
              },
              {
                  "id": "monitor-share",
                  "name": "monitor  share"
              },
              {
                  "id": "monitor-shimmer",
                  "name": "monitor  shimmer"
              },
              {
                  "id": "monitor-small",
                  "name": "monitor  small"
              },
              {
                  "id": "monitor-speaker",
                  "name": "monitor  speaker"
              },
              {
                  "id": "monitor-speaker-off",
                  "name": "monitor  speaker  off"
              },
              {
                  "id": "monitor-star",
                  "name": "monitor  star"
              },
              {
                  "id": "monitor-vertical",
                  "name": "monitor  vertical"
              },
              {
                  "id": "moon-first-quarter",
                  "name": "moon  first  quarter"
              },
              {
                  "id": "moon-full",
                  "name": "moon  full"
              },
              {
                  "id": "moon-last-quarter",
                  "name": "moon  last  quarter"
              },
              {
                  "id": "moon-new",
                  "name": "moon  new"
              },
              {
                  "id": "moon-waning-crescent",
                  "name": "moon  waning  crescent"
              },
              {
                  "id": "moon-waning-gibbous",
                  "name": "moon  waning  gibbous"
              },
              {
                  "id": "moon-waxing-crescent",
                  "name": "moon  waxing  crescent"
              },
              {
                  "id": "moon-waxing-gibbous",
                  "name": "moon  waxing  gibbous"
              },
              {
                  "id": "moped",
                  "name": "moped"
              },
              {
                  "id": "moped-electric",
                  "name": "moped  electric"
              },
              {
                  "id": "moped-electric-outline",
                  "name": "moped  electric  outline"
              },
              {
                  "id": "moped-outline",
                  "name": "moped  outline"
              },
              {
                  "id": "more",
                  "name": "more"
              },
              {
                  "id": "mortar-pestle",
                  "name": "mortar  pestle"
              },
              {
                  "id": "mortar-pestle-plus",
                  "name": "mortar  pestle  plus"
              },
              {
                  "id": "mosque",
                  "name": "mosque"
              },
              {
                  "id": "mosque-outline",
                  "name": "mosque  outline"
              },
              {
                  "id": "mother-heart",
                  "name": "mother  heart"
              },
              {
                  "id": "mother-nurse",
                  "name": "mother  nurse"
              },
              {
                  "id": "motion",
                  "name": "motion"
              },
              {
                  "id": "motion-outline",
                  "name": "motion  outline"
              },
              {
                  "id": "motion-pause",
                  "name": "motion  pause"
              },
              {
                  "id": "motion-pause-outline",
                  "name": "motion  pause  outline"
              },
              {
                  "id": "motion-play",
                  "name": "motion  play"
              },
              {
                  "id": "motion-play-outline",
                  "name": "motion  play  outline"
              },
              {
                  "id": "motion-sensor",
                  "name": "motion  sensor"
              },
              {
                  "id": "motion-sensor-off",
                  "name": "motion  sensor  off"
              },
              {
                  "id": "motorbike",
                  "name": "motorbike"
              },
              {
                  "id": "motorbike-electric",
                  "name": "motorbike  electric"
              },
              {
                  "id": "motorbike-off",
                  "name": "motorbike  off"
              },
              {
                  "id": "mouse",
                  "name": "mouse"
              },
              {
                  "id": "mouse-bluetooth",
                  "name": "mouse  bluetooth"
              },
              {
                  "id": "mouse-move-down",
                  "name": "mouse  move  down"
              },
              {
                  "id": "mouse-move-up",
                  "name": "mouse  move  up"
              },
              {
                  "id": "mouse-move-vertical",
                  "name": "mouse  move  vertical"
              },
              {
                  "id": "mouse-off",
                  "name": "mouse  off"
              },
              {
                  "id": "mouse-variant",
                  "name": "mouse  variant"
              },
              {
                  "id": "mouse-variant-off",
                  "name": "mouse  variant  off"
              },
              {
                  "id": "move-resize",
                  "name": "move  resize"
              },
              {
                  "id": "move-resize-variant",
                  "name": "move  resize  variant"
              },
              {
                  "id": "movie",
                  "name": "movie"
              },
              {
                  "id": "movie-check",
                  "name": "movie  check"
              },
              {
                  "id": "movie-check-outline",
                  "name": "movie  check  outline"
              },
              {
                  "id": "movie-cog",
                  "name": "movie  cog"
              },
              {
                  "id": "movie-cog-outline",
                  "name": "movie  cog  outline"
              },
              {
                  "id": "movie-edit",
                  "name": "movie  edit"
              },
              {
                  "id": "movie-edit-outline",
                  "name": "movie  edit  outline"
              },
              {
                  "id": "movie-filter",
                  "name": "movie  filter"
              },
              {
                  "id": "movie-filter-outline",
                  "name": "movie  filter  outline"
              },
              {
                  "id": "movie-minus",
                  "name": "movie  minus"
              },
              {
                  "id": "movie-minus-outline",
                  "name": "movie  minus  outline"
              },
              {
                  "id": "movie-off",
                  "name": "movie  off"
              },
              {
                  "id": "movie-off-outline",
                  "name": "movie  off  outline"
              },
              {
                  "id": "movie-open",
                  "name": "movie  open"
              },
              {
                  "id": "movie-open-check",
                  "name": "movie  open  check"
              },
              {
                  "id": "movie-open-check-outline",
                  "name": "movie  open  check  outline"
              },
              {
                  "id": "movie-open-cog",
                  "name": "movie  open  cog"
              },
              {
                  "id": "movie-open-cog-outline",
                  "name": "movie  open  cog  outline"
              },
              {
                  "id": "movie-open-edit",
                  "name": "movie  open  edit"
              },
              {
                  "id": "movie-open-edit-outline",
                  "name": "movie  open  edit  outline"
              },
              {
                  "id": "movie-open-minus",
                  "name": "movie  open  minus"
              },
              {
                  "id": "movie-open-minus-outline",
                  "name": "movie  open  minus  outline"
              },
              {
                  "id": "movie-open-off",
                  "name": "movie  open  off"
              },
              {
                  "id": "movie-open-off-outline",
                  "name": "movie  open  off  outline"
              },
              {
                  "id": "movie-open-outline",
                  "name": "movie  open  outline"
              },
              {
                  "id": "movie-open-play",
                  "name": "movie  open  play"
              },
              {
                  "id": "movie-open-play-outline",
                  "name": "movie  open  play  outline"
              },
              {
                  "id": "movie-open-plus",
                  "name": "movie  open  plus"
              },
              {
                  "id": "movie-open-plus-outline",
                  "name": "movie  open  plus  outline"
              },
              {
                  "id": "movie-open-remove",
                  "name": "movie  open  remove"
              },
              {
                  "id": "movie-open-remove-outline",
                  "name": "movie  open  remove  outline"
              },
              {
                  "id": "movie-open-settings",
                  "name": "movie  open  settings"
              },
              {
                  "id": "movie-open-settings-outline",
                  "name": "movie  open  settings  outline"
              },
              {
                  "id": "movie-open-star",
                  "name": "movie  open  star"
              },
              {
                  "id": "movie-open-star-outline",
                  "name": "movie  open  star  outline"
              },
              {
                  "id": "movie-outline",
                  "name": "movie  outline"
              },
              {
                  "id": "movie-play",
                  "name": "movie  play"
              },
              {
                  "id": "movie-play-outline",
                  "name": "movie  play  outline"
              },
              {
                  "id": "movie-plus",
                  "name": "movie  plus"
              },
              {
                  "id": "movie-plus-outline",
                  "name": "movie  plus  outline"
              },
              {
                  "id": "movie-remove",
                  "name": "movie  remove"
              },
              {
                  "id": "movie-remove-outline",
                  "name": "movie  remove  outline"
              },
              {
                  "id": "movie-roll",
                  "name": "movie  roll"
              },
              {
                  "id": "movie-search",
                  "name": "movie  search"
              },
              {
                  "id": "movie-search-outline",
                  "name": "movie  search  outline"
              },
              {
                  "id": "movie-settings",
                  "name": "movie  settings"
              },
              {
                  "id": "movie-settings-outline",
                  "name": "movie  settings  outline"
              },
              {
                  "id": "movie-star",
                  "name": "movie  star"
              },
              {
                  "id": "movie-star-outline",
                  "name": "movie  star  outline"
              },
              {
                  "id": "mower",
                  "name": "mower"
              },
              {
                  "id": "mower-bag",
                  "name": "mower  bag"
              },
              {
                  "id": "mower-bag-on",
                  "name": "mower  bag  on"
              },
              {
                  "id": "mower-on",
                  "name": "mower  on"
              },
              {
                  "id": "muffin",
                  "name": "muffin"
              },
              {
                  "id": "multicast",
                  "name": "multicast"
              },
              {
                  "id": "multimedia",
                  "name": "multimedia"
              },
              {
                  "id": "multiplication",
                  "name": "multiplication"
              },
              {
                  "id": "multiplication-box",
                  "name": "multiplication  box"
              },
              {
                  "id": "mushroom",
                  "name": "mushroom"
              },
              {
                  "id": "mushroom-off",
                  "name": "mushroom  off"
              },
              {
                  "id": "mushroom-off-outline",
                  "name": "mushroom  off  outline"
              },
              {
                  "id": "mushroom-outline",
                  "name": "mushroom  outline"
              },
              {
                  "id": "music",
                  "name": "music"
              },
              {
                  "id": "music-accidental-double-flat",
                  "name": "music  accidental  double  flat"
              },
              {
                  "id": "music-accidental-double-sharp",
                  "name": "music  accidental  double  sharp"
              },
              {
                  "id": "music-accidental-flat",
                  "name": "music  accidental  flat"
              },
              {
                  "id": "music-accidental-natural",
                  "name": "music  accidental  natural"
              },
              {
                  "id": "music-accidental-sharp",
                  "name": "music  accidental  sharp"
              },
              {
                  "id": "music-box",
                  "name": "music  box"
              },
              {
                  "id": "music-box-multiple",
                  "name": "music  box  multiple"
              },
              {
                  "id": "music-box-multiple-outline",
                  "name": "music  box  multiple  outline"
              },
              {
                  "id": "music-box-outline",
                  "name": "music  box  outline"
              },
              {
                  "id": "music-circle",
                  "name": "music  circle"
              },
              {
                  "id": "music-circle-outline",
                  "name": "music  circle  outline"
              },
              {
                  "id": "music-clef-alto",
                  "name": "music  clef  alto"
              },
              {
                  "id": "music-clef-bass",
                  "name": "music  clef  bass"
              },
              {
                  "id": "music-clef-treble",
                  "name": "music  clef  treble"
              },
              {
                  "id": "music-note",
                  "name": "music  note"
              },
              {
                  "id": "music-note-bluetooth",
                  "name": "music  note  bluetooth"
              },
              {
                  "id": "music-note-bluetooth-off",
                  "name": "music  note  bluetooth  off"
              },
              {
                  "id": "music-note-eighth",
                  "name": "music  note  eighth"
              },
              {
                  "id": "music-note-eighth-dotted",
                  "name": "music  note  eighth  dotted"
              },
              {
                  "id": "music-note-half",
                  "name": "music  note  half"
              },
              {
                  "id": "music-note-half-dotted",
                  "name": "music  note  half  dotted"
              },
              {
                  "id": "music-note-minus",
                  "name": "music  note  minus"
              },
              {
                  "id": "music-note-off",
                  "name": "music  note  off"
              },
              {
                  "id": "music-note-off-outline",
                  "name": "music  note  off  outline"
              },
              {
                  "id": "music-note-outline",
                  "name": "music  note  outline"
              },
              {
                  "id": "music-note-plus",
                  "name": "music  note  plus"
              },
              {
                  "id": "music-note-quarter",
                  "name": "music  note  quarter"
              },
              {
                  "id": "music-note-quarter-dotted",
                  "name": "music  note  quarter  dotted"
              },
              {
                  "id": "music-note-sixteenth",
                  "name": "music  note  sixteenth"
              },
              {
                  "id": "music-note-sixteenth-dotted",
                  "name": "music  note  sixteenth  dotted"
              },
              {
                  "id": "music-note-whole",
                  "name": "music  note  whole"
              },
              {
                  "id": "music-note-whole-dotted",
                  "name": "music  note  whole  dotted"
              },
              {
                  "id": "music-off",
                  "name": "music  off"
              },
              {
                  "id": "music-rest-eighth",
                  "name": "music  rest  eighth"
              },
              {
                  "id": "music-rest-half",
                  "name": "music  rest  half"
              },
              {
                  "id": "music-rest-quarter",
                  "name": "music  rest  quarter"
              },
              {
                  "id": "music-rest-sixteenth",
                  "name": "music  rest  sixteenth"
              },
              {
                  "id": "music-rest-whole",
                  "name": "music  rest  whole"
              },
              {
                  "id": "mustache",
                  "name": "mustache"
              },
              {
                  "id": "nail",
                  "name": "nail"
              },
              {
                  "id": "nas",
                  "name": "nas"
              },
              {
                  "id": "nativescript",
                  "name": "nativescript"
              },
              {
                  "id": "nature",
                  "name": "nature"
              },
              {
                  "id": "nature-outline",
                  "name": "nature  outline"
              },
              {
                  "id": "nature-people",
                  "name": "nature  people"
              },
              {
                  "id": "nature-people-outline",
                  "name": "nature  people  outline"
              },
              {
                  "id": "navigation",
                  "name": "navigation"
              },
              {
                  "id": "navigation-outline",
                  "name": "navigation  outline"
              },
              {
                  "id": "navigation-variant",
                  "name": "navigation  variant"
              },
              {
                  "id": "navigation-variant-outline",
                  "name": "navigation  variant  outline"
              },
              {
                  "id": "near-me",
                  "name": "near  me"
              },
              {
                  "id": "necklace",
                  "name": "necklace"
              },
              {
                  "id": "needle",
                  "name": "needle"
              },
              {
                  "id": "needle-off",
                  "name": "needle  off"
              },
              {
                  "id": "netflix",
                  "name": "netflix"
              },
              {
                  "id": "network",
                  "name": "network"
              },
              {
                  "id": "network-off",
                  "name": "network  off"
              },
              {
                  "id": "network-off-outline",
                  "name": "network  off  outline"
              },
              {
                  "id": "network-outline",
                  "name": "network  outline"
              },
              {
                  "id": "network-pos",
                  "name": "network  pos"
              },
              {
                  "id": "network-strength-1",
                  "name": "network  strength  1"
              },
              {
                  "id": "network-strength-1-alert",
                  "name": "network  strength  1  alert"
              },
              {
                  "id": "network-strength-2",
                  "name": "network  strength  2"
              },
              {
                  "id": "network-strength-2-alert",
                  "name": "network  strength  2  alert"
              },
              {
                  "id": "network-strength-3",
                  "name": "network  strength  3"
              },
              {
                  "id": "network-strength-3-alert",
                  "name": "network  strength  3  alert"
              },
              {
                  "id": "network-strength-4",
                  "name": "network  strength  4"
              },
              {
                  "id": "network-strength-4-alert",
                  "name": "network  strength  4  alert"
              },
              {
                  "id": "network-strength-4-cog",
                  "name": "network  strength  4  cog"
              },
              {
                  "id": "network-strength-off",
                  "name": "network  strength  off"
              },
              {
                  "id": "network-strength-off-outline",
                  "name": "network  strength  off  outline"
              },
              {
                  "id": "network-strength-outline",
                  "name": "network  strength  outline"
              },
              {
                  "id": "new-box",
                  "name": "new  box"
              },
              {
                  "id": "newspaper",
                  "name": "newspaper"
              },
              {
                  "id": "newspaper-check",
                  "name": "newspaper  check"
              },
              {
                  "id": "newspaper-minus",
                  "name": "newspaper  minus"
              },
              {
                  "id": "newspaper-plus",
                  "name": "newspaper  plus"
              },
              {
                  "id": "newspaper-remove",
                  "name": "newspaper  remove"
              },
              {
                  "id": "newspaper-variant",
                  "name": "newspaper  variant"
              },
              {
                  "id": "newspaper-variant-multiple",
                  "name": "newspaper  variant  multiple"
              },
              {
                  "id": "newspaper-variant-multiple-outline",
                  "name": "newspaper  variant  multiple  outline"
              },
              {
                  "id": "newspaper-variant-outline",
                  "name": "newspaper  variant  outline"
              },
              {
                  "id": "nfc",
                  "name": "nfc"
              },
              {
                  "id": "nfc-search-variant",
                  "name": "nfc  search  variant"
              },
              {
                  "id": "nfc-tap",
                  "name": "nfc  tap"
              },
              {
                  "id": "nfc-variant",
                  "name": "nfc  variant"
              },
              {
                  "id": "nfc-variant-off",
                  "name": "nfc  variant  off"
              },
              {
                  "id": "ninja",
                  "name": "ninja"
              },
              {
                  "id": "nintendo-game-boy",
                  "name": "nintendo  game  boy"
              },
              {
                  "id": "nintendo-switch",
                  "name": "nintendo  switch"
              },
              {
                  "id": "nintendo-wii",
                  "name": "nintendo  wii"
              },
              {
                  "id": "nintendo-wiiu",
                  "name": "nintendo  wiiu"
              },
              {
                  "id": "nix",
                  "name": "nix"
              },
              {
                  "id": "nodejs",
                  "name": "nodejs"
              },
              {
                  "id": "noodles",
                  "name": "noodles"
              },
              {
                  "id": "not-equal",
                  "name": "not  equal"
              },
              {
                  "id": "not-equal-variant",
                  "name": "not  equal  variant"
              },
              {
                  "id": "note",
                  "name": "note"
              },
              {
                  "id": "note-alert",
                  "name": "note  alert"
              },
              {
                  "id": "note-alert-outline",
                  "name": "note  alert  outline"
              },
              {
                  "id": "note-check",
                  "name": "note  check"
              },
              {
                  "id": "note-check-outline",
                  "name": "note  check  outline"
              },
              {
                  "id": "note-edit",
                  "name": "note  edit"
              },
              {
                  "id": "note-edit-outline",
                  "name": "note  edit  outline"
              },
              {
                  "id": "note-minus",
                  "name": "note  minus"
              },
              {
                  "id": "note-minus-outline",
                  "name": "note  minus  outline"
              },
              {
                  "id": "note-multiple",
                  "name": "note  multiple"
              },
              {
                  "id": "note-multiple-outline",
                  "name": "note  multiple  outline"
              },
              {
                  "id": "note-off",
                  "name": "note  off"
              },
              {
                  "id": "note-off-outline",
                  "name": "note  off  outline"
              },
              {
                  "id": "note-outline",
                  "name": "note  outline"
              },
              {
                  "id": "note-plus",
                  "name": "note  plus"
              },
              {
                  "id": "note-plus-outline",
                  "name": "note  plus  outline"
              },
              {
                  "id": "note-remove",
                  "name": "note  remove"
              },
              {
                  "id": "note-remove-outline",
                  "name": "note  remove  outline"
              },
              {
                  "id": "note-search",
                  "name": "note  search"
              },
              {
                  "id": "note-search-outline",
                  "name": "note  search  outline"
              },
              {
                  "id": "note-text",
                  "name": "note  text"
              },
              {
                  "id": "note-text-outline",
                  "name": "note  text  outline"
              },
              {
                  "id": "notebook",
                  "name": "notebook"
              },
              {
                  "id": "notebook-check",
                  "name": "notebook  check"
              },
              {
                  "id": "notebook-check-outline",
                  "name": "notebook  check  outline"
              },
              {
                  "id": "notebook-edit",
                  "name": "notebook  edit"
              },
              {
                  "id": "notebook-edit-outline",
                  "name": "notebook  edit  outline"
              },
              {
                  "id": "notebook-heart",
                  "name": "notebook  heart"
              },
              {
                  "id": "notebook-heart-outline",
                  "name": "notebook  heart  outline"
              },
              {
                  "id": "notebook-minus",
                  "name": "notebook  minus"
              },
              {
                  "id": "notebook-minus-outline",
                  "name": "notebook  minus  outline"
              },
              {
                  "id": "notebook-multiple",
                  "name": "notebook  multiple"
              },
              {
                  "id": "notebook-outline",
                  "name": "notebook  outline"
              },
              {
                  "id": "notebook-plus",
                  "name": "notebook  plus"
              },
              {
                  "id": "notebook-plus-outline",
                  "name": "notebook  plus  outline"
              },
              {
                  "id": "notebook-remove",
                  "name": "notebook  remove"
              },
              {
                  "id": "notebook-remove-outline",
                  "name": "notebook  remove  outline"
              },
              {
                  "id": "notification-clear-all",
                  "name": "notification  clear  all"
              },
              {
                  "id": "npm",
                  "name": "npm"
              },
              {
                  "id": "nuke",
                  "name": "nuke"
              },
              {
                  "id": "null",
                  "name": "null"
              },
              {
                  "id": "numeric",
                  "name": "numeric"
              },
              {
                  "id": "numeric-0",
                  "name": "numeric  0"
              },
              {
                  "id": "numeric-0-box",
                  "name": "numeric  0  box"
              },
              {
                  "id": "numeric-0-box-multiple",
                  "name": "numeric  0  box  multiple"
              },
              {
                  "id": "numeric-0-box-multiple-outline",
                  "name": "numeric  0  box  multiple  outline"
              },
              {
                  "id": "numeric-0-box-outline",
                  "name": "numeric  0  box  outline"
              },
              {
                  "id": "numeric-0-circle",
                  "name": "numeric  0  circle"
              },
              {
                  "id": "numeric-0-circle-outline",
                  "name": "numeric  0  circle  outline"
              },
              {
                  "id": "numeric-1",
                  "name": "numeric  1"
              },
              {
                  "id": "numeric-1-box",
                  "name": "numeric  1  box"
              },
              {
                  "id": "numeric-1-box-multiple",
                  "name": "numeric  1  box  multiple"
              },
              {
                  "id": "numeric-1-box-multiple-outline",
                  "name": "numeric  1  box  multiple  outline"
              },
              {
                  "id": "numeric-1-box-outline",
                  "name": "numeric  1  box  outline"
              },
              {
                  "id": "numeric-1-circle",
                  "name": "numeric  1  circle"
              },
              {
                  "id": "numeric-1-circle-outline",
                  "name": "numeric  1  circle  outline"
              },
              {
                  "id": "numeric-10",
                  "name": "numeric  10"
              },
              {
                  "id": "numeric-10-box",
                  "name": "numeric  10  box"
              },
              {
                  "id": "numeric-10-box-multiple",
                  "name": "numeric  10  box  multiple"
              },
              {
                  "id": "numeric-10-box-multiple-outline",
                  "name": "numeric  10  box  multiple  outline"
              },
              {
                  "id": "numeric-10-box-outline",
                  "name": "numeric  10  box  outline"
              },
              {
                  "id": "numeric-10-circle",
                  "name": "numeric  10  circle"
              },
              {
                  "id": "numeric-10-circle-outline",
                  "name": "numeric  10  circle  outline"
              },
              {
                  "id": "numeric-2",
                  "name": "numeric  2"
              },
              {
                  "id": "numeric-2-box",
                  "name": "numeric  2  box"
              },
              {
                  "id": "numeric-2-box-multiple",
                  "name": "numeric  2  box  multiple"
              },
              {
                  "id": "numeric-2-box-multiple-outline",
                  "name": "numeric  2  box  multiple  outline"
              },
              {
                  "id": "numeric-2-box-outline",
                  "name": "numeric  2  box  outline"
              },
              {
                  "id": "numeric-2-circle",
                  "name": "numeric  2  circle"
              },
              {
                  "id": "numeric-2-circle-outline",
                  "name": "numeric  2  circle  outline"
              },
              {
                  "id": "numeric-3",
                  "name": "numeric  3"
              },
              {
                  "id": "numeric-3-box",
                  "name": "numeric  3  box"
              },
              {
                  "id": "numeric-3-box-multiple",
                  "name": "numeric  3  box  multiple"
              },
              {
                  "id": "numeric-3-box-multiple-outline",
                  "name": "numeric  3  box  multiple  outline"
              },
              {
                  "id": "numeric-3-box-outline",
                  "name": "numeric  3  box  outline"
              },
              {
                  "id": "numeric-3-circle",
                  "name": "numeric  3  circle"
              },
              {
                  "id": "numeric-3-circle-outline",
                  "name": "numeric  3  circle  outline"
              },
              {
                  "id": "numeric-4",
                  "name": "numeric  4"
              },
              {
                  "id": "numeric-4-box",
                  "name": "numeric  4  box"
              },
              {
                  "id": "numeric-4-box-multiple",
                  "name": "numeric  4  box  multiple"
              },
              {
                  "id": "numeric-4-box-multiple-outline",
                  "name": "numeric  4  box  multiple  outline"
              },
              {
                  "id": "numeric-4-box-outline",
                  "name": "numeric  4  box  outline"
              },
              {
                  "id": "numeric-4-circle",
                  "name": "numeric  4  circle"
              },
              {
                  "id": "numeric-4-circle-outline",
                  "name": "numeric  4  circle  outline"
              },
              {
                  "id": "numeric-5",
                  "name": "numeric  5"
              },
              {
                  "id": "numeric-5-box",
                  "name": "numeric  5  box"
              },
              {
                  "id": "numeric-5-box-multiple",
                  "name": "numeric  5  box  multiple"
              },
              {
                  "id": "numeric-5-box-multiple-outline",
                  "name": "numeric  5  box  multiple  outline"
              },
              {
                  "id": "numeric-5-box-outline",
                  "name": "numeric  5  box  outline"
              },
              {
                  "id": "numeric-5-circle",
                  "name": "numeric  5  circle"
              },
              {
                  "id": "numeric-5-circle-outline",
                  "name": "numeric  5  circle  outline"
              },
              {
                  "id": "numeric-6",
                  "name": "numeric  6"
              },
              {
                  "id": "numeric-6-box",
                  "name": "numeric  6  box"
              },
              {
                  "id": "numeric-6-box-multiple",
                  "name": "numeric  6  box  multiple"
              },
              {
                  "id": "numeric-6-box-multiple-outline",
                  "name": "numeric  6  box  multiple  outline"
              },
              {
                  "id": "numeric-6-box-outline",
                  "name": "numeric  6  box  outline"
              },
              {
                  "id": "numeric-6-circle",
                  "name": "numeric  6  circle"
              },
              {
                  "id": "numeric-6-circle-outline",
                  "name": "numeric  6  circle  outline"
              },
              {
                  "id": "numeric-7",
                  "name": "numeric  7"
              },
              {
                  "id": "numeric-7-box",
                  "name": "numeric  7  box"
              },
              {
                  "id": "numeric-7-box-multiple",
                  "name": "numeric  7  box  multiple"
              },
              {
                  "id": "numeric-7-box-multiple-outline",
                  "name": "numeric  7  box  multiple  outline"
              },
              {
                  "id": "numeric-7-box-outline",
                  "name": "numeric  7  box  outline"
              },
              {
                  "id": "numeric-7-circle",
                  "name": "numeric  7  circle"
              },
              {
                  "id": "numeric-7-circle-outline",
                  "name": "numeric  7  circle  outline"
              },
              {
                  "id": "numeric-8",
                  "name": "numeric  8"
              },
              {
                  "id": "numeric-8-box",
                  "name": "numeric  8  box"
              },
              {
                  "id": "numeric-8-box-multiple",
                  "name": "numeric  8  box  multiple"
              },
              {
                  "id": "numeric-8-box-multiple-outline",
                  "name": "numeric  8  box  multiple  outline"
              },
              {
                  "id": "numeric-8-box-outline",
                  "name": "numeric  8  box  outline"
              },
              {
                  "id": "numeric-8-circle",
                  "name": "numeric  8  circle"
              },
              {
                  "id": "numeric-8-circle-outline",
                  "name": "numeric  8  circle  outline"
              },
              {
                  "id": "numeric-9",
                  "name": "numeric  9"
              },
              {
                  "id": "numeric-9-box",
                  "name": "numeric  9  box"
              },
              {
                  "id": "numeric-9-box-multiple",
                  "name": "numeric  9  box  multiple"
              },
              {
                  "id": "numeric-9-box-multiple-outline",
                  "name": "numeric  9  box  multiple  outline"
              },
              {
                  "id": "numeric-9-box-outline",
                  "name": "numeric  9  box  outline"
              },
              {
                  "id": "numeric-9-circle",
                  "name": "numeric  9  circle"
              },
              {
                  "id": "numeric-9-circle-outline",
                  "name": "numeric  9  circle  outline"
              },
              {
                  "id": "numeric-9-plus",
                  "name": "numeric  9  plus"
              },
              {
                  "id": "numeric-9-plus-box",
                  "name": "numeric  9  plus  box"
              },
              {
                  "id": "numeric-9-plus-box-multiple",
                  "name": "numeric  9  plus  box  multiple"
              },
              {
                  "id": "numeric-9-plus-box-multiple-outline",
                  "name": "numeric  9  plus  box  multiple  outline"
              },
              {
                  "id": "numeric-9-plus-box-outline",
                  "name": "numeric  9  plus  box  outline"
              },
              {
                  "id": "numeric-9-plus-circle",
                  "name": "numeric  9  plus  circle"
              },
              {
                  "id": "numeric-9-plus-circle-outline",
                  "name": "numeric  9  plus  circle  outline"
              },
              {
                  "id": "numeric-negative-1",
                  "name": "numeric  negative  1"
              },
              {
                  "id": "numeric-off",
                  "name": "numeric  off"
              },
              {
                  "id": "numeric-positive-1",
                  "name": "numeric  positive  1"
              },
              {
                  "id": "nut",
                  "name": "nut"
              },
              {
                  "id": "nutrition",
                  "name": "nutrition"
              },
              {
                  "id": "nuxt",
                  "name": "nuxt"
              },
              {
                  "id": "oar",
                  "name": "oar"
              },
              {
                  "id": "ocarina",
                  "name": "ocarina"
              },
              {
                  "id": "oci",
                  "name": "oci"
              },
              {
                  "id": "ocr",
                  "name": "ocr"
              },
              {
                  "id": "octagon",
                  "name": "octagon"
              },
              {
                  "id": "octagon-outline",
                  "name": "octagon  outline"
              },
              {
                  "id": "octagram",
                  "name": "octagram"
              },
              {
                  "id": "octagram-edit",
                  "name": "octagram  edit"
              },
              {
                  "id": "octagram-edit-outline",
                  "name": "octagram  edit  outline"
              },
              {
                  "id": "octagram-minus",
                  "name": "octagram  minus"
              },
              {
                  "id": "octagram-minus-outline",
                  "name": "octagram  minus  outline"
              },
              {
                  "id": "octagram-outline",
                  "name": "octagram  outline"
              },
              {
                  "id": "octagram-plus",
                  "name": "octagram  plus"
              },
              {
                  "id": "octagram-plus-outline",
                  "name": "octagram  plus  outline"
              },
              {
                  "id": "octahedron",
                  "name": "octahedron"
              },
              {
                  "id": "octahedron-off",
                  "name": "octahedron  off"
              },
              {
                  "id": "odnoklassniki",
                  "name": "odnoklassniki"
              },
              {
                  "id": "offer",
                  "name": "offer"
              },
              {
                  "id": "office-building",
                  "name": "office  building"
              },
              {
                  "id": "office-building-cog",
                  "name": "office  building  cog"
              },
              {
                  "id": "office-building-cog-outline",
                  "name": "office  building  cog  outline"
              },
              {
                  "id": "office-building-marker",
                  "name": "office  building  marker"
              },
              {
                  "id": "office-building-marker-outline",
                  "name": "office  building  marker  outline"
              },
              {
                  "id": "office-building-minus",
                  "name": "office  building  minus"
              },
              {
                  "id": "office-building-minus-outline",
                  "name": "office  building  minus  outline"
              },
              {
                  "id": "office-building-outline",
                  "name": "office  building  outline"
              },
              {
                  "id": "office-building-plus",
                  "name": "office  building  plus"
              },
              {
                  "id": "office-building-plus-outline",
                  "name": "office  building  plus  outline"
              },
              {
                  "id": "office-building-remove",
                  "name": "office  building  remove"
              },
              {
                  "id": "office-building-remove-outline",
                  "name": "office  building  remove  outline"
              },
              {
                  "id": "oil",
                  "name": "oil"
              },
              {
                  "id": "oil-lamp",
                  "name": "oil  lamp"
              },
              {
                  "id": "oil-level",
                  "name": "oil  level"
              },
              {
                  "id": "oil-temperature",
                  "name": "oil  temperature"
              },
              {
                  "id": "om",
                  "name": "om"
              },
              {
                  "id": "omega",
                  "name": "omega"
              },
              {
                  "id": "one-up",
                  "name": "one  up"
              },
              {
                  "id": "onepassword",
                  "name": "onepassword"
              },
              {
                  "id": "opacity",
                  "name": "opacity"
              },
              {
                  "id": "open-in-app",
                  "name": "open  in  app"
              },
              {
                  "id": "open-in-new",
                  "name": "open  in  new"
              },
              {
                  "id": "open-source-initiative",
                  "name": "open  source  initiative"
              },
              {
                  "id": "openid",
                  "name": "openid"
              },
              {
                  "id": "opera",
                  "name": "opera"
              },
              {
                  "id": "orbit",
                  "name": "orbit"
              },
              {
                  "id": "orbit-variant",
                  "name": "orbit  variant"
              },
              {
                  "id": "order-alphabetical-ascending",
                  "name": "order  alphabetical  ascending"
              },
              {
                  "id": "order-alphabetical-descending",
                  "name": "order  alphabetical  descending"
              },
              {
                  "id": "order-bool-ascending",
                  "name": "order  bool  ascending"
              },
              {
                  "id": "order-bool-ascending-variant",
                  "name": "order  bool  ascending  variant"
              },
              {
                  "id": "order-bool-descending",
                  "name": "order  bool  descending"
              },
              {
                  "id": "order-bool-descending-variant",
                  "name": "order  bool  descending  variant"
              },
              {
                  "id": "order-numeric-ascending",
                  "name": "order  numeric  ascending"
              },
              {
                  "id": "order-numeric-descending",
                  "name": "order  numeric  descending"
              },
              {
                  "id": "origin",
                  "name": "origin"
              },
              {
                  "id": "ornament",
                  "name": "ornament"
              },
              {
                  "id": "ornament-variant",
                  "name": "ornament  variant"
              },
              {
                  "id": "outdoor-lamp",
                  "name": "outdoor  lamp"
              },
              {
                  "id": "overscan",
                  "name": "overscan"
              },
              {
                  "id": "owl",
                  "name": "owl"
              },
              {
                  "id": "pac-man",
                  "name": "pac  man"
              },
              {
                  "id": "package",
                  "name": "package"
              },
              {
                  "id": "package-check",
                  "name": "package  check"
              },
              {
                  "id": "package-down",
                  "name": "package  down"
              },
              {
                  "id": "package-up",
                  "name": "package  up"
              },
              {
                  "id": "package-variant",
                  "name": "package  variant"
              },
              {
                  "id": "package-variant-closed",
                  "name": "package  variant  closed"
              },
              {
                  "id": "package-variant-closed-check",
                  "name": "package  variant  closed  check"
              },
              {
                  "id": "package-variant-closed-minus",
                  "name": "package  variant  closed  minus"
              },
              {
                  "id": "package-variant-closed-plus",
                  "name": "package  variant  closed  plus"
              },
              {
                  "id": "package-variant-closed-remove",
                  "name": "package  variant  closed  remove"
              },
              {
                  "id": "package-variant-minus",
                  "name": "package  variant  minus"
              },
              {
                  "id": "package-variant-plus",
                  "name": "package  variant  plus"
              },
              {
                  "id": "package-variant-remove",
                  "name": "package  variant  remove"
              },
              {
                  "id": "page-first",
                  "name": "page  first"
              },
              {
                  "id": "page-last",
                  "name": "page  last"
              },
              {
                  "id": "page-layout-body",
                  "name": "page  layout  body"
              },
              {
                  "id": "page-layout-footer",
                  "name": "page  layout  footer"
              },
              {
                  "id": "page-layout-header",
                  "name": "page  layout  header"
              },
              {
                  "id": "page-layout-header-footer",
                  "name": "page  layout  header  footer"
              },
              {
                  "id": "page-layout-sidebar-left",
                  "name": "page  layout  sidebar  left"
              },
              {
                  "id": "page-layout-sidebar-right",
                  "name": "page  layout  sidebar  right"
              },
              {
                  "id": "page-next",
                  "name": "page  next"
              },
              {
                  "id": "page-next-outline",
                  "name": "page  next  outline"
              },
              {
                  "id": "page-previous",
                  "name": "page  previous"
              },
              {
                  "id": "page-previous-outline",
                  "name": "page  previous  outline"
              },
              {
                  "id": "pail",
                  "name": "pail"
              },
              {
                  "id": "pail-minus",
                  "name": "pail  minus"
              },
              {
                  "id": "pail-minus-outline",
                  "name": "pail  minus  outline"
              },
              {
                  "id": "pail-off",
                  "name": "pail  off"
              },
              {
                  "id": "pail-off-outline",
                  "name": "pail  off  outline"
              },
              {
                  "id": "pail-outline",
                  "name": "pail  outline"
              },
              {
                  "id": "pail-plus",
                  "name": "pail  plus"
              },
              {
                  "id": "pail-plus-outline",
                  "name": "pail  plus  outline"
              },
              {
                  "id": "pail-remove",
                  "name": "pail  remove"
              },
              {
                  "id": "pail-remove-outline",
                  "name": "pail  remove  outline"
              },
              {
                  "id": "palette",
                  "name": "palette"
              },
              {
                  "id": "palette-advanced",
                  "name": "palette  advanced"
              },
              {
                  "id": "palette-outline",
                  "name": "palette  outline"
              },
              {
                  "id": "palette-swatch",
                  "name": "palette  swatch"
              },
              {
                  "id": "palette-swatch-outline",
                  "name": "palette  swatch  outline"
              },
              {
                  "id": "palette-swatch-variant",
                  "name": "palette  swatch  variant"
              },
              {
                  "id": "palm-tree",
                  "name": "palm  tree"
              },
              {
                  "id": "pan",
                  "name": "pan"
              },
              {
                  "id": "pan-bottom-left",
                  "name": "pan  bottom  left"
              },
              {
                  "id": "pan-bottom-right",
                  "name": "pan  bottom  right"
              },
              {
                  "id": "pan-down",
                  "name": "pan  down"
              },
              {
                  "id": "pan-horizontal",
                  "name": "pan  horizontal"
              },
              {
                  "id": "pan-left",
                  "name": "pan  left"
              },
              {
                  "id": "pan-right",
                  "name": "pan  right"
              },
              {
                  "id": "pan-top-left",
                  "name": "pan  top  left"
              },
              {
                  "id": "pan-top-right",
                  "name": "pan  top  right"
              },
              {
                  "id": "pan-up",
                  "name": "pan  up"
              },
              {
                  "id": "pan-vertical",
                  "name": "pan  vertical"
              },
              {
                  "id": "panda",
                  "name": "panda"
              },
              {
                  "id": "pandora",
                  "name": "pandora"
              },
              {
                  "id": "panorama",
                  "name": "panorama"
              },
              {
                  "id": "panorama-fisheye",
                  "name": "panorama  fisheye"
              },
              {
                  "id": "panorama-horizontal",
                  "name": "panorama  horizontal"
              },
              {
                  "id": "panorama-horizontal-outline",
                  "name": "panorama  horizontal  outline"
              },
              {
                  "id": "panorama-outline",
                  "name": "panorama  outline"
              },
              {
                  "id": "panorama-sphere",
                  "name": "panorama  sphere"
              },
              {
                  "id": "panorama-sphere-outline",
                  "name": "panorama  sphere  outline"
              },
              {
                  "id": "panorama-variant",
                  "name": "panorama  variant"
              },
              {
                  "id": "panorama-variant-outline",
                  "name": "panorama  variant  outline"
              },
              {
                  "id": "panorama-vertical",
                  "name": "panorama  vertical"
              },
              {
                  "id": "panorama-vertical-outline",
                  "name": "panorama  vertical  outline"
              },
              {
                  "id": "panorama-wide-angle",
                  "name": "panorama  wide  angle"
              },
              {
                  "id": "panorama-wide-angle-outline",
                  "name": "panorama  wide  angle  outline"
              },
              {
                  "id": "paper-cut-vertical",
                  "name": "paper  cut  vertical"
              },
              {
                  "id": "paper-roll",
                  "name": "paper  roll"
              },
              {
                  "id": "paper-roll-outline",
                  "name": "paper  roll  outline"
              },
              {
                  "id": "paperclip",
                  "name": "paperclip"
              },
              {
                  "id": "paperclip-check",
                  "name": "paperclip  check"
              },
              {
                  "id": "paperclip-lock",
                  "name": "paperclip  lock"
              },
              {
                  "id": "paperclip-minus",
                  "name": "paperclip  minus"
              },
              {
                  "id": "paperclip-off",
                  "name": "paperclip  off"
              },
              {
                  "id": "paperclip-plus",
                  "name": "paperclip  plus"
              },
              {
                  "id": "paperclip-remove",
                  "name": "paperclip  remove"
              },
              {
                  "id": "parachute",
                  "name": "parachute"
              },
              {
                  "id": "parachute-outline",
                  "name": "parachute  outline"
              },
              {
                  "id": "paragliding",
                  "name": "paragliding"
              },
              {
                  "id": "parking",
                  "name": "parking"
              },
              {
                  "id": "party-popper",
                  "name": "party  popper"
              },
              {
                  "id": "passport",
                  "name": "passport"
              },
              {
                  "id": "passport-biometric",
                  "name": "passport  biometric"
              },
              {
                  "id": "pasta",
                  "name": "pasta"
              },
              {
                  "id": "patio-heater",
                  "name": "patio  heater"
              },
              {
                  "id": "patreon",
                  "name": "patreon"
              },
              {
                  "id": "pause",
                  "name": "pause"
              },
              {
                  "id": "pause-box",
                  "name": "pause  box"
              },
              {
                  "id": "pause-box-outline",
                  "name": "pause  box  outline"
              },
              {
                  "id": "pause-circle",
                  "name": "pause  circle"
              },
              {
                  "id": "pause-circle-outline",
                  "name": "pause  circle  outline"
              },
              {
                  "id": "pause-octagon",
                  "name": "pause  octagon"
              },
              {
                  "id": "pause-octagon-outline",
                  "name": "pause  octagon  outline"
              },
              {
                  "id": "paw",
                  "name": "paw"
              },
              {
                  "id": "paw-off",
                  "name": "paw  off"
              },
              {
                  "id": "paw-off-outline",
                  "name": "paw  off  outline"
              },
              {
                  "id": "paw-outline",
                  "name": "paw  outline"
              },
              {
                  "id": "peace",
                  "name": "peace"
              },
              {
                  "id": "peanut",
                  "name": "peanut"
              },
              {
                  "id": "peanut-off",
                  "name": "peanut  off"
              },
              {
                  "id": "peanut-off-outline",
                  "name": "peanut  off  outline"
              },
              {
                  "id": "peanut-outline",
                  "name": "peanut  outline"
              },
              {
                  "id": "pen",
                  "name": "pen"
              },
              {
                  "id": "pen-lock",
                  "name": "pen  lock"
              },
              {
                  "id": "pen-minus",
                  "name": "pen  minus"
              },
              {
                  "id": "pen-off",
                  "name": "pen  off"
              },
              {
                  "id": "pen-plus",
                  "name": "pen  plus"
              },
              {
                  "id": "pen-remove",
                  "name": "pen  remove"
              },
              {
                  "id": "pencil",
                  "name": "pencil"
              },
              {
                  "id": "pencil-box",
                  "name": "pencil  box"
              },
              {
                  "id": "pencil-box-multiple",
                  "name": "pencil  box  multiple"
              },
              {
                  "id": "pencil-box-multiple-outline",
                  "name": "pencil  box  multiple  outline"
              },
              {
                  "id": "pencil-box-outline",
                  "name": "pencil  box  outline"
              },
              {
                  "id": "pencil-circle",
                  "name": "pencil  circle"
              },
              {
                  "id": "pencil-circle-outline",
                  "name": "pencil  circle  outline"
              },
              {
                  "id": "pencil-lock",
                  "name": "pencil  lock"
              },
              {
                  "id": "pencil-lock-outline",
                  "name": "pencil  lock  outline"
              },
              {
                  "id": "pencil-minus",
                  "name": "pencil  minus"
              },
              {
                  "id": "pencil-minus-outline",
                  "name": "pencil  minus  outline"
              },
              {
                  "id": "pencil-off",
                  "name": "pencil  off"
              },
              {
                  "id": "pencil-off-outline",
                  "name": "pencil  off  outline"
              },
              {
                  "id": "pencil-outline",
                  "name": "pencil  outline"
              },
              {
                  "id": "pencil-plus",
                  "name": "pencil  plus"
              },
              {
                  "id": "pencil-plus-outline",
                  "name": "pencil  plus  outline"
              },
              {
                  "id": "pencil-remove",
                  "name": "pencil  remove"
              },
              {
                  "id": "pencil-remove-outline",
                  "name": "pencil  remove  outline"
              },
              {
                  "id": "pencil-ruler",
                  "name": "pencil  ruler"
              },
              {
                  "id": "pencil-ruler-outline",
                  "name": "pencil  ruler  outline"
              },
              {
                  "id": "penguin",
                  "name": "penguin"
              },
              {
                  "id": "pentagon",
                  "name": "pentagon"
              },
              {
                  "id": "pentagon-outline",
                  "name": "pentagon  outline"
              },
              {
                  "id": "pentagram",
                  "name": "pentagram"
              },
              {
                  "id": "percent",
                  "name": "percent"
              },
              {
                  "id": "percent-box",
                  "name": "percent  box"
              },
              {
                  "id": "percent-box-outline",
                  "name": "percent  box  outline"
              },
              {
                  "id": "percent-circle",
                  "name": "percent  circle"
              },
              {
                  "id": "percent-circle-outline",
                  "name": "percent  circle  outline"
              },
              {
                  "id": "percent-outline",
                  "name": "percent  outline"
              },
              {
                  "id": "periodic-table",
                  "name": "periodic  table"
              },
              {
                  "id": "perspective-less",
                  "name": "perspective  less"
              },
              {
                  "id": "perspective-more",
                  "name": "perspective  more"
              },
              {
                  "id": "ph",
                  "name": "ph"
              },
              {
                  "id": "phone",
                  "name": "phone"
              },
              {
                  "id": "phone-alert",
                  "name": "phone  alert"
              },
              {
                  "id": "phone-alert-outline",
                  "name": "phone  alert  outline"
              },
              {
                  "id": "phone-bluetooth",
                  "name": "phone  bluetooth"
              },
              {
                  "id": "phone-bluetooth-outline",
                  "name": "phone  bluetooth  outline"
              },
              {
                  "id": "phone-cancel",
                  "name": "phone  cancel"
              },
              {
                  "id": "phone-cancel-outline",
                  "name": "phone  cancel  outline"
              },
              {
                  "id": "phone-check",
                  "name": "phone  check"
              },
              {
                  "id": "phone-check-outline",
                  "name": "phone  check  outline"
              },
              {
                  "id": "phone-classic",
                  "name": "phone  classic"
              },
              {
                  "id": "phone-classic-off",
                  "name": "phone  classic  off"
              },
              {
                  "id": "phone-clock",
                  "name": "phone  clock"
              },
              {
                  "id": "phone-dial",
                  "name": "phone  dial"
              },
              {
                  "id": "phone-dial-outline",
                  "name": "phone  dial  outline"
              },
              {
                  "id": "phone-forward",
                  "name": "phone  forward"
              },
              {
                  "id": "phone-forward-outline",
                  "name": "phone  forward  outline"
              },
              {
                  "id": "phone-hangup",
                  "name": "phone  hangup"
              },
              {
                  "id": "phone-hangup-outline",
                  "name": "phone  hangup  outline"
              },
              {
                  "id": "phone-in-talk",
                  "name": "phone  in  talk"
              },
              {
                  "id": "phone-in-talk-outline",
                  "name": "phone  in  talk  outline"
              },
              {
                  "id": "phone-incoming",
                  "name": "phone  incoming"
              },
              {
                  "id": "phone-incoming-outgoing",
                  "name": "phone  incoming  outgoing"
              },
              {
                  "id": "phone-incoming-outgoing-outline",
                  "name": "phone  incoming  outgoing  outline"
              },
              {
                  "id": "phone-incoming-outline",
                  "name": "phone  incoming  outline"
              },
              {
                  "id": "phone-lock",
                  "name": "phone  lock"
              },
              {
                  "id": "phone-lock-outline",
                  "name": "phone  lock  outline"
              },
              {
                  "id": "phone-log",
                  "name": "phone  log"
              },
              {
                  "id": "phone-log-outline",
                  "name": "phone  log  outline"
              },
              {
                  "id": "phone-message",
                  "name": "phone  message"
              },
              {
                  "id": "phone-message-outline",
                  "name": "phone  message  outline"
              },
              {
                  "id": "phone-minus",
                  "name": "phone  minus"
              },
              {
                  "id": "phone-minus-outline",
                  "name": "phone  minus  outline"
              },
              {
                  "id": "phone-missed",
                  "name": "phone  missed"
              },
              {
                  "id": "phone-missed-outline",
                  "name": "phone  missed  outline"
              },
              {
                  "id": "phone-off",
                  "name": "phone  off"
              },
              {
                  "id": "phone-off-outline",
                  "name": "phone  off  outline"
              },
              {
                  "id": "phone-outgoing",
                  "name": "phone  outgoing"
              },
              {
                  "id": "phone-outgoing-outline",
                  "name": "phone  outgoing  outline"
              },
              {
                  "id": "phone-outline",
                  "name": "phone  outline"
              },
              {
                  "id": "phone-paused",
                  "name": "phone  paused"
              },
              {
                  "id": "phone-paused-outline",
                  "name": "phone  paused  outline"
              },
              {
                  "id": "phone-plus",
                  "name": "phone  plus"
              },
              {
                  "id": "phone-plus-outline",
                  "name": "phone  plus  outline"
              },
              {
                  "id": "phone-refresh",
                  "name": "phone  refresh"
              },
              {
                  "id": "phone-refresh-outline",
                  "name": "phone  refresh  outline"
              },
              {
                  "id": "phone-remove",
                  "name": "phone  remove"
              },
              {
                  "id": "phone-remove-outline",
                  "name": "phone  remove  outline"
              },
              {
                  "id": "phone-return",
                  "name": "phone  return"
              },
              {
                  "id": "phone-return-outline",
                  "name": "phone  return  outline"
              },
              {
                  "id": "phone-ring",
                  "name": "phone  ring"
              },
              {
                  "id": "phone-ring-outline",
                  "name": "phone  ring  outline"
              },
              {
                  "id": "phone-rotate-landscape",
                  "name": "phone  rotate  landscape"
              },
              {
                  "id": "phone-rotate-portrait",
                  "name": "phone  rotate  portrait"
              },
              {
                  "id": "phone-settings",
                  "name": "phone  settings"
              },
              {
                  "id": "phone-settings-outline",
                  "name": "phone  settings  outline"
              },
              {
                  "id": "phone-sync",
                  "name": "phone  sync"
              },
              {
                  "id": "phone-sync-outline",
                  "name": "phone  sync  outline"
              },
              {
                  "id": "phone-voip",
                  "name": "phone  voip"
              },
              {
                  "id": "pi",
                  "name": "pi"
              },
              {
                  "id": "pi-box",
                  "name": "pi  box"
              },
              {
                  "id": "pi-hole",
                  "name": "pi  hole"
              },
              {
                  "id": "piano",
                  "name": "piano"
              },
              {
                  "id": "piano-off",
                  "name": "piano  off"
              },
              {
                  "id": "pickaxe",
                  "name": "pickaxe"
              },
              {
                  "id": "picture-in-picture-bottom-right",
                  "name": "picture  in  picture  bottom  right"
              },
              {
                  "id": "picture-in-picture-bottom-right-outline",
                  "name": "picture  in  picture  bottom  right  outline"
              },
              {
                  "id": "picture-in-picture-top-right",
                  "name": "picture  in  picture  top  right"
              },
              {
                  "id": "picture-in-picture-top-right-outline",
                  "name": "picture  in  picture  top  right  outline"
              },
              {
                  "id": "pier",
                  "name": "pier"
              },
              {
                  "id": "pier-crane",
                  "name": "pier  crane"
              },
              {
                  "id": "pig",
                  "name": "pig"
              },
              {
                  "id": "pig-variant",
                  "name": "pig  variant"
              },
              {
                  "id": "pig-variant-outline",
                  "name": "pig  variant  outline"
              },
              {
                  "id": "piggy-bank",
                  "name": "piggy  bank"
              },
              {
                  "id": "piggy-bank-outline",
                  "name": "piggy  bank  outline"
              },
              {
                  "id": "pill",
                  "name": "pill"
              },
              {
                  "id": "pill-multiple",
                  "name": "pill  multiple"
              },
              {
                  "id": "pill-off",
                  "name": "pill  off"
              },
              {
                  "id": "pillar",
                  "name": "pillar"
              },
              {
                  "id": "pin",
                  "name": "pin"
              },
              {
                  "id": "pin-off",
                  "name": "pin  off"
              },
              {
                  "id": "pin-off-outline",
                  "name": "pin  off  outline"
              },
              {
                  "id": "pin-outline",
                  "name": "pin  outline"
              },
              {
                  "id": "pine-tree",
                  "name": "pine  tree"
              },
              {
                  "id": "pine-tree-box",
                  "name": "pine  tree  box"
              },
              {
                  "id": "pine-tree-fire",
                  "name": "pine  tree  fire"
              },
              {
                  "id": "pine-tree-variant",
                  "name": "pine  tree  variant"
              },
              {
                  "id": "pine-tree-variant-outline",
                  "name": "pine  tree  variant  outline"
              },
              {
                  "id": "pinterest",
                  "name": "pinterest"
              },
              {
                  "id": "pinwheel",
                  "name": "pinwheel"
              },
              {
                  "id": "pinwheel-outline",
                  "name": "pinwheel  outline"
              },
              {
                  "id": "pipe",
                  "name": "pipe"
              },
              {
                  "id": "pipe-disconnected",
                  "name": "pipe  disconnected"
              },
              {
                  "id": "pipe-leak",
                  "name": "pipe  leak"
              },
              {
                  "id": "pipe-valve",
                  "name": "pipe  valve"
              },
              {
                  "id": "pipe-wrench",
                  "name": "pipe  wrench"
              },
              {
                  "id": "pirate",
                  "name": "pirate"
              },
              {
                  "id": "pistol",
                  "name": "pistol"
              },
              {
                  "id": "piston",
                  "name": "piston"
              },
              {
                  "id": "pitchfork",
                  "name": "pitchfork"
              },
              {
                  "id": "pizza",
                  "name": "pizza"
              },
              {
                  "id": "plane-car",
                  "name": "plane  car"
              },
              {
                  "id": "plane-train",
                  "name": "plane  train"
              },
              {
                  "id": "play",
                  "name": "play"
              },
              {
                  "id": "play-box",
                  "name": "play  box"
              },
              {
                  "id": "play-box-edit-outline",
                  "name": "play  box  edit  outline"
              },
              {
                  "id": "play-box-lock",
                  "name": "play  box  lock"
              },
              {
                  "id": "play-box-lock-open",
                  "name": "play  box  lock  open"
              },
              {
                  "id": "play-box-lock-open-outline",
                  "name": "play  box  lock  open  outline"
              },
              {
                  "id": "play-box-lock-outline",
                  "name": "play  box  lock  outline"
              },
              {
                  "id": "play-box-multiple",
                  "name": "play  box  multiple"
              },
              {
                  "id": "play-box-multiple-outline",
                  "name": "play  box  multiple  outline"
              },
              {
                  "id": "play-box-outline",
                  "name": "play  box  outline"
              },
              {
                  "id": "play-circle",
                  "name": "play  circle"
              },
              {
                  "id": "play-circle-outline",
                  "name": "play  circle  outline"
              },
              {
                  "id": "play-network",
                  "name": "play  network"
              },
              {
                  "id": "play-network-outline",
                  "name": "play  network  outline"
              },
              {
                  "id": "play-outline",
                  "name": "play  outline"
              },
              {
                  "id": "play-pause",
                  "name": "play  pause"
              },
              {
                  "id": "play-protected-content",
                  "name": "play  protected  content"
              },
              {
                  "id": "play-speed",
                  "name": "play  speed"
              },
              {
                  "id": "playlist-check",
                  "name": "playlist  check"
              },
              {
                  "id": "playlist-edit",
                  "name": "playlist  edit"
              },
              {
                  "id": "playlist-minus",
                  "name": "playlist  minus"
              },
              {
                  "id": "playlist-music",
                  "name": "playlist  music"
              },
              {
                  "id": "playlist-music-outline",
                  "name": "playlist  music  outline"
              },
              {
                  "id": "playlist-play",
                  "name": "playlist  play"
              },
              {
                  "id": "playlist-plus",
                  "name": "playlist  plus"
              },
              {
                  "id": "playlist-remove",
                  "name": "playlist  remove"
              },
              {
                  "id": "playlist-star",
                  "name": "playlist  star"
              },
              {
                  "id": "plex",
                  "name": "plex"
              },
              {
                  "id": "pliers",
                  "name": "pliers"
              },
              {
                  "id": "plus",
                  "name": "plus"
              },
              {
                  "id": "plus-box",
                  "name": "plus  box"
              },
              {
                  "id": "plus-box-multiple",
                  "name": "plus  box  multiple"
              },
              {
                  "id": "plus-box-multiple-outline",
                  "name": "plus  box  multiple  outline"
              },
              {
                  "id": "plus-box-outline",
                  "name": "plus  box  outline"
              },
              {
                  "id": "plus-circle",
                  "name": "plus  circle"
              },
              {
                  "id": "plus-circle-multiple",
                  "name": "plus  circle  multiple"
              },
              {
                  "id": "plus-circle-multiple-outline",
                  "name": "plus  circle  multiple  outline"
              },
              {
                  "id": "plus-circle-outline",
                  "name": "plus  circle  outline"
              },
              {
                  "id": "plus-lock",
                  "name": "plus  lock"
              },
              {
                  "id": "plus-lock-open",
                  "name": "plus  lock  open"
              },
              {
                  "id": "plus-minus",
                  "name": "plus  minus"
              },
              {
                  "id": "plus-minus-box",
                  "name": "plus  minus  box"
              },
              {
                  "id": "plus-minus-variant",
                  "name": "plus  minus  variant"
              },
              {
                  "id": "plus-network",
                  "name": "plus  network"
              },
              {
                  "id": "plus-network-outline",
                  "name": "plus  network  outline"
              },
              {
                  "id": "plus-outline",
                  "name": "plus  outline"
              },
              {
                  "id": "plus-thick",
                  "name": "plus  thick"
              },
              {
                  "id": "podcast",
                  "name": "podcast"
              },
              {
                  "id": "podium",
                  "name": "podium"
              },
              {
                  "id": "podium-bronze",
                  "name": "podium  bronze"
              },
              {
                  "id": "podium-gold",
                  "name": "podium  gold"
              },
              {
                  "id": "podium-silver",
                  "name": "podium  silver"
              },
              {
                  "id": "point-of-sale",
                  "name": "point  of  sale"
              },
              {
                  "id": "pokeball",
                  "name": "pokeball"
              },
              {
                  "id": "pokemon-go",
                  "name": "pokemon  go"
              },
              {
                  "id": "poker-chip",
                  "name": "poker  chip"
              },
              {
                  "id": "polaroid",
                  "name": "polaroid"
              },
              {
                  "id": "police-badge",
                  "name": "police  badge"
              },
              {
                  "id": "police-badge-outline",
                  "name": "police  badge  outline"
              },
              {
                  "id": "police-station",
                  "name": "police  station"
              },
              {
                  "id": "poll",
                  "name": "poll"
              },
              {
                  "id": "polo",
                  "name": "polo"
              },
              {
                  "id": "polymer",
                  "name": "polymer"
              },
              {
                  "id": "pool",
                  "name": "pool"
              },
              {
                  "id": "pool-thermometer",
                  "name": "pool  thermometer"
              },
              {
                  "id": "popcorn",
                  "name": "popcorn"
              },
              {
                  "id": "post",
                  "name": "post"
              },
              {
                  "id": "post-lamp",
                  "name": "post  lamp"
              },
              {
                  "id": "post-outline",
                  "name": "post  outline"
              },
              {
                  "id": "postage-stamp",
                  "name": "postage  stamp"
              },
              {
                  "id": "pot",
                  "name": "pot"
              },
              {
                  "id": "pot-mix",
                  "name": "pot  mix"
              },
              {
                  "id": "pot-mix-outline",
                  "name": "pot  mix  outline"
              },
              {
                  "id": "pot-outline",
                  "name": "pot  outline"
              },
              {
                  "id": "pot-steam",
                  "name": "pot  steam"
              },
              {
                  "id": "pot-steam-outline",
                  "name": "pot  steam  outline"
              },
              {
                  "id": "pound",
                  "name": "pound"
              },
              {
                  "id": "pound-box",
                  "name": "pound  box"
              },
              {
                  "id": "pound-box-outline",
                  "name": "pound  box  outline"
              },
              {
                  "id": "power",
                  "name": "power"
              },
              {
                  "id": "power-cycle",
                  "name": "power  cycle"
              },
              {
                  "id": "power-off",
                  "name": "power  off"
              },
              {
                  "id": "power-on",
                  "name": "power  on"
              },
              {
                  "id": "power-plug",
                  "name": "power  plug"
              },
              {
                  "id": "power-plug-battery",
                  "name": "power  plug  battery"
              },
              {
                  "id": "power-plug-battery-outline",
                  "name": "power  plug  battery  outline"
              },
              {
                  "id": "power-plug-off",
                  "name": "power  plug  off"
              },
              {
                  "id": "power-plug-off-outline",
                  "name": "power  plug  off  outline"
              },
              {
                  "id": "power-plug-outline",
                  "name": "power  plug  outline"
              },
              {
                  "id": "power-settings",
                  "name": "power  settings"
              },
              {
                  "id": "power-sleep",
                  "name": "power  sleep"
              },
              {
                  "id": "power-socket",
                  "name": "power  socket"
              },
              {
                  "id": "power-socket-au",
                  "name": "power  socket  au"
              },
              {
                  "id": "power-socket-ch",
                  "name": "power  socket  ch"
              },
              {
                  "id": "power-socket-de",
                  "name": "power  socket  de"
              },
              {
                  "id": "power-socket-eu",
                  "name": "power  socket  eu"
              },
              {
                  "id": "power-socket-fr",
                  "name": "power  socket  fr"
              },
              {
                  "id": "power-socket-it",
                  "name": "power  socket  it"
              },
              {
                  "id": "power-socket-jp",
                  "name": "power  socket  jp"
              },
              {
                  "id": "power-socket-uk",
                  "name": "power  socket  uk"
              },
              {
                  "id": "power-socket-us",
                  "name": "power  socket  us"
              },
              {
                  "id": "power-standby",
                  "name": "power  standby"
              },
              {
                  "id": "powershell",
                  "name": "powershell"
              },
              {
                  "id": "prescription",
                  "name": "prescription"
              },
              {
                  "id": "presentation",
                  "name": "presentation"
              },
              {
                  "id": "presentation-play",
                  "name": "presentation  play"
              },
              {
                  "id": "pretzel",
                  "name": "pretzel"
              },
              {
                  "id": "printer",
                  "name": "printer"
              },
              {
                  "id": "printer-3d",
                  "name": "printer  3d"
              },
              {
                  "id": "printer-3d-nozzle",
                  "name": "printer  3d  nozzle"
              },
              {
                  "id": "printer-3d-nozzle-alert",
                  "name": "printer  3d  nozzle  alert"
              },
              {
                  "id": "printer-3d-nozzle-alert-outline",
                  "name": "printer  3d  nozzle  alert  outline"
              },
              {
                  "id": "printer-3d-nozzle-heat",
                  "name": "printer  3d  nozzle  heat"
              },
              {
                  "id": "printer-3d-nozzle-heat-outline",
                  "name": "printer  3d  nozzle  heat  outline"
              },
              {
                  "id": "printer-3d-nozzle-off",
                  "name": "printer  3d  nozzle  off"
              },
              {
                  "id": "printer-3d-nozzle-off-outline",
                  "name": "printer  3d  nozzle  off  outline"
              },
              {
                  "id": "printer-3d-nozzle-outline",
                  "name": "printer  3d  nozzle  outline"
              },
              {
                  "id": "printer-3d-off",
                  "name": "printer  3d  off"
              },
              {
                  "id": "printer-alert",
                  "name": "printer  alert"
              },
              {
                  "id": "printer-check",
                  "name": "printer  check"
              },
              {
                  "id": "printer-eye",
                  "name": "printer  eye"
              },
              {
                  "id": "printer-off",
                  "name": "printer  off"
              },
              {
                  "id": "printer-off-outline",
                  "name": "printer  off  outline"
              },
              {
                  "id": "printer-outline",
                  "name": "printer  outline"
              },
              {
                  "id": "printer-pos",
                  "name": "printer  pos"
              },
              {
                  "id": "printer-pos-alert",
                  "name": "printer  pos  alert"
              },
              {
                  "id": "printer-pos-alert-outline",
                  "name": "printer  pos  alert  outline"
              },
              {
                  "id": "printer-pos-cancel",
                  "name": "printer  pos  cancel"
              },
              {
                  "id": "printer-pos-cancel-outline",
                  "name": "printer  pos  cancel  outline"
              },
              {
                  "id": "printer-pos-check",
                  "name": "printer  pos  check"
              },
              {
                  "id": "printer-pos-check-outline",
                  "name": "printer  pos  check  outline"
              },
              {
                  "id": "printer-pos-cog",
                  "name": "printer  pos  cog"
              },
              {
                  "id": "printer-pos-cog-outline",
                  "name": "printer  pos  cog  outline"
              },
              {
                  "id": "printer-pos-edit",
                  "name": "printer  pos  edit"
              },
              {
                  "id": "printer-pos-edit-outline",
                  "name": "printer  pos  edit  outline"
              },
              {
                  "id": "printer-pos-minus",
                  "name": "printer  pos  minus"
              },
              {
                  "id": "printer-pos-minus-outline",
                  "name": "printer  pos  minus  outline"
              },
              {
                  "id": "printer-pos-network",
                  "name": "printer  pos  network"
              },
              {
                  "id": "printer-pos-network-outline",
                  "name": "printer  pos  network  outline"
              },
              {
                  "id": "printer-pos-off",
                  "name": "printer  pos  off"
              },
              {
                  "id": "printer-pos-off-outline",
                  "name": "printer  pos  off  outline"
              },
              {
                  "id": "printer-pos-outline",
                  "name": "printer  pos  outline"
              },
              {
                  "id": "printer-pos-pause",
                  "name": "printer  pos  pause"
              },
              {
                  "id": "printer-pos-pause-outline",
                  "name": "printer  pos  pause  outline"
              },
              {
                  "id": "printer-pos-play",
                  "name": "printer  pos  play"
              },
              {
                  "id": "printer-pos-play-outline",
                  "name": "printer  pos  play  outline"
              },
              {
                  "id": "printer-pos-plus",
                  "name": "printer  pos  plus"
              },
              {
                  "id": "printer-pos-plus-outline",
                  "name": "printer  pos  plus  outline"
              },
              {
                  "id": "printer-pos-refresh",
                  "name": "printer  pos  refresh"
              },
              {
                  "id": "printer-pos-refresh-outline",
                  "name": "printer  pos  refresh  outline"
              },
              {
                  "id": "printer-pos-remove",
                  "name": "printer  pos  remove"
              },
              {
                  "id": "printer-pos-remove-outline",
                  "name": "printer  pos  remove  outline"
              },
              {
                  "id": "printer-pos-star",
                  "name": "printer  pos  star"
              },
              {
                  "id": "printer-pos-star-outline",
                  "name": "printer  pos  star  outline"
              },
              {
                  "id": "printer-pos-stop",
                  "name": "printer  pos  stop"
              },
              {
                  "id": "printer-pos-stop-outline",
                  "name": "printer  pos  stop  outline"
              },
              {
                  "id": "printer-pos-sync",
                  "name": "printer  pos  sync"
              },
              {
                  "id": "printer-pos-sync-outline",
                  "name": "printer  pos  sync  outline"
              },
              {
                  "id": "printer-pos-wrench",
                  "name": "printer  pos  wrench"
              },
              {
                  "id": "printer-pos-wrench-outline",
                  "name": "printer  pos  wrench  outline"
              },
              {
                  "id": "printer-search",
                  "name": "printer  search"
              },
              {
                  "id": "printer-settings",
                  "name": "printer  settings"
              },
              {
                  "id": "printer-wireless",
                  "name": "printer  wireless"
              },
              {
                  "id": "priority-high",
                  "name": "priority  high"
              },
              {
                  "id": "priority-low",
                  "name": "priority  low"
              },
              {
                  "id": "professional-hexagon",
                  "name": "professional  hexagon"
              },
              {
                  "id": "progress-alert",
                  "name": "progress  alert"
              },
              {
                  "id": "progress-check",
                  "name": "progress  check"
              },
              {
                  "id": "progress-clock",
                  "name": "progress  clock"
              },
              {
                  "id": "progress-close",
                  "name": "progress  close"
              },
              {
                  "id": "progress-download",
                  "name": "progress  download"
              },
              {
                  "id": "progress-helper",
                  "name": "progress  helper"
              },
              {
                  "id": "progress-pencil",
                  "name": "progress  pencil"
              },
              {
                  "id": "progress-question",
                  "name": "progress  question"
              },
              {
                  "id": "progress-star",
                  "name": "progress  star"
              },
              {
                  "id": "progress-star-four-points",
                  "name": "progress  star  four  points"
              },
              {
                  "id": "progress-upload",
                  "name": "progress  upload"
              },
              {
                  "id": "progress-wrench",
                  "name": "progress  wrench"
              },
              {
                  "id": "projector",
                  "name": "projector"
              },
              {
                  "id": "projector-off",
                  "name": "projector  off"
              },
              {
                  "id": "projector-screen",
                  "name": "projector  screen"
              },
              {
                  "id": "projector-screen-off",
                  "name": "projector  screen  off"
              },
              {
                  "id": "projector-screen-off-outline",
                  "name": "projector  screen  off  outline"
              },
              {
                  "id": "projector-screen-outline",
                  "name": "projector  screen  outline"
              },
              {
                  "id": "projector-screen-variant",
                  "name": "projector  screen  variant"
              },
              {
                  "id": "projector-screen-variant-off",
                  "name": "projector  screen  variant  off"
              },
              {
                  "id": "projector-screen-variant-off-outline",
                  "name": "projector  screen  variant  off  outline"
              },
              {
                  "id": "projector-screen-variant-outline",
                  "name": "projector  screen  variant  outline"
              },
              {
                  "id": "propane-tank",
                  "name": "propane  tank"
              },
              {
                  "id": "propane-tank-outline",
                  "name": "propane  tank  outline"
              },
              {
                  "id": "protocol",
                  "name": "protocol"
              },
              {
                  "id": "publish",
                  "name": "publish"
              },
              {
                  "id": "publish-off",
                  "name": "publish  off"
              },
              {
                  "id": "pulse",
                  "name": "pulse"
              },
              {
                  "id": "pump",
                  "name": "pump"
              },
              {
                  "id": "pump-off",
                  "name": "pump  off"
              },
              {
                  "id": "pumpkin",
                  "name": "pumpkin"
              },
              {
                  "id": "purse",
                  "name": "purse"
              },
              {
                  "id": "purse-outline",
                  "name": "purse  outline"
              },
              {
                  "id": "puzzle",
                  "name": "puzzle"
              },
              {
                  "id": "puzzle-check",
                  "name": "puzzle  check"
              },
              {
                  "id": "puzzle-check-outline",
                  "name": "puzzle  check  outline"
              },
              {
                  "id": "puzzle-edit",
                  "name": "puzzle  edit"
              },
              {
                  "id": "puzzle-edit-outline",
                  "name": "puzzle  edit  outline"
              },
              {
                  "id": "puzzle-heart",
                  "name": "puzzle  heart"
              },
              {
                  "id": "puzzle-heart-outline",
                  "name": "puzzle  heart  outline"
              },
              {
                  "id": "puzzle-minus",
                  "name": "puzzle  minus"
              },
              {
                  "id": "puzzle-minus-outline",
                  "name": "puzzle  minus  outline"
              },
              {
                  "id": "puzzle-outline",
                  "name": "puzzle  outline"
              },
              {
                  "id": "puzzle-plus",
                  "name": "puzzle  plus"
              },
              {
                  "id": "puzzle-plus-outline",
                  "name": "puzzle  plus  outline"
              },
              {
                  "id": "puzzle-remove",
                  "name": "puzzle  remove"
              },
              {
                  "id": "puzzle-remove-outline",
                  "name": "puzzle  remove  outline"
              },
              {
                  "id": "puzzle-star",
                  "name": "puzzle  star"
              },
              {
                  "id": "puzzle-star-outline",
                  "name": "puzzle  star  outline"
              },
              {
                  "id": "pyramid",
                  "name": "pyramid"
              },
              {
                  "id": "pyramid-off",
                  "name": "pyramid  off"
              },
              {
                  "id": "qi",
                  "name": "qi"
              },
              {
                  "id": "qqchat",
                  "name": "qqchat"
              },
              {
                  "id": "qrcode",
                  "name": "qrcode"
              },
              {
                  "id": "qrcode-edit",
                  "name": "qrcode  edit"
              },
              {
                  "id": "qrcode-minus",
                  "name": "qrcode  minus"
              },
              {
                  "id": "qrcode-plus",
                  "name": "qrcode  plus"
              },
              {
                  "id": "qrcode-remove",
                  "name": "qrcode  remove"
              },
              {
                  "id": "qrcode-scan",
                  "name": "qrcode  scan"
              },
              {
                  "id": "quadcopter",
                  "name": "quadcopter"
              },
              {
                  "id": "quality-high",
                  "name": "quality  high"
              },
              {
                  "id": "quality-low",
                  "name": "quality  low"
              },
              {
                  "id": "quality-medium",
                  "name": "quality  medium"
              },
              {
                  "id": "quora",
                  "name": "quora"
              },
              {
                  "id": "rabbit",
                  "name": "rabbit"
              },
              {
                  "id": "rabbit-variant",
                  "name": "rabbit  variant"
              },
              {
                  "id": "rabbit-variant-outline",
                  "name": "rabbit  variant  outline"
              },
              {
                  "id": "racing-helmet",
                  "name": "racing  helmet"
              },
              {
                  "id": "racquetball",
                  "name": "racquetball"
              },
              {
                  "id": "radar",
                  "name": "radar"
              },
              {
                  "id": "radiator",
                  "name": "radiator"
              },
              {
                  "id": "radiator-disabled",
                  "name": "radiator  disabled"
              },
              {
                  "id": "radiator-off",
                  "name": "radiator  off"
              },
              {
                  "id": "radio",
                  "name": "radio"
              },
              {
                  "id": "radio-am",
                  "name": "radio  am"
              },
              {
                  "id": "radio-fm",
                  "name": "radio  fm"
              },
              {
                  "id": "radio-handheld",
                  "name": "radio  handheld"
              },
              {
                  "id": "radio-off",
                  "name": "radio  off"
              },
              {
                  "id": "radio-tower",
                  "name": "radio  tower"
              },
              {
                  "id": "radioactive",
                  "name": "radioactive"
              },
              {
                  "id": "radioactive-circle",
                  "name": "radioactive  circle"
              },
              {
                  "id": "radioactive-circle-outline",
                  "name": "radioactive  circle  outline"
              },
              {
                  "id": "radioactive-off",
                  "name": "radioactive  off"
              },
              {
                  "id": "radiobox-blank",
                  "name": "radiobox  blank"
              },
              {
                  "id": "radiobox-indeterminate-variant",
                  "name": "radiobox  indeterminate  variant"
              },
              {
                  "id": "radiobox-marked",
                  "name": "radiobox  marked"
              },
              {
                  "id": "radiology-box",
                  "name": "radiology  box"
              },
              {
                  "id": "radiology-box-outline",
                  "name": "radiology  box  outline"
              },
              {
                  "id": "radius",
                  "name": "radius"
              },
              {
                  "id": "radius-outline",
                  "name": "radius  outline"
              },
              {
                  "id": "railroad-light",
                  "name": "railroad  light"
              },
              {
                  "id": "rake",
                  "name": "rake"
              },
              {
                  "id": "raspberry-pi",
                  "name": "raspberry  pi"
              },
              {
                  "id": "raw",
                  "name": "raw"
              },
              {
                  "id": "raw-off",
                  "name": "raw  off"
              },
              {
                  "id": "ray-end",
                  "name": "ray  end"
              },
              {
                  "id": "ray-end-arrow",
                  "name": "ray  end  arrow"
              },
              {
                  "id": "ray-start",
                  "name": "ray  start"
              },
              {
                  "id": "ray-start-arrow",
                  "name": "ray  start  arrow"
              },
              {
                  "id": "ray-start-end",
                  "name": "ray  start  end"
              },
              {
                  "id": "ray-start-vertex-end",
                  "name": "ray  start  vertex  end"
              },
              {
                  "id": "ray-vertex",
                  "name": "ray  vertex"
              },
              {
                  "id": "razor-double-edge",
                  "name": "razor  double  edge"
              },
              {
                  "id": "razor-single-edge",
                  "name": "razor  single  edge"
              },
              {
                  "id": "react",
                  "name": "react"
              },
              {
                  "id": "read",
                  "name": "read"
              },
              {
                  "id": "receipt",
                  "name": "receipt"
              },
              {
                  "id": "receipt-clock",
                  "name": "receipt  clock"
              },
              {
                  "id": "receipt-clock-outline",
                  "name": "receipt  clock  outline"
              },
              {
                  "id": "receipt-outline",
                  "name": "receipt  outline"
              },
              {
                  "id": "receipt-send",
                  "name": "receipt  send"
              },
              {
                  "id": "receipt-send-outline",
                  "name": "receipt  send  outline"
              },
              {
                  "id": "receipt-text",
                  "name": "receipt  text"
              },
              {
                  "id": "receipt-text-arrow-left",
                  "name": "receipt  text  arrow  left"
              },
              {
                  "id": "receipt-text-arrow-left-outline",
                  "name": "receipt  text  arrow  left  outline"
              },
              {
                  "id": "receipt-text-arrow-right",
                  "name": "receipt  text  arrow  right"
              },
              {
                  "id": "receipt-text-arrow-right-outline",
                  "name": "receipt  text  arrow  right  outline"
              },
              {
                  "id": "receipt-text-check",
                  "name": "receipt  text  check"
              },
              {
                  "id": "receipt-text-check-outline",
                  "name": "receipt  text  check  outline"
              },
              {
                  "id": "receipt-text-clock",
                  "name": "receipt  text  clock"
              },
              {
                  "id": "receipt-text-clock-outline",
                  "name": "receipt  text  clock  outline"
              },
              {
                  "id": "receipt-text-edit",
                  "name": "receipt  text  edit"
              },
              {
                  "id": "receipt-text-edit-outline",
                  "name": "receipt  text  edit  outline"
              },
              {
                  "id": "receipt-text-minus",
                  "name": "receipt  text  minus"
              },
              {
                  "id": "receipt-text-minus-outline",
                  "name": "receipt  text  minus  outline"
              },
              {
                  "id": "receipt-text-outline",
                  "name": "receipt  text  outline"
              },
              {
                  "id": "receipt-text-plus",
                  "name": "receipt  text  plus"
              },
              {
                  "id": "receipt-text-plus-outline",
                  "name": "receipt  text  plus  outline"
              },
              {
                  "id": "receipt-text-remove",
                  "name": "receipt  text  remove"
              },
              {
                  "id": "receipt-text-remove-outline",
                  "name": "receipt  text  remove  outline"
              },
              {
                  "id": "receipt-text-send",
                  "name": "receipt  text  send"
              },
              {
                  "id": "receipt-text-send-outline",
                  "name": "receipt  text  send  outline"
              },
              {
                  "id": "record",
                  "name": "record"
              },
              {
                  "id": "record-circle",
                  "name": "record  circle"
              },
              {
                  "id": "record-circle-outline",
                  "name": "record  circle  outline"
              },
              {
                  "id": "record-player",
                  "name": "record  player"
              },
              {
                  "id": "record-rec",
                  "name": "record  rec"
              },
              {
                  "id": "rectangle",
                  "name": "rectangle"
              },
              {
                  "id": "rectangle-outline",
                  "name": "rectangle  outline"
              },
              {
                  "id": "recycle",
                  "name": "recycle"
              },
              {
                  "id": "recycle-variant",
                  "name": "recycle  variant"
              },
              {
                  "id": "reddit",
                  "name": "reddit"
              },
              {
                  "id": "redhat",
                  "name": "redhat"
              },
              {
                  "id": "redo",
                  "name": "redo"
              },
              {
                  "id": "redo-variant",
                  "name": "redo  variant"
              },
              {
                  "id": "reflect-horizontal",
                  "name": "reflect  horizontal"
              },
              {
                  "id": "reflect-vertical",
                  "name": "reflect  vertical"
              },
              {
                  "id": "refresh",
                  "name": "refresh"
              },
              {
                  "id": "refresh-auto",
                  "name": "refresh  auto"
              },
              {
                  "id": "refresh-circle",
                  "name": "refresh  circle"
              },
              {
                  "id": "regex",
                  "name": "regex"
              },
              {
                  "id": "registered-trademark",
                  "name": "registered  trademark"
              },
              {
                  "id": "reiterate",
                  "name": "reiterate"
              },
              {
                  "id": "relation-many-to-many",
                  "name": "relation  many  to  many"
              },
              {
                  "id": "relation-many-to-one",
                  "name": "relation  many  to  one"
              },
              {
                  "id": "relation-many-to-one-or-many",
                  "name": "relation  many  to  one  or  many"
              },
              {
                  "id": "relation-many-to-only-one",
                  "name": "relation  many  to  only  one"
              },
              {
                  "id": "relation-many-to-zero-or-many",
                  "name": "relation  many  to  zero  or  many"
              },
              {
                  "id": "relation-many-to-zero-or-one",
                  "name": "relation  many  to  zero  or  one"
              },
              {
                  "id": "relation-one-or-many-to-many",
                  "name": "relation  one  or  many  to  many"
              },
              {
                  "id": "relation-one-or-many-to-one",
                  "name": "relation  one  or  many  to  one"
              },
              {
                  "id": "relation-one-or-many-to-one-or-many",
                  "name": "relation  one  or  many  to  one  or  many"
              },
              {
                  "id": "relation-one-or-many-to-only-one",
                  "name": "relation  one  or  many  to  only  one"
              },
              {
                  "id": "relation-one-or-many-to-zero-or-many",
                  "name": "relation  one  or  many  to  zero  or  many"
              },
              {
                  "id": "relation-one-or-many-to-zero-or-one",
                  "name": "relation  one  or  many  to  zero  or  one"
              },
              {
                  "id": "relation-one-to-many",
                  "name": "relation  one  to  many"
              },
              {
                  "id": "relation-one-to-one",
                  "name": "relation  one  to  one"
              },
              {
                  "id": "relation-one-to-one-or-many",
                  "name": "relation  one  to  one  or  many"
              },
              {
                  "id": "relation-one-to-only-one",
                  "name": "relation  one  to  only  one"
              },
              {
                  "id": "relation-one-to-zero-or-many",
                  "name": "relation  one  to  zero  or  many"
              },
              {
                  "id": "relation-one-to-zero-or-one",
                  "name": "relation  one  to  zero  or  one"
              },
              {
                  "id": "relation-only-one-to-many",
                  "name": "relation  only  one  to  many"
              },
              {
                  "id": "relation-only-one-to-one",
                  "name": "relation  only  one  to  one"
              },
              {
                  "id": "relation-only-one-to-one-or-many",
                  "name": "relation  only  one  to  one  or  many"
              },
              {
                  "id": "relation-only-one-to-only-one",
                  "name": "relation  only  one  to  only  one"
              },
              {
                  "id": "relation-only-one-to-zero-or-many",
                  "name": "relation  only  one  to  zero  or  many"
              },
              {
                  "id": "relation-only-one-to-zero-or-one",
                  "name": "relation  only  one  to  zero  or  one"
              },
              {
                  "id": "relation-zero-or-many-to-many",
                  "name": "relation  zero  or  many  to  many"
              },
              {
                  "id": "relation-zero-or-many-to-one",
                  "name": "relation  zero  or  many  to  one"
              },
              {
                  "id": "relation-zero-or-many-to-one-or-many",
                  "name": "relation  zero  or  many  to  one  or  many"
              },
              {
                  "id": "relation-zero-or-many-to-only-one",
                  "name": "relation  zero  or  many  to  only  one"
              },
              {
                  "id": "relation-zero-or-many-to-zero-or-many",
                  "name": "relation  zero  or  many  to  zero  or  many"
              },
              {
                  "id": "relation-zero-or-many-to-zero-or-one",
                  "name": "relation  zero  or  many  to  zero  or  one"
              },
              {
                  "id": "relation-zero-or-one-to-many",
                  "name": "relation  zero  or  one  to  many"
              },
              {
                  "id": "relation-zero-or-one-to-one",
                  "name": "relation  zero  or  one  to  one"
              },
              {
                  "id": "relation-zero-or-one-to-one-or-many",
                  "name": "relation  zero  or  one  to  one  or  many"
              },
              {
                  "id": "relation-zero-or-one-to-only-one",
                  "name": "relation  zero  or  one  to  only  one"
              },
              {
                  "id": "relation-zero-or-one-to-zero-or-many",
                  "name": "relation  zero  or  one  to  zero  or  many"
              },
              {
                  "id": "relation-zero-or-one-to-zero-or-one",
                  "name": "relation  zero  or  one  to  zero  or  one"
              },
              {
                  "id": "relative-scale",
                  "name": "relative  scale"
              },
              {
                  "id": "reload",
                  "name": "reload"
              },
              {
                  "id": "reload-alert",
                  "name": "reload  alert"
              },
              {
                  "id": "reminder",
                  "name": "reminder"
              },
              {
                  "id": "remote",
                  "name": "remote"
              },
              {
                  "id": "remote-desktop",
                  "name": "remote  desktop"
              },
              {
                  "id": "remote-off",
                  "name": "remote  off"
              },
              {
                  "id": "remote-tv",
                  "name": "remote  tv"
              },
              {
                  "id": "remote-tv-off",
                  "name": "remote  tv  off"
              },
              {
                  "id": "rename",
                  "name": "rename"
              },
              {
                  "id": "rename-box",
                  "name": "rename  box"
              },
              {
                  "id": "rename-box-outline",
                  "name": "rename  box  outline"
              },
              {
                  "id": "rename-outline",
                  "name": "rename  outline"
              },
              {
                  "id": "reorder-horizontal",
                  "name": "reorder  horizontal"
              },
              {
                  "id": "reorder-vertical",
                  "name": "reorder  vertical"
              },
              {
                  "id": "repeat",
                  "name": "repeat"
              },
              {
                  "id": "repeat-off",
                  "name": "repeat  off"
              },
              {
                  "id": "repeat-once",
                  "name": "repeat  once"
              },
              {
                  "id": "repeat-variant",
                  "name": "repeat  variant"
              },
              {
                  "id": "replay",
                  "name": "replay"
              },
              {
                  "id": "reply",
                  "name": "reply"
              },
              {
                  "id": "reply-all",
                  "name": "reply  all"
              },
              {
                  "id": "reply-all-outline",
                  "name": "reply  all  outline"
              },
              {
                  "id": "reply-circle",
                  "name": "reply  circle"
              },
              {
                  "id": "reply-outline",
                  "name": "reply  outline"
              },
              {
                  "id": "reproduction",
                  "name": "reproduction"
              },
              {
                  "id": "resistor",
                  "name": "resistor"
              },
              {
                  "id": "resistor-nodes",
                  "name": "resistor  nodes"
              },
              {
                  "id": "resize",
                  "name": "resize"
              },
              {
                  "id": "resize-bottom-right",
                  "name": "resize  bottom  right"
              },
              {
                  "id": "responsive",
                  "name": "responsive"
              },
              {
                  "id": "restart",
                  "name": "restart"
              },
              {
                  "id": "restart-alert",
                  "name": "restart  alert"
              },
              {
                  "id": "restart-off",
                  "name": "restart  off"
              },
              {
                  "id": "restore",
                  "name": "restore"
              },
              {
                  "id": "restore-alert",
                  "name": "restore  alert"
              },
              {
                  "id": "rewind",
                  "name": "rewind"
              },
              {
                  "id": "rewind-10",
                  "name": "rewind  10"
              },
              {
                  "id": "rewind-15",
                  "name": "rewind  15"
              },
              {
                  "id": "rewind-30",
                  "name": "rewind  30"
              },
              {
                  "id": "rewind-45",
                  "name": "rewind  45"
              },
              {
                  "id": "rewind-5",
                  "name": "rewind  5"
              },
              {
                  "id": "rewind-60",
                  "name": "rewind  60"
              },
              {
                  "id": "rewind-outline",
                  "name": "rewind  outline"
              },
              {
                  "id": "rhombus",
                  "name": "rhombus"
              },
              {
                  "id": "rhombus-medium",
                  "name": "rhombus  medium"
              },
              {
                  "id": "rhombus-medium-outline",
                  "name": "rhombus  medium  outline"
              },
              {
                  "id": "rhombus-outline",
                  "name": "rhombus  outline"
              },
              {
                  "id": "rhombus-split",
                  "name": "rhombus  split"
              },
              {
                  "id": "rhombus-split-outline",
                  "name": "rhombus  split  outline"
              },
              {
                  "id": "ribbon",
                  "name": "ribbon"
              },
              {
                  "id": "rice",
                  "name": "rice"
              },
              {
                  "id": "rickshaw",
                  "name": "rickshaw"
              },
              {
                  "id": "rickshaw-electric",
                  "name": "rickshaw  electric"
              },
              {
                  "id": "ring",
                  "name": "ring"
              },
              {
                  "id": "rivet",
                  "name": "rivet"
              },
              {
                  "id": "road",
                  "name": "road"
              },
              {
                  "id": "road-variant",
                  "name": "road  variant"
              },
              {
                  "id": "robber",
                  "name": "robber"
              },
              {
                  "id": "robot",
                  "name": "robot"
              },
              {
                  "id": "robot-angry",
                  "name": "robot  angry"
              },
              {
                  "id": "robot-angry-outline",
                  "name": "robot  angry  outline"
              },
              {
                  "id": "robot-confused",
                  "name": "robot  confused"
              },
              {
                  "id": "robot-confused-outline",
                  "name": "robot  confused  outline"
              },
              {
                  "id": "robot-dead",
                  "name": "robot  dead"
              },
              {
                  "id": "robot-dead-outline",
                  "name": "robot  dead  outline"
              },
              {
                  "id": "robot-excited",
                  "name": "robot  excited"
              },
              {
                  "id": "robot-excited-outline",
                  "name": "robot  excited  outline"
              },
              {
                  "id": "robot-happy",
                  "name": "robot  happy"
              },
              {
                  "id": "robot-happy-outline",
                  "name": "robot  happy  outline"
              },
              {
                  "id": "robot-industrial",
                  "name": "robot  industrial"
              },
              {
                  "id": "robot-industrial-outline",
                  "name": "robot  industrial  outline"
              },
              {
                  "id": "robot-love",
                  "name": "robot  love"
              },
              {
                  "id": "robot-love-outline",
                  "name": "robot  love  outline"
              },
              {
                  "id": "robot-mower",
                  "name": "robot  mower"
              },
              {
                  "id": "robot-mower-outline",
                  "name": "robot  mower  outline"
              },
              {
                  "id": "robot-off",
                  "name": "robot  off"
              },
              {
                  "id": "robot-off-outline",
                  "name": "robot  off  outline"
              },
              {
                  "id": "robot-outline",
                  "name": "robot  outline"
              },
              {
                  "id": "robot-vacuum",
                  "name": "robot  vacuum"
              },
              {
                  "id": "robot-vacuum-alert",
                  "name": "robot  vacuum  alert"
              },
              {
                  "id": "robot-vacuum-off",
                  "name": "robot  vacuum  off"
              },
              {
                  "id": "robot-vacuum-variant",
                  "name": "robot  vacuum  variant"
              },
              {
                  "id": "robot-vacuum-variant-alert",
                  "name": "robot  vacuum  variant  alert"
              },
              {
                  "id": "robot-vacuum-variant-off",
                  "name": "robot  vacuum  variant  off"
              },
              {
                  "id": "rocket",
                  "name": "rocket"
              },
              {
                  "id": "rocket-launch",
                  "name": "rocket  launch"
              },
              {
                  "id": "rocket-launch-outline",
                  "name": "rocket  launch  outline"
              },
              {
                  "id": "rocket-outline",
                  "name": "rocket  outline"
              },
              {
                  "id": "rodent",
                  "name": "rodent"
              },
              {
                  "id": "roller-shade",
                  "name": "roller  shade"
              },
              {
                  "id": "roller-shade-closed",
                  "name": "roller  shade  closed"
              },
              {
                  "id": "roller-skate",
                  "name": "roller  skate"
              },
              {
                  "id": "roller-skate-off",
                  "name": "roller  skate  off"
              },
              {
                  "id": "rollerblade",
                  "name": "rollerblade"
              },
              {
                  "id": "rollerblade-off",
                  "name": "rollerblade  off"
              },
              {
                  "id": "rollupjs",
                  "name": "rollupjs"
              },
              {
                  "id": "rolodex",
                  "name": "rolodex"
              },
              {
                  "id": "rolodex-outline",
                  "name": "rolodex  outline"
              },
              {
                  "id": "roman-numeral-1",
                  "name": "roman  numeral  1"
              },
              {
                  "id": "roman-numeral-10",
                  "name": "roman  numeral  10"
              },
              {
                  "id": "roman-numeral-2",
                  "name": "roman  numeral  2"
              },
              {
                  "id": "roman-numeral-3",
                  "name": "roman  numeral  3"
              },
              {
                  "id": "roman-numeral-4",
                  "name": "roman  numeral  4"
              },
              {
                  "id": "roman-numeral-5",
                  "name": "roman  numeral  5"
              },
              {
                  "id": "roman-numeral-6",
                  "name": "roman  numeral  6"
              },
              {
                  "id": "roman-numeral-7",
                  "name": "roman  numeral  7"
              },
              {
                  "id": "roman-numeral-8",
                  "name": "roman  numeral  8"
              },
              {
                  "id": "roman-numeral-9",
                  "name": "roman  numeral  9"
              },
              {
                  "id": "room-service",
                  "name": "room  service"
              },
              {
                  "id": "room-service-outline",
                  "name": "room  service  outline"
              },
              {
                  "id": "rotate-360",
                  "name": "rotate  360"
              },
              {
                  "id": "rotate-3d",
                  "name": "rotate  3d"
              },
              {
                  "id": "rotate-3d-variant",
                  "name": "rotate  3d  variant"
              },
              {
                  "id": "rotate-left",
                  "name": "rotate  left"
              },
              {
                  "id": "rotate-left-variant",
                  "name": "rotate  left  variant"
              },
              {
                  "id": "rotate-orbit",
                  "name": "rotate  orbit"
              },
              {
                  "id": "rotate-right",
                  "name": "rotate  right"
              },
              {
                  "id": "rotate-right-variant",
                  "name": "rotate  right  variant"
              },
              {
                  "id": "rounded-corner",
                  "name": "rounded  corner"
              },
              {
                  "id": "router",
                  "name": "router"
              },
              {
                  "id": "router-network",
                  "name": "router  network"
              },
              {
                  "id": "router-wireless",
                  "name": "router  wireless"
              },
              {
                  "id": "router-wireless-off",
                  "name": "router  wireless  off"
              },
              {
                  "id": "router-wireless-settings",
                  "name": "router  wireless  settings"
              },
              {
                  "id": "routes",
                  "name": "routes"
              },
              {
                  "id": "routes-clock",
                  "name": "routes  clock"
              },
              {
                  "id": "rowing",
                  "name": "rowing"
              },
              {
                  "id": "rss",
                  "name": "rss"
              },
              {
                  "id": "rss-box",
                  "name": "rss  box"
              },
              {
                  "id": "rss-off",
                  "name": "rss  off"
              },
              {
                  "id": "rug",
                  "name": "rug"
              },
              {
                  "id": "rugby",
                  "name": "rugby"
              },
              {
                  "id": "ruler",
                  "name": "ruler"
              },
              {
                  "id": "ruler-square",
                  "name": "ruler  square"
              },
              {
                  "id": "ruler-square-compass",
                  "name": "ruler  square  compass"
              },
              {
                  "id": "run",
                  "name": "run"
              },
              {
                  "id": "run-fast",
                  "name": "run  fast"
              },
              {
                  "id": "rv-truck",
                  "name": "rv  truck"
              },
              {
                  "id": "sack",
                  "name": "sack"
              },
              {
                  "id": "sack-outline",
                  "name": "sack  outline"
              },
              {
                  "id": "sack-percent",
                  "name": "sack  percent"
              },
              {
                  "id": "safe",
                  "name": "safe"
              },
              {
                  "id": "safe-square",
                  "name": "safe  square"
              },
              {
                  "id": "safe-square-outline",
                  "name": "safe  square  outline"
              },
              {
                  "id": "safety-goggles",
                  "name": "safety  goggles"
              },
              {
                  "id": "sail-boat",
                  "name": "sail  boat"
              },
              {
                  "id": "sail-boat-sink",
                  "name": "sail  boat  sink"
              },
              {
                  "id": "sale",
                  "name": "sale"
              },
              {
                  "id": "sale-outline",
                  "name": "sale  outline"
              },
              {
                  "id": "salesforce",
                  "name": "salesforce"
              },
              {
                  "id": "sass",
                  "name": "sass"
              },
              {
                  "id": "satellite",
                  "name": "satellite"
              },
              {
                  "id": "satellite-uplink",
                  "name": "satellite  uplink"
              },
              {
                  "id": "satellite-variant",
                  "name": "satellite  variant"
              },
              {
                  "id": "sausage",
                  "name": "sausage"
              },
              {
                  "id": "sausage-off",
                  "name": "sausage  off"
              },
              {
                  "id": "saw-blade",
                  "name": "saw  blade"
              },
              {
                  "id": "sawtooth-wave",
                  "name": "sawtooth  wave"
              },
              {
                  "id": "saxophone",
                  "name": "saxophone"
              },
              {
                  "id": "scale",
                  "name": "scale"
              },
              {
                  "id": "scale-balance",
                  "name": "scale  balance"
              },
              {
                  "id": "scale-bathroom",
                  "name": "scale  bathroom"
              },
              {
                  "id": "scale-off",
                  "name": "scale  off"
              },
              {
                  "id": "scale-unbalanced",
                  "name": "scale  unbalanced"
              },
              {
                  "id": "scan-helper",
                  "name": "scan  helper"
              },
              {
                  "id": "scanner",
                  "name": "scanner"
              },
              {
                  "id": "scanner-off",
                  "name": "scanner  off"
              },
              {
                  "id": "scatter-plot",
                  "name": "scatter  plot"
              },
              {
                  "id": "scatter-plot-outline",
                  "name": "scatter  plot  outline"
              },
              {
                  "id": "scent",
                  "name": "scent"
              },
              {
                  "id": "scent-off",
                  "name": "scent  off"
              },
              {
                  "id": "school",
                  "name": "school"
              },
              {
                  "id": "school-outline",
                  "name": "school  outline"
              },
              {
                  "id": "scissors-cutting",
                  "name": "scissors  cutting"
              },
              {
                  "id": "scooter",
                  "name": "scooter"
              },
              {
                  "id": "scooter-electric",
                  "name": "scooter  electric"
              },
              {
                  "id": "scoreboard",
                  "name": "scoreboard"
              },
              {
                  "id": "scoreboard-outline",
                  "name": "scoreboard  outline"
              },
              {
                  "id": "screen-rotation",
                  "name": "screen  rotation"
              },
              {
                  "id": "screen-rotation-lock",
                  "name": "screen  rotation  lock"
              },
              {
                  "id": "screw-flat-top",
                  "name": "screw  flat  top"
              },
              {
                  "id": "screw-lag",
                  "name": "screw  lag"
              },
              {
                  "id": "screw-machine-flat-top",
                  "name": "screw  machine  flat  top"
              },
              {
                  "id": "screw-machine-round-top",
                  "name": "screw  machine  round  top"
              },
              {
                  "id": "screw-round-top",
                  "name": "screw  round  top"
              },
              {
                  "id": "screwdriver",
                  "name": "screwdriver"
              },
              {
                  "id": "script",
                  "name": "script"
              },
              {
                  "id": "script-outline",
                  "name": "script  outline"
              },
              {
                  "id": "script-text",
                  "name": "script  text"
              },
              {
                  "id": "script-text-key",
                  "name": "script  text  key"
              },
              {
                  "id": "script-text-key-outline",
                  "name": "script  text  key  outline"
              },
              {
                  "id": "script-text-outline",
                  "name": "script  text  outline"
              },
              {
                  "id": "script-text-play",
                  "name": "script  text  play"
              },
              {
                  "id": "script-text-play-outline",
                  "name": "script  text  play  outline"
              },
              {
                  "id": "sd",
                  "name": "sd"
              },
              {
                  "id": "seal",
                  "name": "seal"
              },
              {
                  "id": "seal-variant",
                  "name": "seal  variant"
              },
              {
                  "id": "search-web",
                  "name": "search  web"
              },
              {
                  "id": "seat",
                  "name": "seat"
              },
              {
                  "id": "seat-flat",
                  "name": "seat  flat"
              },
              {
                  "id": "seat-flat-angled",
                  "name": "seat  flat  angled"
              },
              {
                  "id": "seat-individual-suite",
                  "name": "seat  individual  suite"
              },
              {
                  "id": "seat-legroom-extra",
                  "name": "seat  legroom  extra"
              },
              {
                  "id": "seat-legroom-normal",
                  "name": "seat  legroom  normal"
              },
              {
                  "id": "seat-legroom-reduced",
                  "name": "seat  legroom  reduced"
              },
              {
                  "id": "seat-outline",
                  "name": "seat  outline"
              },
              {
                  "id": "seat-passenger",
                  "name": "seat  passenger"
              },
              {
                  "id": "seat-recline-extra",
                  "name": "seat  recline  extra"
              },
              {
                  "id": "seat-recline-normal",
                  "name": "seat  recline  normal"
              },
              {
                  "id": "seatbelt",
                  "name": "seatbelt"
              },
              {
                  "id": "security",
                  "name": "security"
              },
              {
                  "id": "security-network",
                  "name": "security  network"
              },
              {
                  "id": "seed",
                  "name": "seed"
              },
              {
                  "id": "seed-off",
                  "name": "seed  off"
              },
              {
                  "id": "seed-off-outline",
                  "name": "seed  off  outline"
              },
              {
                  "id": "seed-outline",
                  "name": "seed  outline"
              },
              {
                  "id": "seed-plus",
                  "name": "seed  plus"
              },
              {
                  "id": "seed-plus-outline",
                  "name": "seed  plus  outline"
              },
              {
                  "id": "seesaw",
                  "name": "seesaw"
              },
              {
                  "id": "segment",
                  "name": "segment"
              },
              {
                  "id": "select",
                  "name": "select"
              },
              {
                  "id": "select-all",
                  "name": "select  all"
              },
              {
                  "id": "select-arrow-down",
                  "name": "select  arrow  down"
              },
              {
                  "id": "select-arrow-up",
                  "name": "select  arrow  up"
              },
              {
                  "id": "select-color",
                  "name": "select  color"
              },
              {
                  "id": "select-compare",
                  "name": "select  compare"
              },
              {
                  "id": "select-drag",
                  "name": "select  drag"
              },
              {
                  "id": "select-group",
                  "name": "select  group"
              },
              {
                  "id": "select-inverse",
                  "name": "select  inverse"
              },
              {
                  "id": "select-marker",
                  "name": "select  marker"
              },
              {
                  "id": "select-multiple",
                  "name": "select  multiple"
              },
              {
                  "id": "select-multiple-marker",
                  "name": "select  multiple  marker"
              },
              {
                  "id": "select-off",
                  "name": "select  off"
              },
              {
                  "id": "select-place",
                  "name": "select  place"
              },
              {
                  "id": "select-remove",
                  "name": "select  remove"
              },
              {
                  "id": "select-search",
                  "name": "select  search"
              },
              {
                  "id": "selection",
                  "name": "selection"
              },
              {
                  "id": "selection-drag",
                  "name": "selection  drag"
              },
              {
                  "id": "selection-ellipse",
                  "name": "selection  ellipse"
              },
              {
                  "id": "selection-ellipse-arrow-inside",
                  "name": "selection  ellipse  arrow  inside"
              },
              {
                  "id": "selection-ellipse-remove",
                  "name": "selection  ellipse  remove"
              },
              {
                  "id": "selection-marker",
                  "name": "selection  marker"
              },
              {
                  "id": "selection-multiple",
                  "name": "selection  multiple"
              },
              {
                  "id": "selection-multiple-marker",
                  "name": "selection  multiple  marker"
              },
              {
                  "id": "selection-off",
                  "name": "selection  off"
              },
              {
                  "id": "selection-remove",
                  "name": "selection  remove"
              },
              {
                  "id": "selection-search",
                  "name": "selection  search"
              },
              {
                  "id": "semantic-web",
                  "name": "semantic  web"
              },
              {
                  "id": "send",
                  "name": "send"
              },
              {
                  "id": "send-check",
                  "name": "send  check"
              },
              {
                  "id": "send-check-outline",
                  "name": "send  check  outline"
              },
              {
                  "id": "send-circle",
                  "name": "send  circle"
              },
              {
                  "id": "send-circle-outline",
                  "name": "send  circle  outline"
              },
              {
                  "id": "send-clock",
                  "name": "send  clock"
              },
              {
                  "id": "send-clock-outline",
                  "name": "send  clock  outline"
              },
              {
                  "id": "send-lock",
                  "name": "send  lock"
              },
              {
                  "id": "send-lock-outline",
                  "name": "send  lock  outline"
              },
              {
                  "id": "send-outline",
                  "name": "send  outline"
              },
              {
                  "id": "send-variant",
                  "name": "send  variant"
              },
              {
                  "id": "send-variant-clock",
                  "name": "send  variant  clock"
              },
              {
                  "id": "send-variant-clock-outline",
                  "name": "send  variant  clock  outline"
              },
              {
                  "id": "send-variant-outline",
                  "name": "send  variant  outline"
              },
              {
                  "id": "serial-port",
                  "name": "serial  port"
              },
              {
                  "id": "server",
                  "name": "server"
              },
              {
                  "id": "server-minus",
                  "name": "server  minus"
              },
              {
                  "id": "server-network",
                  "name": "server  network"
              },
              {
                  "id": "server-network-off",
                  "name": "server  network  off"
              },
              {
                  "id": "server-off",
                  "name": "server  off"
              },
              {
                  "id": "server-plus",
                  "name": "server  plus"
              },
              {
                  "id": "server-remove",
                  "name": "server  remove"
              },
              {
                  "id": "server-security",
                  "name": "server  security"
              },
              {
                  "id": "set-all",
                  "name": "set  all"
              },
              {
                  "id": "set-center",
                  "name": "set  center"
              },
              {
                  "id": "set-center-right",
                  "name": "set  center  right"
              },
              {
                  "id": "set-left",
                  "name": "set  left"
              },
              {
                  "id": "set-left-center",
                  "name": "set  left  center"
              },
              {
                  "id": "set-left-right",
                  "name": "set  left  right"
              },
              {
                  "id": "set-merge",
                  "name": "set  merge"
              },
              {
                  "id": "set-none",
                  "name": "set  none"
              },
              {
                  "id": "set-right",
                  "name": "set  right"
              },
              {
                  "id": "set-split",
                  "name": "set  split"
              },
              {
                  "id": "set-square",
                  "name": "set  square"
              },
              {
                  "id": "set-top-box",
                  "name": "set  top  box"
              },
              {
                  "id": "settings-helper",
                  "name": "settings  helper"
              },
              {
                  "id": "shaker",
                  "name": "shaker"
              },
              {
                  "id": "shaker-outline",
                  "name": "shaker  outline"
              },
              {
                  "id": "shape",
                  "name": "shape"
              },
              {
                  "id": "shape-circle-plus",
                  "name": "shape  circle  plus"
              },
              {
                  "id": "shape-outline",
                  "name": "shape  outline"
              },
              {
                  "id": "shape-oval-plus",
                  "name": "shape  oval  plus"
              },
              {
                  "id": "shape-plus",
                  "name": "shape  plus"
              },
              {
                  "id": "shape-plus-outline",
                  "name": "shape  plus  outline"
              },
              {
                  "id": "shape-polygon-plus",
                  "name": "shape  polygon  plus"
              },
              {
                  "id": "shape-rectangle-plus",
                  "name": "shape  rectangle  plus"
              },
              {
                  "id": "shape-square-plus",
                  "name": "shape  square  plus"
              },
              {
                  "id": "shape-square-rounded-plus",
                  "name": "shape  square  rounded  plus"
              },
              {
                  "id": "share",
                  "name": "share"
              },
              {
                  "id": "share-all",
                  "name": "share  all"
              },
              {
                  "id": "share-all-outline",
                  "name": "share  all  outline"
              },
              {
                  "id": "share-circle",
                  "name": "share  circle"
              },
              {
                  "id": "share-off",
                  "name": "share  off"
              },
              {
                  "id": "share-off-outline",
                  "name": "share  off  outline"
              },
              {
                  "id": "share-outline",
                  "name": "share  outline"
              },
              {
                  "id": "share-variant",
                  "name": "share  variant"
              },
              {
                  "id": "share-variant-outline",
                  "name": "share  variant  outline"
              },
              {
                  "id": "shark",
                  "name": "shark"
              },
              {
                  "id": "shark-fin",
                  "name": "shark  fin"
              },
              {
                  "id": "shark-fin-outline",
                  "name": "shark  fin  outline"
              },
              {
                  "id": "shark-off",
                  "name": "shark  off"
              },
              {
                  "id": "sheep",
                  "name": "sheep"
              },
              {
                  "id": "shield",
                  "name": "shield"
              },
              {
                  "id": "shield-account",
                  "name": "shield  account"
              },
              {
                  "id": "shield-account-outline",
                  "name": "shield  account  outline"
              },
              {
                  "id": "shield-account-variant",
                  "name": "shield  account  variant"
              },
              {
                  "id": "shield-account-variant-outline",
                  "name": "shield  account  variant  outline"
              },
              {
                  "id": "shield-airplane",
                  "name": "shield  airplane"
              },
              {
                  "id": "shield-airplane-outline",
                  "name": "shield  airplane  outline"
              },
              {
                  "id": "shield-alert",
                  "name": "shield  alert"
              },
              {
                  "id": "shield-alert-outline",
                  "name": "shield  alert  outline"
              },
              {
                  "id": "shield-bug",
                  "name": "shield  bug"
              },
              {
                  "id": "shield-bug-outline",
                  "name": "shield  bug  outline"
              },
              {
                  "id": "shield-car",
                  "name": "shield  car"
              },
              {
                  "id": "shield-check",
                  "name": "shield  check"
              },
              {
                  "id": "shield-check-outline",
                  "name": "shield  check  outline"
              },
              {
                  "id": "shield-cross",
                  "name": "shield  cross"
              },
              {
                  "id": "shield-cross-outline",
                  "name": "shield  cross  outline"
              },
              {
                  "id": "shield-crown",
                  "name": "shield  crown"
              },
              {
                  "id": "shield-crown-outline",
                  "name": "shield  crown  outline"
              },
              {
                  "id": "shield-edit",
                  "name": "shield  edit"
              },
              {
                  "id": "shield-edit-outline",
                  "name": "shield  edit  outline"
              },
              {
                  "id": "shield-half",
                  "name": "shield  half"
              },
              {
                  "id": "shield-half-full",
                  "name": "shield  half  full"
              },
              {
                  "id": "shield-home",
                  "name": "shield  home"
              },
              {
                  "id": "shield-home-outline",
                  "name": "shield  home  outline"
              },
              {
                  "id": "shield-key",
                  "name": "shield  key"
              },
              {
                  "id": "shield-key-outline",
                  "name": "shield  key  outline"
              },
              {
                  "id": "shield-link-variant",
                  "name": "shield  link  variant"
              },
              {
                  "id": "shield-link-variant-outline",
                  "name": "shield  link  variant  outline"
              },
              {
                  "id": "shield-lock",
                  "name": "shield  lock"
              },
              {
                  "id": "shield-lock-open",
                  "name": "shield  lock  open"
              },
              {
                  "id": "shield-lock-open-outline",
                  "name": "shield  lock  open  outline"
              },
              {
                  "id": "shield-lock-outline",
                  "name": "shield  lock  outline"
              },
              {
                  "id": "shield-moon",
                  "name": "shield  moon"
              },
              {
                  "id": "shield-moon-outline",
                  "name": "shield  moon  outline"
              },
              {
                  "id": "shield-off",
                  "name": "shield  off"
              },
              {
                  "id": "shield-off-outline",
                  "name": "shield  off  outline"
              },
              {
                  "id": "shield-outline",
                  "name": "shield  outline"
              },
              {
                  "id": "shield-plus",
                  "name": "shield  plus"
              },
              {
                  "id": "shield-plus-outline",
                  "name": "shield  plus  outline"
              },
              {
                  "id": "shield-refresh",
                  "name": "shield  refresh"
              },
              {
                  "id": "shield-refresh-outline",
                  "name": "shield  refresh  outline"
              },
              {
                  "id": "shield-remove",
                  "name": "shield  remove"
              },
              {
                  "id": "shield-remove-outline",
                  "name": "shield  remove  outline"
              },
              {
                  "id": "shield-search",
                  "name": "shield  search"
              },
              {
                  "id": "shield-star",
                  "name": "shield  star"
              },
              {
                  "id": "shield-star-outline",
                  "name": "shield  star  outline"
              },
              {
                  "id": "shield-sun",
                  "name": "shield  sun"
              },
              {
                  "id": "shield-sun-outline",
                  "name": "shield  sun  outline"
              },
              {
                  "id": "shield-sword",
                  "name": "shield  sword"
              },
              {
                  "id": "shield-sword-outline",
                  "name": "shield  sword  outline"
              },
              {
                  "id": "shield-sync",
                  "name": "shield  sync"
              },
              {
                  "id": "shield-sync-outline",
                  "name": "shield  sync  outline"
              },
              {
                  "id": "shimmer",
                  "name": "shimmer"
              },
              {
                  "id": "ship-wheel",
                  "name": "ship  wheel"
              },
              {
                  "id": "shipping-pallet",
                  "name": "shipping  pallet"
              },
              {
                  "id": "shoe-ballet",
                  "name": "shoe  ballet"
              },
              {
                  "id": "shoe-cleat",
                  "name": "shoe  cleat"
              },
              {
                  "id": "shoe-formal",
                  "name": "shoe  formal"
              },
              {
                  "id": "shoe-heel",
                  "name": "shoe  heel"
              },
              {
                  "id": "shoe-print",
                  "name": "shoe  print"
              },
              {
                  "id": "shoe-sneaker",
                  "name": "shoe  sneaker"
              },
              {
                  "id": "shopping",
                  "name": "shopping"
              },
              {
                  "id": "shopping-music",
                  "name": "shopping  music"
              },
              {
                  "id": "shopping-outline",
                  "name": "shopping  outline"
              },
              {
                  "id": "shopping-search",
                  "name": "shopping  search"
              },
              {
                  "id": "shopping-search-outline",
                  "name": "shopping  search  outline"
              },
              {
                  "id": "shore",
                  "name": "shore"
              },
              {
                  "id": "shovel",
                  "name": "shovel"
              },
              {
                  "id": "shovel-off",
                  "name": "shovel  off"
              },
              {
                  "id": "shower",
                  "name": "shower"
              },
              {
                  "id": "shower-head",
                  "name": "shower  head"
              },
              {
                  "id": "shredder",
                  "name": "shredder"
              },
              {
                  "id": "shuffle",
                  "name": "shuffle"
              },
              {
                  "id": "shuffle-disabled",
                  "name": "shuffle  disabled"
              },
              {
                  "id": "shuffle-variant",
                  "name": "shuffle  variant"
              },
              {
                  "id": "shuriken",
                  "name": "shuriken"
              },
              {
                  "id": "sickle",
                  "name": "sickle"
              },
              {
                  "id": "sigma",
                  "name": "sigma"
              },
              {
                  "id": "sigma-lower",
                  "name": "sigma  lower"
              },
              {
                  "id": "sign-caution",
                  "name": "sign  caution"
              },
              {
                  "id": "sign-direction",
                  "name": "sign  direction"
              },
              {
                  "id": "sign-direction-minus",
                  "name": "sign  direction  minus"
              },
              {
                  "id": "sign-direction-plus",
                  "name": "sign  direction  plus"
              },
              {
                  "id": "sign-direction-remove",
                  "name": "sign  direction  remove"
              },
              {
                  "id": "sign-language",
                  "name": "sign  language"
              },
              {
                  "id": "sign-language-outline",
                  "name": "sign  language  outline"
              },
              {
                  "id": "sign-pole",
                  "name": "sign  pole"
              },
              {
                  "id": "sign-real-estate",
                  "name": "sign  real  estate"
              },
              {
                  "id": "sign-text",
                  "name": "sign  text"
              },
              {
                  "id": "sign-yield",
                  "name": "sign  yield"
              },
              {
                  "id": "signal",
                  "name": "signal"
              },
              {
                  "id": "signal-2g",
                  "name": "signal  2g"
              },
              {
                  "id": "signal-3g",
                  "name": "signal  3g"
              },
              {
                  "id": "signal-4g",
                  "name": "signal  4g"
              },
              {
                  "id": "signal-5g",
                  "name": "signal  5g"
              },
              {
                  "id": "signal-cellular-1",
                  "name": "signal  cellular  1"
              },
              {
                  "id": "signal-cellular-2",
                  "name": "signal  cellular  2"
              },
              {
                  "id": "signal-cellular-3",
                  "name": "signal  cellular  3"
              },
              {
                  "id": "signal-cellular-outline",
                  "name": "signal  cellular  outline"
              },
              {
                  "id": "signal-distance-variant",
                  "name": "signal  distance  variant"
              },
              {
                  "id": "signal-hspa",
                  "name": "signal  hspa"
              },
              {
                  "id": "signal-hspa-plus",
                  "name": "signal  hspa  plus"
              },
              {
                  "id": "signal-off",
                  "name": "signal  off"
              },
              {
                  "id": "signal-variant",
                  "name": "signal  variant"
              },
              {
                  "id": "signature",
                  "name": "signature"
              },
              {
                  "id": "signature-freehand",
                  "name": "signature  freehand"
              },
              {
                  "id": "signature-image",
                  "name": "signature  image"
              },
              {
                  "id": "signature-text",
                  "name": "signature  text"
              },
              {
                  "id": "silo",
                  "name": "silo"
              },
              {
                  "id": "silo-outline",
                  "name": "silo  outline"
              },
              {
                  "id": "silverware",
                  "name": "silverware"
              },
              {
                  "id": "silverware-clean",
                  "name": "silverware  clean"
              },
              {
                  "id": "silverware-fork",
                  "name": "silverware  fork"
              },
              {
                  "id": "silverware-fork-knife",
                  "name": "silverware  fork  knife"
              },
              {
                  "id": "silverware-spoon",
                  "name": "silverware  spoon"
              },
              {
                  "id": "silverware-variant",
                  "name": "silverware  variant"
              },
              {
                  "id": "sim",
                  "name": "sim"
              },
              {
                  "id": "sim-alert",
                  "name": "sim  alert"
              },
              {
                  "id": "sim-alert-outline",
                  "name": "sim  alert  outline"
              },
              {
                  "id": "sim-off",
                  "name": "sim  off"
              },
              {
                  "id": "sim-off-outline",
                  "name": "sim  off  outline"
              },
              {
                  "id": "sim-outline",
                  "name": "sim  outline"
              },
              {
                  "id": "simple-icons",
                  "name": "simple  icons"
              },
              {
                  "id": "sina-weibo",
                  "name": "sina  weibo"
              },
              {
                  "id": "sine-wave",
                  "name": "sine  wave"
              },
              {
                  "id": "sitemap",
                  "name": "sitemap"
              },
              {
                  "id": "sitemap-outline",
                  "name": "sitemap  outline"
              },
              {
                  "id": "size-l",
                  "name": "size  l"
              },
              {
                  "id": "size-m",
                  "name": "size  m"
              },
              {
                  "id": "size-s",
                  "name": "size  s"
              },
              {
                  "id": "size-xl",
                  "name": "size  xl"
              },
              {
                  "id": "size-xs",
                  "name": "size  xs"
              },
              {
                  "id": "size-xxl",
                  "name": "size  xxl"
              },
              {
                  "id": "size-xxs",
                  "name": "size  xxs"
              },
              {
                  "id": "size-xxxl",
                  "name": "size  xxxl"
              },
              {
                  "id": "skate",
                  "name": "skate"
              },
              {
                  "id": "skate-off",
                  "name": "skate  off"
              },
              {
                  "id": "skateboard",
                  "name": "skateboard"
              },
              {
                  "id": "skateboarding",
                  "name": "skateboarding"
              },
              {
                  "id": "skew-less",
                  "name": "skew  less"
              },
              {
                  "id": "skew-more",
                  "name": "skew  more"
              },
              {
                  "id": "ski",
                  "name": "ski"
              },
              {
                  "id": "ski-cross-country",
                  "name": "ski  cross  country"
              },
              {
                  "id": "ski-water",
                  "name": "ski  water"
              },
              {
                  "id": "skip-backward",
                  "name": "skip  backward"
              },
              {
                  "id": "skip-backward-outline",
                  "name": "skip  backward  outline"
              },
              {
                  "id": "skip-forward",
                  "name": "skip  forward"
              },
              {
                  "id": "skip-forward-outline",
                  "name": "skip  forward  outline"
              },
              {
                  "id": "skip-next",
                  "name": "skip  next"
              },
              {
                  "id": "skip-next-circle",
                  "name": "skip  next  circle"
              },
              {
                  "id": "skip-next-circle-outline",
                  "name": "skip  next  circle  outline"
              },
              {
                  "id": "skip-next-outline",
                  "name": "skip  next  outline"
              },
              {
                  "id": "skip-previous",
                  "name": "skip  previous"
              },
              {
                  "id": "skip-previous-circle",
                  "name": "skip  previous  circle"
              },
              {
                  "id": "skip-previous-circle-outline",
                  "name": "skip  previous  circle  outline"
              },
              {
                  "id": "skip-previous-outline",
                  "name": "skip  previous  outline"
              },
              {
                  "id": "skull",
                  "name": "skull"
              },
              {
                  "id": "skull-crossbones",
                  "name": "skull  crossbones"
              },
              {
                  "id": "skull-crossbones-outline",
                  "name": "skull  crossbones  outline"
              },
              {
                  "id": "skull-outline",
                  "name": "skull  outline"
              },
              {
                  "id": "skull-scan",
                  "name": "skull  scan"
              },
              {
                  "id": "skull-scan-outline",
                  "name": "skull  scan  outline"
              },
              {
                  "id": "skype",
                  "name": "skype"
              },
              {
                  "id": "skype-business",
                  "name": "skype  business"
              },
              {
                  "id": "slack",
                  "name": "slack"
              },
              {
                  "id": "slash-forward",
                  "name": "slash  forward"
              },
              {
                  "id": "slash-forward-box",
                  "name": "slash  forward  box"
              },
              {
                  "id": "sledding",
                  "name": "sledding"
              },
              {
                  "id": "sleep",
                  "name": "sleep"
              },
              {
                  "id": "sleep-off",
                  "name": "sleep  off"
              },
              {
                  "id": "slide",
                  "name": "slide"
              },
              {
                  "id": "slope-downhill",
                  "name": "slope  downhill"
              },
              {
                  "id": "slope-uphill",
                  "name": "slope  uphill"
              },
              {
                  "id": "slot-machine",
                  "name": "slot  machine"
              },
              {
                  "id": "slot-machine-outline",
                  "name": "slot  machine  outline"
              },
              {
                  "id": "smart-card",
                  "name": "smart  card"
              },
              {
                  "id": "smart-card-off",
                  "name": "smart  card  off"
              },
              {
                  "id": "smart-card-off-outline",
                  "name": "smart  card  off  outline"
              },
              {
                  "id": "smart-card-outline",
                  "name": "smart  card  outline"
              },
              {
                  "id": "smart-card-reader",
                  "name": "smart  card  reader"
              },
              {
                  "id": "smart-card-reader-outline",
                  "name": "smart  card  reader  outline"
              },
              {
                  "id": "smog",
                  "name": "smog"
              },
              {
                  "id": "smoke",
                  "name": "smoke"
              },
              {
                  "id": "smoke-detector",
                  "name": "smoke  detector"
              },
              {
                  "id": "smoke-detector-alert",
                  "name": "smoke  detector  alert"
              },
              {
                  "id": "smoke-detector-alert-outline",
                  "name": "smoke  detector  alert  outline"
              },
              {
                  "id": "smoke-detector-off",
                  "name": "smoke  detector  off"
              },
              {
                  "id": "smoke-detector-off-outline",
                  "name": "smoke  detector  off  outline"
              },
              {
                  "id": "smoke-detector-outline",
                  "name": "smoke  detector  outline"
              },
              {
                  "id": "smoke-detector-variant",
                  "name": "smoke  detector  variant"
              },
              {
                  "id": "smoke-detector-variant-alert",
                  "name": "smoke  detector  variant  alert"
              },
              {
                  "id": "smoke-detector-variant-off",
                  "name": "smoke  detector  variant  off"
              },
              {
                  "id": "smoking",
                  "name": "smoking"
              },
              {
                  "id": "smoking-off",
                  "name": "smoking  off"
              },
              {
                  "id": "smoking-pipe",
                  "name": "smoking  pipe"
              },
              {
                  "id": "smoking-pipe-off",
                  "name": "smoking  pipe  off"
              },
              {
                  "id": "snail",
                  "name": "snail"
              },
              {
                  "id": "snake",
                  "name": "snake"
              },
              {
                  "id": "snapchat",
                  "name": "snapchat"
              },
              {
                  "id": "snowboard",
                  "name": "snowboard"
              },
              {
                  "id": "snowflake",
                  "name": "snowflake"
              },
              {
                  "id": "snowflake-alert",
                  "name": "snowflake  alert"
              },
              {
                  "id": "snowflake-check",
                  "name": "snowflake  check"
              },
              {
                  "id": "snowflake-melt",
                  "name": "snowflake  melt"
              },
              {
                  "id": "snowflake-off",
                  "name": "snowflake  off"
              },
              {
                  "id": "snowflake-thermometer",
                  "name": "snowflake  thermometer"
              },
              {
                  "id": "snowflake-variant",
                  "name": "snowflake  variant"
              },
              {
                  "id": "snowman",
                  "name": "snowman"
              },
              {
                  "id": "snowmobile",
                  "name": "snowmobile"
              },
              {
                  "id": "snowshoeing",
                  "name": "snowshoeing"
              },
              {
                  "id": "soccer",
                  "name": "soccer"
              },
              {
                  "id": "soccer-field",
                  "name": "soccer  field"
              },
              {
                  "id": "social-distance-2-meters",
                  "name": "social  distance  2  meters"
              },
              {
                  "id": "social-distance-6-feet",
                  "name": "social  distance  6  feet"
              },
              {
                  "id": "sofa",
                  "name": "sofa"
              },
              {
                  "id": "sofa-outline",
                  "name": "sofa  outline"
              },
              {
                  "id": "sofa-single",
                  "name": "sofa  single"
              },
              {
                  "id": "sofa-single-outline",
                  "name": "sofa  single  outline"
              },
              {
                  "id": "solar-panel",
                  "name": "solar  panel"
              },
              {
                  "id": "solar-panel-large",
                  "name": "solar  panel  large"
              },
              {
                  "id": "solar-power",
                  "name": "solar  power"
              },
              {
                  "id": "solar-power-variant",
                  "name": "solar  power  variant"
              },
              {
                  "id": "solar-power-variant-outline",
                  "name": "solar  power  variant  outline"
              },
              {
                  "id": "soldering-iron",
                  "name": "soldering  iron"
              },
              {
                  "id": "solid",
                  "name": "solid"
              },
              {
                  "id": "sony-playstation",
                  "name": "sony  playstation"
              },
              {
                  "id": "sort",
                  "name": "sort"
              },
              {
                  "id": "sort-alphabetical-ascending",
                  "name": "sort  alphabetical  ascending"
              },
              {
                  "id": "sort-alphabetical-ascending-variant",
                  "name": "sort  alphabetical  ascending  variant"
              },
              {
                  "id": "sort-alphabetical-descending",
                  "name": "sort  alphabetical  descending"
              },
              {
                  "id": "sort-alphabetical-descending-variant",
                  "name": "sort  alphabetical  descending  variant"
              },
              {
                  "id": "sort-alphabetical-variant",
                  "name": "sort  alphabetical  variant"
              },
              {
                  "id": "sort-ascending",
                  "name": "sort  ascending"
              },
              {
                  "id": "sort-bool-ascending",
                  "name": "sort  bool  ascending"
              },
              {
                  "id": "sort-bool-ascending-variant",
                  "name": "sort  bool  ascending  variant"
              },
              {
                  "id": "sort-bool-descending",
                  "name": "sort  bool  descending"
              },
              {
                  "id": "sort-bool-descending-variant",
                  "name": "sort  bool  descending  variant"
              },
              {
                  "id": "sort-calendar-ascending",
                  "name": "sort  calendar  ascending"
              },
              {
                  "id": "sort-calendar-descending",
                  "name": "sort  calendar  descending"
              },
              {
                  "id": "sort-clock-ascending",
                  "name": "sort  clock  ascending"
              },
              {
                  "id": "sort-clock-ascending-outline",
                  "name": "sort  clock  ascending  outline"
              },
              {
                  "id": "sort-clock-descending",
                  "name": "sort  clock  descending"
              },
              {
                  "id": "sort-clock-descending-outline",
                  "name": "sort  clock  descending  outline"
              },
              {
                  "id": "sort-descending",
                  "name": "sort  descending"
              },
              {
                  "id": "sort-numeric-ascending",
                  "name": "sort  numeric  ascending"
              },
              {
                  "id": "sort-numeric-ascending-variant",
                  "name": "sort  numeric  ascending  variant"
              },
              {
                  "id": "sort-numeric-descending",
                  "name": "sort  numeric  descending"
              },
              {
                  "id": "sort-numeric-descending-variant",
                  "name": "sort  numeric  descending  variant"
              },
              {
                  "id": "sort-numeric-variant",
                  "name": "sort  numeric  variant"
              },
              {
                  "id": "sort-reverse-variant",
                  "name": "sort  reverse  variant"
              },
              {
                  "id": "sort-variant",
                  "name": "sort  variant"
              },
              {
                  "id": "sort-variant-lock",
                  "name": "sort  variant  lock"
              },
              {
                  "id": "sort-variant-lock-open",
                  "name": "sort  variant  lock  open"
              },
              {
                  "id": "sort-variant-off",
                  "name": "sort  variant  off"
              },
              {
                  "id": "sort-variant-remove",
                  "name": "sort  variant  remove"
              },
              {
                  "id": "soundbar",
                  "name": "soundbar"
              },
              {
                  "id": "soundcloud",
                  "name": "soundcloud"
              },
              {
                  "id": "source-branch",
                  "name": "source  branch"
              },
              {
                  "id": "source-branch-check",
                  "name": "source  branch  check"
              },
              {
                  "id": "source-branch-minus",
                  "name": "source  branch  minus"
              },
              {
                  "id": "source-branch-plus",
                  "name": "source  branch  plus"
              },
              {
                  "id": "source-branch-refresh",
                  "name": "source  branch  refresh"
              },
              {
                  "id": "source-branch-remove",
                  "name": "source  branch  remove"
              },
              {
                  "id": "source-branch-sync",
                  "name": "source  branch  sync"
              },
              {
                  "id": "source-commit",
                  "name": "source  commit"
              },
              {
                  "id": "source-commit-end",
                  "name": "source  commit  end"
              },
              {
                  "id": "source-commit-end-local",
                  "name": "source  commit  end  local"
              },
              {
                  "id": "source-commit-local",
                  "name": "source  commit  local"
              },
              {
                  "id": "source-commit-next-local",
                  "name": "source  commit  next  local"
              },
              {
                  "id": "source-commit-start",
                  "name": "source  commit  start"
              },
              {
                  "id": "source-commit-start-next-local",
                  "name": "source  commit  start  next  local"
              },
              {
                  "id": "source-fork",
                  "name": "source  fork"
              },
              {
                  "id": "source-merge",
                  "name": "source  merge"
              },
              {
                  "id": "source-pull",
                  "name": "source  pull"
              },
              {
                  "id": "source-repository",
                  "name": "source  repository"
              },
              {
                  "id": "source-repository-multiple",
                  "name": "source  repository  multiple"
              },
              {
                  "id": "soy-sauce",
                  "name": "soy  sauce"
              },
              {
                  "id": "soy-sauce-off",
                  "name": "soy  sauce  off"
              },
              {
                  "id": "spa",
                  "name": "spa"
              },
              {
                  "id": "spa-outline",
                  "name": "spa  outline"
              },
              {
                  "id": "space-invaders",
                  "name": "space  invaders"
              },
              {
                  "id": "space-station",
                  "name": "space  station"
              },
              {
                  "id": "spade",
                  "name": "spade"
              },
              {
                  "id": "speaker",
                  "name": "speaker"
              },
              {
                  "id": "speaker-bluetooth",
                  "name": "speaker  bluetooth"
              },
              {
                  "id": "speaker-message",
                  "name": "speaker  message"
              },
              {
                  "id": "speaker-multiple",
                  "name": "speaker  multiple"
              },
              {
                  "id": "speaker-off",
                  "name": "speaker  off"
              },
              {
                  "id": "speaker-pause",
                  "name": "speaker  pause"
              },
              {
                  "id": "speaker-play",
                  "name": "speaker  play"
              },
              {
                  "id": "speaker-stop",
                  "name": "speaker  stop"
              },
              {
                  "id": "speaker-wireless",
                  "name": "speaker  wireless"
              },
              {
                  "id": "spear",
                  "name": "spear"
              },
              {
                  "id": "speedometer",
                  "name": "speedometer"
              },
              {
                  "id": "speedometer-medium",
                  "name": "speedometer  medium"
              },
              {
                  "id": "speedometer-slow",
                  "name": "speedometer  slow"
              },
              {
                  "id": "spellcheck",
                  "name": "spellcheck"
              },
              {
                  "id": "sphere",
                  "name": "sphere"
              },
              {
                  "id": "sphere-off",
                  "name": "sphere  off"
              },
              {
                  "id": "spider",
                  "name": "spider"
              },
              {
                  "id": "spider-outline",
                  "name": "spider  outline"
              },
              {
                  "id": "spider-thread",
                  "name": "spider  thread"
              },
              {
                  "id": "spider-web",
                  "name": "spider  web"
              },
              {
                  "id": "spirit-level",
                  "name": "spirit  level"
              },
              {
                  "id": "spoon-sugar",
                  "name": "spoon  sugar"
              },
              {
                  "id": "spotify",
                  "name": "spotify"
              },
              {
                  "id": "spotlight",
                  "name": "spotlight"
              },
              {
                  "id": "spotlight-beam",
                  "name": "spotlight  beam"
              },
              {
                  "id": "spray",
                  "name": "spray"
              },
              {
                  "id": "spray-bottle",
                  "name": "spray  bottle"
              },
              {
                  "id": "sprinkler",
                  "name": "sprinkler"
              },
              {
                  "id": "sprinkler-fire",
                  "name": "sprinkler  fire"
              },
              {
                  "id": "sprinkler-variant",
                  "name": "sprinkler  variant"
              },
              {
                  "id": "sprout",
                  "name": "sprout"
              },
              {
                  "id": "sprout-outline",
                  "name": "sprout  outline"
              },
              {
                  "id": "square",
                  "name": "square"
              },
              {
                  "id": "square-circle",
                  "name": "square  circle"
              },
              {
                  "id": "square-circle-outline",
                  "name": "square  circle  outline"
              },
              {
                  "id": "square-edit-outline",
                  "name": "square  edit  outline"
              },
              {
                  "id": "square-medium",
                  "name": "square  medium"
              },
              {
                  "id": "square-medium-outline",
                  "name": "square  medium  outline"
              },
              {
                  "id": "square-off",
                  "name": "square  off"
              },
              {
                  "id": "square-off-outline",
                  "name": "square  off  outline"
              },
              {
                  "id": "square-opacity",
                  "name": "square  opacity"
              },
              {
                  "id": "square-outline",
                  "name": "square  outline"
              },
              {
                  "id": "square-root",
                  "name": "square  root"
              },
              {
                  "id": "square-root-box",
                  "name": "square  root  box"
              },
              {
                  "id": "square-rounded",
                  "name": "square  rounded"
              },
              {
                  "id": "square-rounded-badge",
                  "name": "square  rounded  badge"
              },
              {
                  "id": "square-rounded-badge-outline",
                  "name": "square  rounded  badge  outline"
              },
              {
                  "id": "square-rounded-outline",
                  "name": "square  rounded  outline"
              },
              {
                  "id": "square-small",
                  "name": "square  small"
              },
              {
                  "id": "square-wave",
                  "name": "square  wave"
              },
              {
                  "id": "squeegee",
                  "name": "squeegee"
              },
              {
                  "id": "ssh",
                  "name": "ssh"
              },
              {
                  "id": "stack-exchange",
                  "name": "stack  exchange"
              },
              {
                  "id": "stack-overflow",
                  "name": "stack  overflow"
              },
              {
                  "id": "stackpath",
                  "name": "stackpath"
              },
              {
                  "id": "stadium",
                  "name": "stadium"
              },
              {
                  "id": "stadium-outline",
                  "name": "stadium  outline"
              },
              {
                  "id": "stadium-variant",
                  "name": "stadium  variant"
              },
              {
                  "id": "stairs",
                  "name": "stairs"
              },
              {
                  "id": "stairs-box",
                  "name": "stairs  box"
              },
              {
                  "id": "stairs-down",
                  "name": "stairs  down"
              },
              {
                  "id": "stairs-up",
                  "name": "stairs  up"
              },
              {
                  "id": "stamper",
                  "name": "stamper"
              },
              {
                  "id": "standard-definition",
                  "name": "standard  definition"
              },
              {
                  "id": "star",
                  "name": "star"
              },
              {
                  "id": "star-box",
                  "name": "star  box"
              },
              {
                  "id": "star-box-multiple",
                  "name": "star  box  multiple"
              },
              {
                  "id": "star-box-multiple-outline",
                  "name": "star  box  multiple  outline"
              },
              {
                  "id": "star-box-outline",
                  "name": "star  box  outline"
              },
              {
                  "id": "star-check",
                  "name": "star  check"
              },
              {
                  "id": "star-check-outline",
                  "name": "star  check  outline"
              },
              {
                  "id": "star-circle",
                  "name": "star  circle"
              },
              {
                  "id": "star-circle-outline",
                  "name": "star  circle  outline"
              },
              {
                  "id": "star-cog",
                  "name": "star  cog"
              },
              {
                  "id": "star-cog-outline",
                  "name": "star  cog  outline"
              },
              {
                  "id": "star-crescent",
                  "name": "star  crescent"
              },
              {
                  "id": "star-david",
                  "name": "star  david"
              },
              {
                  "id": "star-face",
                  "name": "star  face"
              },
              {
                  "id": "star-four-points",
                  "name": "star  four  points"
              },
              {
                  "id": "star-four-points-box",
                  "name": "star  four  points  box"
              },
              {
                  "id": "star-four-points-box-outline",
                  "name": "star  four  points  box  outline"
              },
              {
                  "id": "star-four-points-circle",
                  "name": "star  four  points  circle"
              },
              {
                  "id": "star-four-points-circle-outline",
                  "name": "star  four  points  circle  outline"
              },
              {
                  "id": "star-four-points-outline",
                  "name": "star  four  points  outline"
              },
              {
                  "id": "star-four-points-small",
                  "name": "star  four  points  small"
              },
              {
                  "id": "star-half",
                  "name": "star  half"
              },
              {
                  "id": "star-half-full",
                  "name": "star  half  full"
              },
              {
                  "id": "star-minus",
                  "name": "star  minus"
              },
              {
                  "id": "star-minus-outline",
                  "name": "star  minus  outline"
              },
              {
                  "id": "star-off",
                  "name": "star  off"
              },
              {
                  "id": "star-off-outline",
                  "name": "star  off  outline"
              },
              {
                  "id": "star-outline",
                  "name": "star  outline"
              },
              {
                  "id": "star-plus",
                  "name": "star  plus"
              },
              {
                  "id": "star-plus-outline",
                  "name": "star  plus  outline"
              },
              {
                  "id": "star-remove",
                  "name": "star  remove"
              },
              {
                  "id": "star-remove-outline",
                  "name": "star  remove  outline"
              },
              {
                  "id": "star-settings",
                  "name": "star  settings"
              },
              {
                  "id": "star-settings-outline",
                  "name": "star  settings  outline"
              },
              {
                  "id": "star-shooting",
                  "name": "star  shooting"
              },
              {
                  "id": "star-shooting-outline",
                  "name": "star  shooting  outline"
              },
              {
                  "id": "star-three-points",
                  "name": "star  three  points"
              },
              {
                  "id": "star-three-points-outline",
                  "name": "star  three  points  outline"
              },
              {
                  "id": "state-machine",
                  "name": "state  machine"
              },
              {
                  "id": "steam",
                  "name": "steam"
              },
              {
                  "id": "steering",
                  "name": "steering"
              },
              {
                  "id": "steering-off",
                  "name": "steering  off"
              },
              {
                  "id": "step-backward",
                  "name": "step  backward"
              },
              {
                  "id": "step-backward-2",
                  "name": "step  backward  2"
              },
              {
                  "id": "step-forward",
                  "name": "step  forward"
              },
              {
                  "id": "step-forward-2",
                  "name": "step  forward  2"
              },
              {
                  "id": "stethoscope",
                  "name": "stethoscope"
              },
              {
                  "id": "sticker",
                  "name": "sticker"
              },
              {
                  "id": "sticker-alert",
                  "name": "sticker  alert"
              },
              {
                  "id": "sticker-alert-outline",
                  "name": "sticker  alert  outline"
              },
              {
                  "id": "sticker-check",
                  "name": "sticker  check"
              },
              {
                  "id": "sticker-check-outline",
                  "name": "sticker  check  outline"
              },
              {
                  "id": "sticker-circle-outline",
                  "name": "sticker  circle  outline"
              },
              {
                  "id": "sticker-emoji",
                  "name": "sticker  emoji"
              },
              {
                  "id": "sticker-minus",
                  "name": "sticker  minus"
              },
              {
                  "id": "sticker-minus-outline",
                  "name": "sticker  minus  outline"
              },
              {
                  "id": "sticker-outline",
                  "name": "sticker  outline"
              },
              {
                  "id": "sticker-plus",
                  "name": "sticker  plus"
              },
              {
                  "id": "sticker-plus-outline",
                  "name": "sticker  plus  outline"
              },
              {
                  "id": "sticker-remove",
                  "name": "sticker  remove"
              },
              {
                  "id": "sticker-remove-outline",
                  "name": "sticker  remove  outline"
              },
              {
                  "id": "sticker-text",
                  "name": "sticker  text"
              },
              {
                  "id": "sticker-text-outline",
                  "name": "sticker  text  outline"
              },
              {
                  "id": "stocking",
                  "name": "stocking"
              },
              {
                  "id": "stomach",
                  "name": "stomach"
              },
              {
                  "id": "stool",
                  "name": "stool"
              },
              {
                  "id": "stool-outline",
                  "name": "stool  outline"
              },
              {
                  "id": "stop",
                  "name": "stop"
              },
              {
                  "id": "stop-circle",
                  "name": "stop  circle"
              },
              {
                  "id": "stop-circle-outline",
                  "name": "stop  circle  outline"
              },
              {
                  "id": "storage-tank",
                  "name": "storage  tank"
              },
              {
                  "id": "storage-tank-outline",
                  "name": "storage  tank  outline"
              },
              {
                  "id": "store",
                  "name": "store"
              },
              {
                  "id": "store-24-hour",
                  "name": "store  24  hour"
              },
              {
                  "id": "store-alert",
                  "name": "store  alert"
              },
              {
                  "id": "store-alert-outline",
                  "name": "store  alert  outline"
              },
              {
                  "id": "store-check",
                  "name": "store  check"
              },
              {
                  "id": "store-check-outline",
                  "name": "store  check  outline"
              },
              {
                  "id": "store-clock",
                  "name": "store  clock"
              },
              {
                  "id": "store-clock-outline",
                  "name": "store  clock  outline"
              },
              {
                  "id": "store-cog",
                  "name": "store  cog"
              },
              {
                  "id": "store-cog-outline",
                  "name": "store  cog  outline"
              },
              {
                  "id": "store-edit",
                  "name": "store  edit"
              },
              {
                  "id": "store-edit-outline",
                  "name": "store  edit  outline"
              },
              {
                  "id": "store-marker",
                  "name": "store  marker"
              },
              {
                  "id": "store-marker-outline",
                  "name": "store  marker  outline"
              },
              {
                  "id": "store-minus",
                  "name": "store  minus"
              },
              {
                  "id": "store-minus-outline",
                  "name": "store  minus  outline"
              },
              {
                  "id": "store-off",
                  "name": "store  off"
              },
              {
                  "id": "store-off-outline",
                  "name": "store  off  outline"
              },
              {
                  "id": "store-outline",
                  "name": "store  outline"
              },
              {
                  "id": "store-plus",
                  "name": "store  plus"
              },
              {
                  "id": "store-plus-outline",
                  "name": "store  plus  outline"
              },
              {
                  "id": "store-remove",
                  "name": "store  remove"
              },
              {
                  "id": "store-remove-outline",
                  "name": "store  remove  outline"
              },
              {
                  "id": "store-search",
                  "name": "store  search"
              },
              {
                  "id": "store-search-outline",
                  "name": "store  search  outline"
              },
              {
                  "id": "store-settings",
                  "name": "store  settings"
              },
              {
                  "id": "store-settings-outline",
                  "name": "store  settings  outline"
              },
              {
                  "id": "storefront",
                  "name": "storefront"
              },
              {
                  "id": "storefront-check",
                  "name": "storefront  check"
              },
              {
                  "id": "storefront-check-outline",
                  "name": "storefront  check  outline"
              },
              {
                  "id": "storefront-edit",
                  "name": "storefront  edit"
              },
              {
                  "id": "storefront-edit-outline",
                  "name": "storefront  edit  outline"
              },
              {
                  "id": "storefront-minus",
                  "name": "storefront  minus"
              },
              {
                  "id": "storefront-minus-outline",
                  "name": "storefront  minus  outline"
              },
              {
                  "id": "storefront-outline",
                  "name": "storefront  outline"
              },
              {
                  "id": "storefront-plus",
                  "name": "storefront  plus"
              },
              {
                  "id": "storefront-plus-outline",
                  "name": "storefront  plus  outline"
              },
              {
                  "id": "storefront-remove",
                  "name": "storefront  remove"
              },
              {
                  "id": "storefront-remove-outline",
                  "name": "storefront  remove  outline"
              },
              {
                  "id": "stove",
                  "name": "stove"
              },
              {
                  "id": "strategy",
                  "name": "strategy"
              },
              {
                  "id": "stretch-to-page",
                  "name": "stretch  to  page"
              },
              {
                  "id": "stretch-to-page-outline",
                  "name": "stretch  to  page  outline"
              },
              {
                  "id": "string-lights",
                  "name": "string  lights"
              },
              {
                  "id": "string-lights-off",
                  "name": "string  lights  off"
              },
              {
                  "id": "subdirectory-arrow-left",
                  "name": "subdirectory  arrow  left"
              },
              {
                  "id": "subdirectory-arrow-right",
                  "name": "subdirectory  arrow  right"
              },
              {
                  "id": "submarine",
                  "name": "submarine"
              },
              {
                  "id": "subtitles",
                  "name": "subtitles"
              },
              {
                  "id": "subtitles-outline",
                  "name": "subtitles  outline"
              },
              {
                  "id": "subway",
                  "name": "subway"
              },
              {
                  "id": "subway-alert-variant",
                  "name": "subway  alert  variant"
              },
              {
                  "id": "subway-variant",
                  "name": "subway  variant"
              },
              {
                  "id": "summit",
                  "name": "summit"
              },
              {
                  "id": "sun-angle",
                  "name": "sun  angle"
              },
              {
                  "id": "sun-angle-outline",
                  "name": "sun  angle  outline"
              },
              {
                  "id": "sun-clock",
                  "name": "sun  clock"
              },
              {
                  "id": "sun-clock-outline",
                  "name": "sun  clock  outline"
              },
              {
                  "id": "sun-compass",
                  "name": "sun  compass"
              },
              {
                  "id": "sun-snowflake",
                  "name": "sun  snowflake"
              },
              {
                  "id": "sun-snowflake-variant",
                  "name": "sun  snowflake  variant"
              },
              {
                  "id": "sun-thermometer",
                  "name": "sun  thermometer"
              },
              {
                  "id": "sun-thermometer-outline",
                  "name": "sun  thermometer  outline"
              },
              {
                  "id": "sun-wireless",
                  "name": "sun  wireless"
              },
              {
                  "id": "sun-wireless-outline",
                  "name": "sun  wireless  outline"
              },
              {
                  "id": "sunglasses",
                  "name": "sunglasses"
              },
              {
                  "id": "surfing",
                  "name": "surfing"
              },
              {
                  "id": "surround-sound",
                  "name": "surround  sound"
              },
              {
                  "id": "surround-sound-2-0",
                  "name": "surround  sound  2  0"
              },
              {
                  "id": "surround-sound-2-1",
                  "name": "surround  sound  2  1"
              },
              {
                  "id": "surround-sound-3-1",
                  "name": "surround  sound  3  1"
              },
              {
                  "id": "surround-sound-5-1",
                  "name": "surround  sound  5  1"
              },
              {
                  "id": "surround-sound-5-1-2",
                  "name": "surround  sound  5  1  2"
              },
              {
                  "id": "surround-sound-7-1",
                  "name": "surround  sound  7  1"
              },
              {
                  "id": "svg",
                  "name": "svg"
              },
              {
                  "id": "swap-horizontal",
                  "name": "swap  horizontal"
              },
              {
                  "id": "swap-horizontal-bold",
                  "name": "swap  horizontal  bold"
              },
              {
                  "id": "swap-horizontal-circle",
                  "name": "swap  horizontal  circle"
              },
              {
                  "id": "swap-horizontal-circle-outline",
                  "name": "swap  horizontal  circle  outline"
              },
              {
                  "id": "swap-horizontal-variant",
                  "name": "swap  horizontal  variant"
              },
              {
                  "id": "swap-vertical",
                  "name": "swap  vertical"
              },
              {
                  "id": "swap-vertical-bold",
                  "name": "swap  vertical  bold"
              },
              {
                  "id": "swap-vertical-circle",
                  "name": "swap  vertical  circle"
              },
              {
                  "id": "swap-vertical-circle-outline",
                  "name": "swap  vertical  circle  outline"
              },
              {
                  "id": "swap-vertical-variant",
                  "name": "swap  vertical  variant"
              },
              {
                  "id": "swim",
                  "name": "swim"
              },
              {
                  "id": "switch",
                  "name": "switch"
              },
              {
                  "id": "sword",
                  "name": "sword"
              },
              {
                  "id": "sword-cross",
                  "name": "sword  cross"
              },
              {
                  "id": "syllabary-hangul",
                  "name": "syllabary  hangul"
              },
              {
                  "id": "syllabary-hiragana",
                  "name": "syllabary  hiragana"
              },
              {
                  "id": "syllabary-katakana",
                  "name": "syllabary  katakana"
              },
              {
                  "id": "syllabary-katakana-halfwidth",
                  "name": "syllabary  katakana  halfwidth"
              },
              {
                  "id": "symbol",
                  "name": "symbol"
              },
              {
                  "id": "symfony",
                  "name": "symfony"
              },
              {
                  "id": "synagogue",
                  "name": "synagogue"
              },
              {
                  "id": "synagogue-outline",
                  "name": "synagogue  outline"
              },
              {
                  "id": "sync",
                  "name": "sync"
              },
              {
                  "id": "sync-alert",
                  "name": "sync  alert"
              },
              {
                  "id": "sync-circle",
                  "name": "sync  circle"
              },
              {
                  "id": "sync-off",
                  "name": "sync  off"
              },
              {
                  "id": "tab",
                  "name": "tab"
              },
              {
                  "id": "tab-minus",
                  "name": "tab  minus"
              },
              {
                  "id": "tab-plus",
                  "name": "tab  plus"
              },
              {
                  "id": "tab-remove",
                  "name": "tab  remove"
              },
              {
                  "id": "tab-search",
                  "name": "tab  search"
              },
              {
                  "id": "tab-unselected",
                  "name": "tab  unselected"
              },
              {
                  "id": "table",
                  "name": "table"
              },
              {
                  "id": "table-account",
                  "name": "table  account"
              },
              {
                  "id": "table-alert",
                  "name": "table  alert"
              },
              {
                  "id": "table-arrow-down",
                  "name": "table  arrow  down"
              },
              {
                  "id": "table-arrow-left",
                  "name": "table  arrow  left"
              },
              {
                  "id": "table-arrow-right",
                  "name": "table  arrow  right"
              },
              {
                  "id": "table-arrow-up",
                  "name": "table  arrow  up"
              },
              {
                  "id": "table-border",
                  "name": "table  border"
              },
              {
                  "id": "table-cancel",
                  "name": "table  cancel"
              },
              {
                  "id": "table-chair",
                  "name": "table  chair"
              },
              {
                  "id": "table-check",
                  "name": "table  check"
              },
              {
                  "id": "table-clock",
                  "name": "table  clock"
              },
              {
                  "id": "table-cog",
                  "name": "table  cog"
              },
              {
                  "id": "table-column",
                  "name": "table  column"
              },
              {
                  "id": "table-column-plus-after",
                  "name": "table  column  plus  after"
              },
              {
                  "id": "table-column-plus-before",
                  "name": "table  column  plus  before"
              },
              {
                  "id": "table-column-remove",
                  "name": "table  column  remove"
              },
              {
                  "id": "table-column-width",
                  "name": "table  column  width"
              },
              {
                  "id": "table-edit",
                  "name": "table  edit"
              },
              {
                  "id": "table-eye",
                  "name": "table  eye"
              },
              {
                  "id": "table-eye-off",
                  "name": "table  eye  off"
              },
              {
                  "id": "table-filter",
                  "name": "table  filter"
              },
              {
                  "id": "table-furniture",
                  "name": "table  furniture"
              },
              {
                  "id": "table-headers-eye",
                  "name": "table  headers  eye"
              },
              {
                  "id": "table-headers-eye-off",
                  "name": "table  headers  eye  off"
              },
              {
                  "id": "table-heart",
                  "name": "table  heart"
              },
              {
                  "id": "table-key",
                  "name": "table  key"
              },
              {
                  "id": "table-large",
                  "name": "table  large"
              },
              {
                  "id": "table-large-plus",
                  "name": "table  large  plus"
              },
              {
                  "id": "table-large-remove",
                  "name": "table  large  remove"
              },
              {
                  "id": "table-lock",
                  "name": "table  lock"
              },
              {
                  "id": "table-merge-cells",
                  "name": "table  merge  cells"
              },
              {
                  "id": "table-minus",
                  "name": "table  minus"
              },
              {
                  "id": "table-multiple",
                  "name": "table  multiple"
              },
              {
                  "id": "table-network",
                  "name": "table  network"
              },
              {
                  "id": "table-of-contents",
                  "name": "table  of  contents"
              },
              {
                  "id": "table-off",
                  "name": "table  off"
              },
              {
                  "id": "table-picnic",
                  "name": "table  picnic"
              },
              {
                  "id": "table-pivot",
                  "name": "table  pivot"
              },
              {
                  "id": "table-plus",
                  "name": "table  plus"
              },
              {
                  "id": "table-question",
                  "name": "table  question"
              },
              {
                  "id": "table-refresh",
                  "name": "table  refresh"
              },
              {
                  "id": "table-remove",
                  "name": "table  remove"
              },
              {
                  "id": "table-row",
                  "name": "table  row"
              },
              {
                  "id": "table-row-height",
                  "name": "table  row  height"
              },
              {
                  "id": "table-row-plus-after",
                  "name": "table  row  plus  after"
              },
              {
                  "id": "table-row-plus-before",
                  "name": "table  row  plus  before"
              },
              {
                  "id": "table-row-remove",
                  "name": "table  row  remove"
              },
              {
                  "id": "table-search",
                  "name": "table  search"
              },
              {
                  "id": "table-settings",
                  "name": "table  settings"
              },
              {
                  "id": "table-split-cell",
                  "name": "table  split  cell"
              },
              {
                  "id": "table-star",
                  "name": "table  star"
              },
              {
                  "id": "table-sync",
                  "name": "table  sync"
              },
              {
                  "id": "table-tennis",
                  "name": "table  tennis"
              },
              {
                  "id": "tablet",
                  "name": "tablet"
              },
              {
                  "id": "tablet-cellphone",
                  "name": "tablet  cellphone"
              },
              {
                  "id": "tablet-dashboard",
                  "name": "tablet  dashboard"
              },
              {
                  "id": "taco",
                  "name": "taco"
              },
              {
                  "id": "tag",
                  "name": "tag"
              },
              {
                  "id": "tag-arrow-down",
                  "name": "tag  arrow  down"
              },
              {
                  "id": "tag-arrow-down-outline",
                  "name": "tag  arrow  down  outline"
              },
              {
                  "id": "tag-arrow-left",
                  "name": "tag  arrow  left"
              },
              {
                  "id": "tag-arrow-left-outline",
                  "name": "tag  arrow  left  outline"
              },
              {
                  "id": "tag-arrow-right",
                  "name": "tag  arrow  right"
              },
              {
                  "id": "tag-arrow-right-outline",
                  "name": "tag  arrow  right  outline"
              },
              {
                  "id": "tag-arrow-up",
                  "name": "tag  arrow  up"
              },
              {
                  "id": "tag-arrow-up-outline",
                  "name": "tag  arrow  up  outline"
              },
              {
                  "id": "tag-check",
                  "name": "tag  check"
              },
              {
                  "id": "tag-check-outline",
                  "name": "tag  check  outline"
              },
              {
                  "id": "tag-faces",
                  "name": "tag  faces"
              },
              {
                  "id": "tag-heart",
                  "name": "tag  heart"
              },
              {
                  "id": "tag-heart-outline",
                  "name": "tag  heart  outline"
              },
              {
                  "id": "tag-hidden",
                  "name": "tag  hidden"
              },
              {
                  "id": "tag-minus",
                  "name": "tag  minus"
              },
              {
                  "id": "tag-minus-outline",
                  "name": "tag  minus  outline"
              },
              {
                  "id": "tag-multiple",
                  "name": "tag  multiple"
              },
              {
                  "id": "tag-multiple-outline",
                  "name": "tag  multiple  outline"
              },
              {
                  "id": "tag-off",
                  "name": "tag  off"
              },
              {
                  "id": "tag-off-outline",
                  "name": "tag  off  outline"
              },
              {
                  "id": "tag-outline",
                  "name": "tag  outline"
              },
              {
                  "id": "tag-plus",
                  "name": "tag  plus"
              },
              {
                  "id": "tag-plus-outline",
                  "name": "tag  plus  outline"
              },
              {
                  "id": "tag-remove",
                  "name": "tag  remove"
              },
              {
                  "id": "tag-remove-outline",
                  "name": "tag  remove  outline"
              },
              {
                  "id": "tag-search",
                  "name": "tag  search"
              },
              {
                  "id": "tag-search-outline",
                  "name": "tag  search  outline"
              },
              {
                  "id": "tag-text",
                  "name": "tag  text"
              },
              {
                  "id": "tag-text-outline",
                  "name": "tag  text  outline"
              },
              {
                  "id": "tailwind",
                  "name": "tailwind"
              },
              {
                  "id": "tally-mark-1",
                  "name": "tally  mark  1"
              },
              {
                  "id": "tally-mark-2",
                  "name": "tally  mark  2"
              },
              {
                  "id": "tally-mark-3",
                  "name": "tally  mark  3"
              },
              {
                  "id": "tally-mark-4",
                  "name": "tally  mark  4"
              },
              {
                  "id": "tally-mark-5",
                  "name": "tally  mark  5"
              },
              {
                  "id": "tangram",
                  "name": "tangram"
              },
              {
                  "id": "tank",
                  "name": "tank"
              },
              {
                  "id": "tanker-truck",
                  "name": "tanker  truck"
              },
              {
                  "id": "tape-drive",
                  "name": "tape  drive"
              },
              {
                  "id": "tape-measure",
                  "name": "tape  measure"
              },
              {
                  "id": "target",
                  "name": "target"
              },
              {
                  "id": "target-account",
                  "name": "target  account"
              },
              {
                  "id": "target-variant",
                  "name": "target  variant"
              },
              {
                  "id": "taxi",
                  "name": "taxi"
              },
              {
                  "id": "tea",
                  "name": "tea"
              },
              {
                  "id": "tea-outline",
                  "name": "tea  outline"
              },
              {
                  "id": "teamviewer",
                  "name": "teamviewer"
              },
              {
                  "id": "teddy-bear",
                  "name": "teddy  bear"
              },
              {
                  "id": "telescope",
                  "name": "telescope"
              },
              {
                  "id": "television",
                  "name": "television"
              },
              {
                  "id": "television-ambient-light",
                  "name": "television  ambient  light"
              },
              {
                  "id": "television-box",
                  "name": "television  box"
              },
              {
                  "id": "television-classic",
                  "name": "television  classic"
              },
              {
                  "id": "television-classic-off",
                  "name": "television  classic  off"
              },
              {
                  "id": "television-guide",
                  "name": "television  guide"
              },
              {
                  "id": "television-off",
                  "name": "television  off"
              },
              {
                  "id": "television-pause",
                  "name": "television  pause"
              },
              {
                  "id": "television-play",
                  "name": "television  play"
              },
              {
                  "id": "television-shimmer",
                  "name": "television  shimmer"
              },
              {
                  "id": "television-speaker",
                  "name": "television  speaker"
              },
              {
                  "id": "television-speaker-off",
                  "name": "television  speaker  off"
              },
              {
                  "id": "television-stop",
                  "name": "television  stop"
              },
              {
                  "id": "temperature-celsius",
                  "name": "temperature  celsius"
              },
              {
                  "id": "temperature-fahrenheit",
                  "name": "temperature  fahrenheit"
              },
              {
                  "id": "temperature-kelvin",
                  "name": "temperature  kelvin"
              },
              {
                  "id": "temple-buddhist",
                  "name": "temple  buddhist"
              },
              {
                  "id": "temple-buddhist-outline",
                  "name": "temple  buddhist  outline"
              },
              {
                  "id": "temple-hindu",
                  "name": "temple  hindu"
              },
              {
                  "id": "temple-hindu-outline",
                  "name": "temple  hindu  outline"
              },
              {
                  "id": "tennis",
                  "name": "tennis"
              },
              {
                  "id": "tennis-ball",
                  "name": "tennis  ball"
              },
              {
                  "id": "tennis-ball-outline",
                  "name": "tennis  ball  outline"
              },
              {
                  "id": "tent",
                  "name": "tent"
              },
              {
                  "id": "terraform",
                  "name": "terraform"
              },
              {
                  "id": "terrain",
                  "name": "terrain"
              },
              {
                  "id": "test-tube",
                  "name": "test  tube"
              },
              {
                  "id": "test-tube-empty",
                  "name": "test  tube  empty"
              },
              {
                  "id": "test-tube-off",
                  "name": "test  tube  off"
              },
              {
                  "id": "text",
                  "name": "text"
              },
              {
                  "id": "text-account",
                  "name": "text  account"
              },
              {
                  "id": "text-box",
                  "name": "text  box"
              },
              {
                  "id": "text-box-check",
                  "name": "text  box  check"
              },
              {
                  "id": "text-box-check-outline",
                  "name": "text  box  check  outline"
              },
              {
                  "id": "text-box-edit",
                  "name": "text  box  edit"
              },
              {
                  "id": "text-box-edit-outline",
                  "name": "text  box  edit  outline"
              },
              {
                  "id": "text-box-minus",
                  "name": "text  box  minus"
              },
              {
                  "id": "text-box-minus-outline",
                  "name": "text  box  minus  outline"
              },
              {
                  "id": "text-box-multiple",
                  "name": "text  box  multiple"
              },
              {
                  "id": "text-box-multiple-outline",
                  "name": "text  box  multiple  outline"
              },
              {
                  "id": "text-box-outline",
                  "name": "text  box  outline"
              },
              {
                  "id": "text-box-plus",
                  "name": "text  box  plus"
              },
              {
                  "id": "text-box-plus-outline",
                  "name": "text  box  plus  outline"
              },
              {
                  "id": "text-box-remove",
                  "name": "text  box  remove"
              },
              {
                  "id": "text-box-remove-outline",
                  "name": "text  box  remove  outline"
              },
              {
                  "id": "text-box-search",
                  "name": "text  box  search"
              },
              {
                  "id": "text-box-search-outline",
                  "name": "text  box  search  outline"
              },
              {
                  "id": "text-long",
                  "name": "text  long"
              },
              {
                  "id": "text-recognition",
                  "name": "text  recognition"
              },
              {
                  "id": "text-search",
                  "name": "text  search"
              },
              {
                  "id": "text-search-variant",
                  "name": "text  search  variant"
              },
              {
                  "id": "text-shadow",
                  "name": "text  shadow"
              },
              {
                  "id": "text-short",
                  "name": "text  short"
              },
              {
                  "id": "texture",
                  "name": "texture"
              },
              {
                  "id": "texture-box",
                  "name": "texture  box"
              },
              {
                  "id": "theater",
                  "name": "theater"
              },
              {
                  "id": "theme-light-dark",
                  "name": "theme  light  dark"
              },
              {
                  "id": "thermometer",
                  "name": "thermometer"
              },
              {
                  "id": "thermometer-alert",
                  "name": "thermometer  alert"
              },
              {
                  "id": "thermometer-auto",
                  "name": "thermometer  auto"
              },
              {
                  "id": "thermometer-bluetooth",
                  "name": "thermometer  bluetooth"
              },
              {
                  "id": "thermometer-check",
                  "name": "thermometer  check"
              },
              {
                  "id": "thermometer-chevron-down",
                  "name": "thermometer  chevron  down"
              },
              {
                  "id": "thermometer-chevron-up",
                  "name": "thermometer  chevron  up"
              },
              {
                  "id": "thermometer-high",
                  "name": "thermometer  high"
              },
              {
                  "id": "thermometer-lines",
                  "name": "thermometer  lines"
              },
              {
                  "id": "thermometer-low",
                  "name": "thermometer  low"
              },
              {
                  "id": "thermometer-minus",
                  "name": "thermometer  minus"
              },
              {
                  "id": "thermometer-off",
                  "name": "thermometer  off"
              },
              {
                  "id": "thermometer-plus",
                  "name": "thermometer  plus"
              },
              {
                  "id": "thermometer-probe",
                  "name": "thermometer  probe"
              },
              {
                  "id": "thermometer-probe-off",
                  "name": "thermometer  probe  off"
              },
              {
                  "id": "thermometer-water",
                  "name": "thermometer  water"
              },
              {
                  "id": "thermostat",
                  "name": "thermostat"
              },
              {
                  "id": "thermostat-auto",
                  "name": "thermostat  auto"
              },
              {
                  "id": "thermostat-box",
                  "name": "thermostat  box"
              },
              {
                  "id": "thermostat-box-auto",
                  "name": "thermostat  box  auto"
              },
              {
                  "id": "thermostat-cog",
                  "name": "thermostat  cog"
              },
              {
                  "id": "thought-bubble",
                  "name": "thought  bubble"
              },
              {
                  "id": "thought-bubble-outline",
                  "name": "thought  bubble  outline"
              },
              {
                  "id": "thumb-down",
                  "name": "thumb  down"
              },
              {
                  "id": "thumb-down-outline",
                  "name": "thumb  down  outline"
              },
              {
                  "id": "thumb-up",
                  "name": "thumb  up"
              },
              {
                  "id": "thumb-up-outline",
                  "name": "thumb  up  outline"
              },
              {
                  "id": "thumbs-up-down",
                  "name": "thumbs  up  down"
              },
              {
                  "id": "thumbs-up-down-outline",
                  "name": "thumbs  up  down  outline"
              },
              {
                  "id": "ticket",
                  "name": "ticket"
              },
              {
                  "id": "ticket-account",
                  "name": "ticket  account"
              },
              {
                  "id": "ticket-confirmation",
                  "name": "ticket  confirmation"
              },
              {
                  "id": "ticket-confirmation-outline",
                  "name": "ticket  confirmation  outline"
              },
              {
                  "id": "ticket-outline",
                  "name": "ticket  outline"
              },
              {
                  "id": "ticket-percent",
                  "name": "ticket  percent"
              },
              {
                  "id": "ticket-percent-outline",
                  "name": "ticket  percent  outline"
              },
              {
                  "id": "tie",
                  "name": "tie"
              },
              {
                  "id": "tilde",
                  "name": "tilde"
              },
              {
                  "id": "tilde-off",
                  "name": "tilde  off"
              },
              {
                  "id": "timelapse",
                  "name": "timelapse"
              },
              {
                  "id": "timeline",
                  "name": "timeline"
              },
              {
                  "id": "timeline-alert",
                  "name": "timeline  alert"
              },
              {
                  "id": "timeline-alert-outline",
                  "name": "timeline  alert  outline"
              },
              {
                  "id": "timeline-check",
                  "name": "timeline  check"
              },
              {
                  "id": "timeline-check-outline",
                  "name": "timeline  check  outline"
              },
              {
                  "id": "timeline-clock",
                  "name": "timeline  clock"
              },
              {
                  "id": "timeline-clock-outline",
                  "name": "timeline  clock  outline"
              },
              {
                  "id": "timeline-minus",
                  "name": "timeline  minus"
              },
              {
                  "id": "timeline-minus-outline",
                  "name": "timeline  minus  outline"
              },
              {
                  "id": "timeline-outline",
                  "name": "timeline  outline"
              },
              {
                  "id": "timeline-plus",
                  "name": "timeline  plus"
              },
              {
                  "id": "timeline-plus-outline",
                  "name": "timeline  plus  outline"
              },
              {
                  "id": "timeline-question",
                  "name": "timeline  question"
              },
              {
                  "id": "timeline-question-outline",
                  "name": "timeline  question  outline"
              },
              {
                  "id": "timeline-remove",
                  "name": "timeline  remove"
              },
              {
                  "id": "timeline-remove-outline",
                  "name": "timeline  remove  outline"
              },
              {
                  "id": "timeline-text",
                  "name": "timeline  text"
              },
              {
                  "id": "timeline-text-outline",
                  "name": "timeline  text  outline"
              },
              {
                  "id": "timer",
                  "name": "timer"
              },
              {
                  "id": "timer-10",
                  "name": "timer  10"
              },
              {
                  "id": "timer-3",
                  "name": "timer  3"
              },
              {
                  "id": "timer-alert",
                  "name": "timer  alert"
              },
              {
                  "id": "timer-alert-outline",
                  "name": "timer  alert  outline"
              },
              {
                  "id": "timer-cancel",
                  "name": "timer  cancel"
              },
              {
                  "id": "timer-cancel-outline",
                  "name": "timer  cancel  outline"
              },
              {
                  "id": "timer-check",
                  "name": "timer  check"
              },
              {
                  "id": "timer-check-outline",
                  "name": "timer  check  outline"
              },
              {
                  "id": "timer-cog",
                  "name": "timer  cog"
              },
              {
                  "id": "timer-cog-outline",
                  "name": "timer  cog  outline"
              },
              {
                  "id": "timer-edit",
                  "name": "timer  edit"
              },
              {
                  "id": "timer-edit-outline",
                  "name": "timer  edit  outline"
              },
              {
                  "id": "timer-lock",
                  "name": "timer  lock"
              },
              {
                  "id": "timer-lock-open",
                  "name": "timer  lock  open"
              },
              {
                  "id": "timer-lock-open-outline",
                  "name": "timer  lock  open  outline"
              },
              {
                  "id": "timer-lock-outline",
                  "name": "timer  lock  outline"
              },
              {
                  "id": "timer-marker",
                  "name": "timer  marker"
              },
              {
                  "id": "timer-marker-outline",
                  "name": "timer  marker  outline"
              },
              {
                  "id": "timer-minus",
                  "name": "timer  minus"
              },
              {
                  "id": "timer-minus-outline",
                  "name": "timer  minus  outline"
              },
              {
                  "id": "timer-music",
                  "name": "timer  music"
              },
              {
                  "id": "timer-music-outline",
                  "name": "timer  music  outline"
              },
              {
                  "id": "timer-off",
                  "name": "timer  off"
              },
              {
                  "id": "timer-off-outline",
                  "name": "timer  off  outline"
              },
              {
                  "id": "timer-outline",
                  "name": "timer  outline"
              },
              {
                  "id": "timer-pause",
                  "name": "timer  pause"
              },
              {
                  "id": "timer-pause-outline",
                  "name": "timer  pause  outline"
              },
              {
                  "id": "timer-play",
                  "name": "timer  play"
              },
              {
                  "id": "timer-play-outline",
                  "name": "timer  play  outline"
              },
              {
                  "id": "timer-plus",
                  "name": "timer  plus"
              },
              {
                  "id": "timer-plus-outline",
                  "name": "timer  plus  outline"
              },
              {
                  "id": "timer-refresh",
                  "name": "timer  refresh"
              },
              {
                  "id": "timer-refresh-outline",
                  "name": "timer  refresh  outline"
              },
              {
                  "id": "timer-remove",
                  "name": "timer  remove"
              },
              {
                  "id": "timer-remove-outline",
                  "name": "timer  remove  outline"
              },
              {
                  "id": "timer-sand",
                  "name": "timer  sand"
              },
              {
                  "id": "timer-sand-complete",
                  "name": "timer  sand  complete"
              },
              {
                  "id": "timer-sand-empty",
                  "name": "timer  sand  empty"
              },
              {
                  "id": "timer-sand-full",
                  "name": "timer  sand  full"
              },
              {
                  "id": "timer-sand-paused",
                  "name": "timer  sand  paused"
              },
              {
                  "id": "timer-settings",
                  "name": "timer  settings"
              },
              {
                  "id": "timer-settings-outline",
                  "name": "timer  settings  outline"
              },
              {
                  "id": "timer-star",
                  "name": "timer  star"
              },
              {
                  "id": "timer-star-outline",
                  "name": "timer  star  outline"
              },
              {
                  "id": "timer-stop",
                  "name": "timer  stop"
              },
              {
                  "id": "timer-stop-outline",
                  "name": "timer  stop  outline"
              },
              {
                  "id": "timer-sync",
                  "name": "timer  sync"
              },
              {
                  "id": "timer-sync-outline",
                  "name": "timer  sync  outline"
              },
              {
                  "id": "timetable",
                  "name": "timetable"
              },
              {
                  "id": "tire",
                  "name": "tire"
              },
              {
                  "id": "toaster",
                  "name": "toaster"
              },
              {
                  "id": "toaster-off",
                  "name": "toaster  off"
              },
              {
                  "id": "toaster-oven",
                  "name": "toaster  oven"
              },
              {
                  "id": "toggle-switch",
                  "name": "toggle  switch"
              },
              {
                  "id": "toggle-switch-off",
                  "name": "toggle  switch  off"
              },
              {
                  "id": "toggle-switch-off-outline",
                  "name": "toggle  switch  off  outline"
              },
              {
                  "id": "toggle-switch-outline",
                  "name": "toggle  switch  outline"
              },
              {
                  "id": "toggle-switch-variant",
                  "name": "toggle  switch  variant"
              },
              {
                  "id": "toggle-switch-variant-off",
                  "name": "toggle  switch  variant  off"
              },
              {
                  "id": "toilet",
                  "name": "toilet"
              },
              {
                  "id": "toolbox",
                  "name": "toolbox"
              },
              {
                  "id": "toolbox-outline",
                  "name": "toolbox  outline"
              },
              {
                  "id": "tools",
                  "name": "tools"
              },
              {
                  "id": "tooltip",
                  "name": "tooltip"
              },
              {
                  "id": "tooltip-account",
                  "name": "tooltip  account"
              },
              {
                  "id": "tooltip-cellphone",
                  "name": "tooltip  cellphone"
              },
              {
                  "id": "tooltip-check",
                  "name": "tooltip  check"
              },
              {
                  "id": "tooltip-check-outline",
                  "name": "tooltip  check  outline"
              },
              {
                  "id": "tooltip-edit",
                  "name": "tooltip  edit"
              },
              {
                  "id": "tooltip-edit-outline",
                  "name": "tooltip  edit  outline"
              },
              {
                  "id": "tooltip-image",
                  "name": "tooltip  image"
              },
              {
                  "id": "tooltip-image-outline",
                  "name": "tooltip  image  outline"
              },
              {
                  "id": "tooltip-minus",
                  "name": "tooltip  minus"
              },
              {
                  "id": "tooltip-minus-outline",
                  "name": "tooltip  minus  outline"
              },
              {
                  "id": "tooltip-outline",
                  "name": "tooltip  outline"
              },
              {
                  "id": "tooltip-plus",
                  "name": "tooltip  plus"
              },
              {
                  "id": "tooltip-plus-outline",
                  "name": "tooltip  plus  outline"
              },
              {
                  "id": "tooltip-question",
                  "name": "tooltip  question"
              },
              {
                  "id": "tooltip-question-outline",
                  "name": "tooltip  question  outline"
              },
              {
                  "id": "tooltip-remove",
                  "name": "tooltip  remove"
              },
              {
                  "id": "tooltip-remove-outline",
                  "name": "tooltip  remove  outline"
              },
              {
                  "id": "tooltip-text",
                  "name": "tooltip  text"
              },
              {
                  "id": "tooltip-text-outline",
                  "name": "tooltip  text  outline"
              },
              {
                  "id": "tooth",
                  "name": "tooth"
              },
              {
                  "id": "tooth-outline",
                  "name": "tooth  outline"
              },
              {
                  "id": "toothbrush",
                  "name": "toothbrush"
              },
              {
                  "id": "toothbrush-electric",
                  "name": "toothbrush  electric"
              },
              {
                  "id": "toothbrush-paste",
                  "name": "toothbrush  paste"
              },
              {
                  "id": "torch",
                  "name": "torch"
              },
              {
                  "id": "tortoise",
                  "name": "tortoise"
              },
              {
                  "id": "toslink",
                  "name": "toslink"
              },
              {
                  "id": "touch-text-outline",
                  "name": "touch  text  outline"
              },
              {
                  "id": "tournament",
                  "name": "tournament"
              },
              {
                  "id": "tow-truck",
                  "name": "tow  truck"
              },
              {
                  "id": "tower-beach",
                  "name": "tower  beach"
              },
              {
                  "id": "tower-fire",
                  "name": "tower  fire"
              },
              {
                  "id": "town-hall",
                  "name": "town  hall"
              },
              {
                  "id": "toy-brick",
                  "name": "toy  brick"
              },
              {
                  "id": "toy-brick-marker",
                  "name": "toy  brick  marker"
              },
              {
                  "id": "toy-brick-marker-outline",
                  "name": "toy  brick  marker  outline"
              },
              {
                  "id": "toy-brick-minus",
                  "name": "toy  brick  minus"
              },
              {
                  "id": "toy-brick-minus-outline",
                  "name": "toy  brick  minus  outline"
              },
              {
                  "id": "toy-brick-outline",
                  "name": "toy  brick  outline"
              },
              {
                  "id": "toy-brick-plus",
                  "name": "toy  brick  plus"
              },
              {
                  "id": "toy-brick-plus-outline",
                  "name": "toy  brick  plus  outline"
              },
              {
                  "id": "toy-brick-remove",
                  "name": "toy  brick  remove"
              },
              {
                  "id": "toy-brick-remove-outline",
                  "name": "toy  brick  remove  outline"
              },
              {
                  "id": "toy-brick-search",
                  "name": "toy  brick  search"
              },
              {
                  "id": "toy-brick-search-outline",
                  "name": "toy  brick  search  outline"
              },
              {
                  "id": "track-light",
                  "name": "track  light"
              },
              {
                  "id": "track-light-off",
                  "name": "track  light  off"
              },
              {
                  "id": "trackpad",
                  "name": "trackpad"
              },
              {
                  "id": "trackpad-lock",
                  "name": "trackpad  lock"
              },
              {
                  "id": "tractor",
                  "name": "tractor"
              },
              {
                  "id": "tractor-variant",
                  "name": "tractor  variant"
              },
              {
                  "id": "trademark",
                  "name": "trademark"
              },
              {
                  "id": "traffic-cone",
                  "name": "traffic  cone"
              },
              {
                  "id": "traffic-light",
                  "name": "traffic  light"
              },
              {
                  "id": "traffic-light-outline",
                  "name": "traffic  light  outline"
              },
              {
                  "id": "train",
                  "name": "train"
              },
              {
                  "id": "train-car",
                  "name": "train  car"
              },
              {
                  "id": "train-car-autorack",
                  "name": "train  car  autorack"
              },
              {
                  "id": "train-car-box",
                  "name": "train  car  box"
              },
              {
                  "id": "train-car-box-full",
                  "name": "train  car  box  full"
              },
              {
                  "id": "train-car-box-open",
                  "name": "train  car  box  open"
              },
              {
                  "id": "train-car-caboose",
                  "name": "train  car  caboose"
              },
              {
                  "id": "train-car-centerbeam",
                  "name": "train  car  centerbeam"
              },
              {
                  "id": "train-car-centerbeam-full",
                  "name": "train  car  centerbeam  full"
              },
              {
                  "id": "train-car-container",
                  "name": "train  car  container"
              },
              {
                  "id": "train-car-flatbed",
                  "name": "train  car  flatbed"
              },
              {
                  "id": "train-car-flatbed-car",
                  "name": "train  car  flatbed  car"
              },
              {
                  "id": "train-car-flatbed-tank",
                  "name": "train  car  flatbed  tank"
              },
              {
                  "id": "train-car-gondola",
                  "name": "train  car  gondola"
              },
              {
                  "id": "train-car-gondola-full",
                  "name": "train  car  gondola  full"
              },
              {
                  "id": "train-car-hopper",
                  "name": "train  car  hopper"
              },
              {
                  "id": "train-car-hopper-covered",
                  "name": "train  car  hopper  covered"
              },
              {
                  "id": "train-car-hopper-full",
                  "name": "train  car  hopper  full"
              },
              {
                  "id": "train-car-intermodal",
                  "name": "train  car  intermodal"
              },
              {
                  "id": "train-car-passenger",
                  "name": "train  car  passenger"
              },
              {
                  "id": "train-car-passenger-door",
                  "name": "train  car  passenger  door"
              },
              {
                  "id": "train-car-passenger-door-open",
                  "name": "train  car  passenger  door  open"
              },
              {
                  "id": "train-car-passenger-variant",
                  "name": "train  car  passenger  variant"
              },
              {
                  "id": "train-car-tank",
                  "name": "train  car  tank"
              },
              {
                  "id": "train-variant",
                  "name": "train  variant"
              },
              {
                  "id": "tram",
                  "name": "tram"
              },
              {
                  "id": "tram-side",
                  "name": "tram  side"
              },
              {
                  "id": "transcribe",
                  "name": "transcribe"
              },
              {
                  "id": "transcribe-close",
                  "name": "transcribe  close"
              },
              {
                  "id": "transfer",
                  "name": "transfer"
              },
              {
                  "id": "transfer-down",
                  "name": "transfer  down"
              },
              {
                  "id": "transfer-left",
                  "name": "transfer  left"
              },
              {
                  "id": "transfer-right",
                  "name": "transfer  right"
              },
              {
                  "id": "transfer-up",
                  "name": "transfer  up"
              },
              {
                  "id": "transit-connection",
                  "name": "transit  connection"
              },
              {
                  "id": "transit-connection-horizontal",
                  "name": "transit  connection  horizontal"
              },
              {
                  "id": "transit-connection-variant",
                  "name": "transit  connection  variant"
              },
              {
                  "id": "transit-detour",
                  "name": "transit  detour"
              },
              {
                  "id": "transit-skip",
                  "name": "transit  skip"
              },
              {
                  "id": "transit-transfer",
                  "name": "transit  transfer"
              },
              {
                  "id": "transition",
                  "name": "transition"
              },
              {
                  "id": "transition-masked",
                  "name": "transition  masked"
              },
              {
                  "id": "translate",
                  "name": "translate"
              },
              {
                  "id": "translate-off",
                  "name": "translate  off"
              },
              {
                  "id": "translate-variant",
                  "name": "translate  variant"
              },
              {
                  "id": "transmission-tower",
                  "name": "transmission  tower"
              },
              {
                  "id": "transmission-tower-export",
                  "name": "transmission  tower  export"
              },
              {
                  "id": "transmission-tower-import",
                  "name": "transmission  tower  import"
              },
              {
                  "id": "transmission-tower-off",
                  "name": "transmission  tower  off"
              },
              {
                  "id": "trash-can",
                  "name": "trash  can"
              },
              {
                  "id": "trash-can-outline",
                  "name": "trash  can  outline"
              },
              {
                  "id": "tray",
                  "name": "tray"
              },
              {
                  "id": "tray-alert",
                  "name": "tray  alert"
              },
              {
                  "id": "tray-arrow-down",
                  "name": "tray  arrow  down"
              },
              {
                  "id": "tray-arrow-up",
                  "name": "tray  arrow  up"
              },
              {
                  "id": "tray-full",
                  "name": "tray  full"
              },
              {
                  "id": "tray-minus",
                  "name": "tray  minus"
              },
              {
                  "id": "tray-plus",
                  "name": "tray  plus"
              },
              {
                  "id": "tray-remove",
                  "name": "tray  remove"
              },
              {
                  "id": "treasure-chest",
                  "name": "treasure  chest"
              },
              {
                  "id": "treasure-chest-outline",
                  "name": "treasure  chest  outline"
              },
              {
                  "id": "tree",
                  "name": "tree"
              },
              {
                  "id": "tree-outline",
                  "name": "tree  outline"
              },
              {
                  "id": "trello",
                  "name": "trello"
              },
              {
                  "id": "trending-down",
                  "name": "trending  down"
              },
              {
                  "id": "trending-neutral",
                  "name": "trending  neutral"
              },
              {
                  "id": "trending-up",
                  "name": "trending  up"
              },
              {
                  "id": "triangle",
                  "name": "triangle"
              },
              {
                  "id": "triangle-down",
                  "name": "triangle  down"
              },
              {
                  "id": "triangle-down-outline",
                  "name": "triangle  down  outline"
              },
              {
                  "id": "triangle-outline",
                  "name": "triangle  outline"
              },
              {
                  "id": "triangle-small-down",
                  "name": "triangle  small  down"
              },
              {
                  "id": "triangle-small-up",
                  "name": "triangle  small  up"
              },
              {
                  "id": "triangle-wave",
                  "name": "triangle  wave"
              },
              {
                  "id": "triforce",
                  "name": "triforce"
              },
              {
                  "id": "trophy",
                  "name": "trophy"
              },
              {
                  "id": "trophy-award",
                  "name": "trophy  award"
              },
              {
                  "id": "trophy-broken",
                  "name": "trophy  broken"
              },
              {
                  "id": "trophy-outline",
                  "name": "trophy  outline"
              },
              {
                  "id": "trophy-variant",
                  "name": "trophy  variant"
              },
              {
                  "id": "trophy-variant-outline",
                  "name": "trophy  variant  outline"
              },
              {
                  "id": "truck",
                  "name": "truck"
              },
              {
                  "id": "truck-alert",
                  "name": "truck  alert"
              },
              {
                  "id": "truck-alert-outline",
                  "name": "truck  alert  outline"
              },
              {
                  "id": "truck-cargo-container",
                  "name": "truck  cargo  container"
              },
              {
                  "id": "truck-check",
                  "name": "truck  check"
              },
              {
                  "id": "truck-check-outline",
                  "name": "truck  check  outline"
              },
              {
                  "id": "truck-delivery",
                  "name": "truck  delivery"
              },
              {
                  "id": "truck-delivery-outline",
                  "name": "truck  delivery  outline"
              },
              {
                  "id": "truck-fast",
                  "name": "truck  fast"
              },
              {
                  "id": "truck-fast-outline",
                  "name": "truck  fast  outline"
              },
              {
                  "id": "truck-flatbed",
                  "name": "truck  flatbed"
              },
              {
                  "id": "truck-minus",
                  "name": "truck  minus"
              },
              {
                  "id": "truck-minus-outline",
                  "name": "truck  minus  outline"
              },
              {
                  "id": "truck-outline",
                  "name": "truck  outline"
              },
              {
                  "id": "truck-plus",
                  "name": "truck  plus"
              },
              {
                  "id": "truck-plus-outline",
                  "name": "truck  plus  outline"
              },
              {
                  "id": "truck-remove",
                  "name": "truck  remove"
              },
              {
                  "id": "truck-remove-outline",
                  "name": "truck  remove  outline"
              },
              {
                  "id": "truck-snowflake",
                  "name": "truck  snowflake"
              },
              {
                  "id": "truck-trailer",
                  "name": "truck  trailer"
              },
              {
                  "id": "trumpet",
                  "name": "trumpet"
              },
              {
                  "id": "tshirt-crew",
                  "name": "tshirt  crew"
              },
              {
                  "id": "tshirt-crew-outline",
                  "name": "tshirt  crew  outline"
              },
              {
                  "id": "tshirt-v",
                  "name": "tshirt  v"
              },
              {
                  "id": "tshirt-v-outline",
                  "name": "tshirt  v  outline"
              },
              {
                  "id": "tsunami",
                  "name": "tsunami"
              },
              {
                  "id": "tumble-dryer",
                  "name": "tumble  dryer"
              },
              {
                  "id": "tumble-dryer-alert",
                  "name": "tumble  dryer  alert"
              },
              {
                  "id": "tumble-dryer-off",
                  "name": "tumble  dryer  off"
              },
              {
                  "id": "tune",
                  "name": "tune"
              },
              {
                  "id": "tune-variant",
                  "name": "tune  variant"
              },
              {
                  "id": "tune-vertical",
                  "name": "tune  vertical"
              },
              {
                  "id": "tune-vertical-variant",
                  "name": "tune  vertical  variant"
              },
              {
                  "id": "tunnel",
                  "name": "tunnel"
              },
              {
                  "id": "tunnel-outline",
                  "name": "tunnel  outline"
              },
              {
                  "id": "turbine",
                  "name": "turbine"
              },
              {
                  "id": "turkey",
                  "name": "turkey"
              },
              {
                  "id": "turnstile",
                  "name": "turnstile"
              },
              {
                  "id": "turnstile-outline",
                  "name": "turnstile  outline"
              },
              {
                  "id": "turtle",
                  "name": "turtle"
              },
              {
                  "id": "twitch",
                  "name": "twitch"
              },
              {
                  "id": "twitter",
                  "name": "twitter"
              },
              {
                  "id": "two-factor-authentication",
                  "name": "two  factor  authentication"
              },
              {
                  "id": "typewriter",
                  "name": "typewriter"
              },
              {
                  "id": "ubisoft",
                  "name": "ubisoft"
              },
              {
                  "id": "ubuntu",
                  "name": "ubuntu"
              },
              {
                  "id": "ufo",
                  "name": "ufo"
              },
              {
                  "id": "ufo-outline",
                  "name": "ufo  outline"
              },
              {
                  "id": "ultra-high-definition",
                  "name": "ultra  high  definition"
              },
              {
                  "id": "umbraco",
                  "name": "umbraco"
              },
              {
                  "id": "umbrella",
                  "name": "umbrella"
              },
              {
                  "id": "umbrella-beach",
                  "name": "umbrella  beach"
              },
              {
                  "id": "umbrella-beach-outline",
                  "name": "umbrella  beach  outline"
              },
              {
                  "id": "umbrella-closed",
                  "name": "umbrella  closed"
              },
              {
                  "id": "umbrella-closed-outline",
                  "name": "umbrella  closed  outline"
              },
              {
                  "id": "umbrella-closed-variant",
                  "name": "umbrella  closed  variant"
              },
              {
                  "id": "umbrella-outline",
                  "name": "umbrella  outline"
              },
              {
                  "id": "undo",
                  "name": "undo"
              },
              {
                  "id": "undo-variant",
                  "name": "undo  variant"
              },
              {
                  "id": "unfold-less-horizontal",
                  "name": "unfold  less  horizontal"
              },
              {
                  "id": "unfold-less-vertical",
                  "name": "unfold  less  vertical"
              },
              {
                  "id": "unfold-more-horizontal",
                  "name": "unfold  more  horizontal"
              },
              {
                  "id": "unfold-more-vertical",
                  "name": "unfold  more  vertical"
              },
              {
                  "id": "ungroup",
                  "name": "ungroup"
              },
              {
                  "id": "unicode",
                  "name": "unicode"
              },
              {
                  "id": "unicorn",
                  "name": "unicorn"
              },
              {
                  "id": "unicorn-variant",
                  "name": "unicorn  variant"
              },
              {
                  "id": "unicycle",
                  "name": "unicycle"
              },
              {
                  "id": "unity",
                  "name": "unity"
              },
              {
                  "id": "unreal",
                  "name": "unreal"
              },
              {
                  "id": "update",
                  "name": "update"
              },
              {
                  "id": "upload",
                  "name": "upload"
              },
              {
                  "id": "upload-lock",
                  "name": "upload  lock"
              },
              {
                  "id": "upload-lock-outline",
                  "name": "upload  lock  outline"
              },
              {
                  "id": "upload-multiple",
                  "name": "upload  multiple"
              },
              {
                  "id": "upload-network",
                  "name": "upload  network"
              },
              {
                  "id": "upload-network-outline",
                  "name": "upload  network  outline"
              },
              {
                  "id": "upload-off",
                  "name": "upload  off"
              },
              {
                  "id": "upload-off-outline",
                  "name": "upload  off  outline"
              },
              {
                  "id": "upload-outline",
                  "name": "upload  outline"
              },
              {
                  "id": "usb",
                  "name": "usb"
              },
              {
                  "id": "usb-flash-drive",
                  "name": "usb  flash  drive"
              },
              {
                  "id": "usb-flash-drive-outline",
                  "name": "usb  flash  drive  outline"
              },
              {
                  "id": "usb-port",
                  "name": "usb  port"
              },
              {
                  "id": "vacuum",
                  "name": "vacuum"
              },
              {
                  "id": "vacuum-outline",
                  "name": "vacuum  outline"
              },
              {
                  "id": "valve",
                  "name": "valve"
              },
              {
                  "id": "valve-closed",
                  "name": "valve  closed"
              },
              {
                  "id": "valve-open",
                  "name": "valve  open"
              },
              {
                  "id": "van-passenger",
                  "name": "van  passenger"
              },
              {
                  "id": "van-utility",
                  "name": "van  utility"
              },
              {
                  "id": "vanish",
                  "name": "vanish"
              },
              {
                  "id": "vanish-quarter",
                  "name": "vanish  quarter"
              },
              {
                  "id": "vanity-light",
                  "name": "vanity  light"
              },
              {
                  "id": "variable",
                  "name": "variable"
              },
              {
                  "id": "variable-box",
                  "name": "variable  box"
              },
              {
                  "id": "vector-arrange-above",
                  "name": "vector  arrange  above"
              },
              {
                  "id": "vector-arrange-below",
                  "name": "vector  arrange  below"
              },
              {
                  "id": "vector-bezier",
                  "name": "vector  bezier"
              },
              {
                  "id": "vector-circle",
                  "name": "vector  circle"
              },
              {
                  "id": "vector-circle-variant",
                  "name": "vector  circle  variant"
              },
              {
                  "id": "vector-combine",
                  "name": "vector  combine"
              },
              {
                  "id": "vector-curve",
                  "name": "vector  curve"
              },
              {
                  "id": "vector-difference",
                  "name": "vector  difference"
              },
              {
                  "id": "vector-difference-ab",
                  "name": "vector  difference  ab"
              },
              {
                  "id": "vector-difference-ba",
                  "name": "vector  difference  ba"
              },
              {
                  "id": "vector-ellipse",
                  "name": "vector  ellipse"
              },
              {
                  "id": "vector-intersection",
                  "name": "vector  intersection"
              },
              {
                  "id": "vector-line",
                  "name": "vector  line"
              },
              {
                  "id": "vector-link",
                  "name": "vector  link"
              },
              {
                  "id": "vector-point",
                  "name": "vector  point"
              },
              {
                  "id": "vector-point-edit",
                  "name": "vector  point  edit"
              },
              {
                  "id": "vector-point-minus",
                  "name": "vector  point  minus"
              },
              {
                  "id": "vector-point-plus",
                  "name": "vector  point  plus"
              },
              {
                  "id": "vector-point-select",
                  "name": "vector  point  select"
              },
              {
                  "id": "vector-polygon",
                  "name": "vector  polygon"
              },
              {
                  "id": "vector-polygon-variant",
                  "name": "vector  polygon  variant"
              },
              {
                  "id": "vector-polyline",
                  "name": "vector  polyline"
              },
              {
                  "id": "vector-polyline-edit",
                  "name": "vector  polyline  edit"
              },
              {
                  "id": "vector-polyline-minus",
                  "name": "vector  polyline  minus"
              },
              {
                  "id": "vector-polyline-plus",
                  "name": "vector  polyline  plus"
              },
              {
                  "id": "vector-polyline-remove",
                  "name": "vector  polyline  remove"
              },
              {
                  "id": "vector-radius",
                  "name": "vector  radius"
              },
              {
                  "id": "vector-rectangle",
                  "name": "vector  rectangle"
              },
              {
                  "id": "vector-selection",
                  "name": "vector  selection"
              },
              {
                  "id": "vector-square",
                  "name": "vector  square"
              },
              {
                  "id": "vector-square-close",
                  "name": "vector  square  close"
              },
              {
                  "id": "vector-square-edit",
                  "name": "vector  square  edit"
              },
              {
                  "id": "vector-square-minus",
                  "name": "vector  square  minus"
              },
              {
                  "id": "vector-square-open",
                  "name": "vector  square  open"
              },
              {
                  "id": "vector-square-plus",
                  "name": "vector  square  plus"
              },
              {
                  "id": "vector-square-remove",
                  "name": "vector  square  remove"
              },
              {
                  "id": "vector-triangle",
                  "name": "vector  triangle"
              },
              {
                  "id": "vector-union",
                  "name": "vector  union"
              },
              {
                  "id": "vhs",
                  "name": "vhs"
              },
              {
                  "id": "vibrate",
                  "name": "vibrate"
              },
              {
                  "id": "vibrate-off",
                  "name": "vibrate  off"
              },
              {
                  "id": "video",
                  "name": "video"
              },
              {
                  "id": "video-2d",
                  "name": "video  2d"
              },
              {
                  "id": "video-3d",
                  "name": "video  3d"
              },
              {
                  "id": "video-3d-off",
                  "name": "video  3d  off"
              },
              {
                  "id": "video-3d-variant",
                  "name": "video  3d  variant"
              },
              {
                  "id": "video-4k-box",
                  "name": "video  4k  box"
              },
              {
                  "id": "video-account",
                  "name": "video  account"
              },
              {
                  "id": "video-box",
                  "name": "video  box"
              },
              {
                  "id": "video-box-off",
                  "name": "video  box  off"
              },
              {
                  "id": "video-check",
                  "name": "video  check"
              },
              {
                  "id": "video-check-outline",
                  "name": "video  check  outline"
              },
              {
                  "id": "video-high-definition",
                  "name": "video  high  definition"
              },
              {
                  "id": "video-image",
                  "name": "video  image"
              },
              {
                  "id": "video-input-antenna",
                  "name": "video  input  antenna"
              },
              {
                  "id": "video-input-component",
                  "name": "video  input  component"
              },
              {
                  "id": "video-input-hdmi",
                  "name": "video  input  hdmi"
              },
              {
                  "id": "video-input-scart",
                  "name": "video  input  scart"
              },
              {
                  "id": "video-input-svideo",
                  "name": "video  input  svideo"
              },
              {
                  "id": "video-marker",
                  "name": "video  marker"
              },
              {
                  "id": "video-marker-outline",
                  "name": "video  marker  outline"
              },
              {
                  "id": "video-minus",
                  "name": "video  minus"
              },
              {
                  "id": "video-minus-outline",
                  "name": "video  minus  outline"
              },
              {
                  "id": "video-off",
                  "name": "video  off"
              },
              {
                  "id": "video-off-outline",
                  "name": "video  off  outline"
              },
              {
                  "id": "video-outline",
                  "name": "video  outline"
              },
              {
                  "id": "video-plus",
                  "name": "video  plus"
              },
              {
                  "id": "video-plus-outline",
                  "name": "video  plus  outline"
              },
              {
                  "id": "video-stabilization",
                  "name": "video  stabilization"
              },
              {
                  "id": "video-switch",
                  "name": "video  switch"
              },
              {
                  "id": "video-switch-outline",
                  "name": "video  switch  outline"
              },
              {
                  "id": "video-vintage",
                  "name": "video  vintage"
              },
              {
                  "id": "video-wireless",
                  "name": "video  wireless"
              },
              {
                  "id": "video-wireless-outline",
                  "name": "video  wireless  outline"
              },
              {
                  "id": "view-agenda",
                  "name": "view  agenda"
              },
              {
                  "id": "view-agenda-outline",
                  "name": "view  agenda  outline"
              },
              {
                  "id": "view-array",
                  "name": "view  array"
              },
              {
                  "id": "view-array-outline",
                  "name": "view  array  outline"
              },
              {
                  "id": "view-carousel",
                  "name": "view  carousel"
              },
              {
                  "id": "view-carousel-outline",
                  "name": "view  carousel  outline"
              },
              {
                  "id": "view-column",
                  "name": "view  column"
              },
              {
                  "id": "view-column-outline",
                  "name": "view  column  outline"
              },
              {
                  "id": "view-comfy",
                  "name": "view  comfy"
              },
              {
                  "id": "view-comfy-outline",
                  "name": "view  comfy  outline"
              },
              {
                  "id": "view-compact",
                  "name": "view  compact"
              },
              {
                  "id": "view-compact-outline",
                  "name": "view  compact  outline"
              },
              {
                  "id": "view-dashboard",
                  "name": "view  dashboard"
              },
              {
                  "id": "view-dashboard-edit",
                  "name": "view  dashboard  edit"
              },
              {
                  "id": "view-dashboard-edit-outline",
                  "name": "view  dashboard  edit  outline"
              },
              {
                  "id": "view-dashboard-outline",
                  "name": "view  dashboard  outline"
              },
              {
                  "id": "view-dashboard-variant",
                  "name": "view  dashboard  variant"
              },
              {
                  "id": "view-dashboard-variant-outline",
                  "name": "view  dashboard  variant  outline"
              },
              {
                  "id": "view-day",
                  "name": "view  day"
              },
              {
                  "id": "view-day-outline",
                  "name": "view  day  outline"
              },
              {
                  "id": "view-gallery",
                  "name": "view  gallery"
              },
              {
                  "id": "view-gallery-outline",
                  "name": "view  gallery  outline"
              },
              {
                  "id": "view-grid",
                  "name": "view  grid"
              },
              {
                  "id": "view-grid-compact",
                  "name": "view  grid  compact"
              },
              {
                  "id": "view-grid-outline",
                  "name": "view  grid  outline"
              },
              {
                  "id": "view-grid-plus",
                  "name": "view  grid  plus"
              },
              {
                  "id": "view-grid-plus-outline",
                  "name": "view  grid  plus  outline"
              },
              {
                  "id": "view-headline",
                  "name": "view  headline"
              },
              {
                  "id": "view-list",
                  "name": "view  list"
              },
              {
                  "id": "view-list-outline",
                  "name": "view  list  outline"
              },
              {
                  "id": "view-module",
                  "name": "view  module"
              },
              {
                  "id": "view-module-outline",
                  "name": "view  module  outline"
              },
              {
                  "id": "view-parallel",
                  "name": "view  parallel"
              },
              {
                  "id": "view-parallel-outline",
                  "name": "view  parallel  outline"
              },
              {
                  "id": "view-quilt",
                  "name": "view  quilt"
              },
              {
                  "id": "view-quilt-outline",
                  "name": "view  quilt  outline"
              },
              {
                  "id": "view-sequential",
                  "name": "view  sequential"
              },
              {
                  "id": "view-sequential-outline",
                  "name": "view  sequential  outline"
              },
              {
                  "id": "view-split-horizontal",
                  "name": "view  split  horizontal"
              },
              {
                  "id": "view-split-vertical",
                  "name": "view  split  vertical"
              },
              {
                  "id": "view-stream",
                  "name": "view  stream"
              },
              {
                  "id": "view-stream-outline",
                  "name": "view  stream  outline"
              },
              {
                  "id": "view-week",
                  "name": "view  week"
              },
              {
                  "id": "view-week-outline",
                  "name": "view  week  outline"
              },
              {
                  "id": "vimeo",
                  "name": "vimeo"
              },
              {
                  "id": "violin",
                  "name": "violin"
              },
              {
                  "id": "virtual-reality",
                  "name": "virtual  reality"
              },
              {
                  "id": "virus",
                  "name": "virus"
              },
              {
                  "id": "virus-off",
                  "name": "virus  off"
              },
              {
                  "id": "virus-off-outline",
                  "name": "virus  off  outline"
              },
              {
                  "id": "virus-outline",
                  "name": "virus  outline"
              },
              {
                  "id": "vlc",
                  "name": "vlc"
              },
              {
                  "id": "voicemail",
                  "name": "voicemail"
              },
              {
                  "id": "volcano",
                  "name": "volcano"
              },
              {
                  "id": "volcano-outline",
                  "name": "volcano  outline"
              },
              {
                  "id": "volleyball",
                  "name": "volleyball"
              },
              {
                  "id": "volume-equal",
                  "name": "volume  equal"
              },
              {
                  "id": "volume-high",
                  "name": "volume  high"
              },
              {
                  "id": "volume-low",
                  "name": "volume  low"
              },
              {
                  "id": "volume-medium",
                  "name": "volume  medium"
              },
              {
                  "id": "volume-minus",
                  "name": "volume  minus"
              },
              {
                  "id": "volume-mute",
                  "name": "volume  mute"
              },
              {
                  "id": "volume-off",
                  "name": "volume  off"
              },
              {
                  "id": "volume-plus",
                  "name": "volume  plus"
              },
              {
                  "id": "volume-source",
                  "name": "volume  source"
              },
              {
                  "id": "volume-variant-off",
                  "name": "volume  variant  off"
              },
              {
                  "id": "volume-vibrate",
                  "name": "volume  vibrate"
              },
              {
                  "id": "vote",
                  "name": "vote"
              },
              {
                  "id": "vote-outline",
                  "name": "vote  outline"
              },
              {
                  "id": "vpn",
                  "name": "vpn"
              },
              {
                  "id": "vuejs",
                  "name": "vuejs"
              },
              {
                  "id": "vuetify",
                  "name": "vuetify"
              },
              {
                  "id": "walk",
                  "name": "walk"
              },
              {
                  "id": "wall",
                  "name": "wall"
              },
              {
                  "id": "wall-fire",
                  "name": "wall  fire"
              },
              {
                  "id": "wall-sconce",
                  "name": "wall  sconce"
              },
              {
                  "id": "wall-sconce-flat",
                  "name": "wall  sconce  flat"
              },
              {
                  "id": "wall-sconce-flat-outline",
                  "name": "wall  sconce  flat  outline"
              },
              {
                  "id": "wall-sconce-flat-variant",
                  "name": "wall  sconce  flat  variant"
              },
              {
                  "id": "wall-sconce-flat-variant-outline",
                  "name": "wall  sconce  flat  variant  outline"
              },
              {
                  "id": "wall-sconce-outline",
                  "name": "wall  sconce  outline"
              },
              {
                  "id": "wall-sconce-round",
                  "name": "wall  sconce  round"
              },
              {
                  "id": "wall-sconce-round-outline",
                  "name": "wall  sconce  round  outline"
              },
              {
                  "id": "wall-sconce-round-variant",
                  "name": "wall  sconce  round  variant"
              },
              {
                  "id": "wall-sconce-round-variant-outline",
                  "name": "wall  sconce  round  variant  outline"
              },
              {
                  "id": "wallet",
                  "name": "wallet"
              },
              {
                  "id": "wallet-bifold",
                  "name": "wallet  bifold"
              },
              {
                  "id": "wallet-bifold-outline",
                  "name": "wallet  bifold  outline"
              },
              {
                  "id": "wallet-giftcard",
                  "name": "wallet  giftcard"
              },
              {
                  "id": "wallet-membership",
                  "name": "wallet  membership"
              },
              {
                  "id": "wallet-outline",
                  "name": "wallet  outline"
              },
              {
                  "id": "wallet-plus",
                  "name": "wallet  plus"
              },
              {
                  "id": "wallet-plus-outline",
                  "name": "wallet  plus  outline"
              },
              {
                  "id": "wallet-travel",
                  "name": "wallet  travel"
              },
              {
                  "id": "wallpaper",
                  "name": "wallpaper"
              },
              {
                  "id": "wan",
                  "name": "wan"
              },
              {
                  "id": "wardrobe",
                  "name": "wardrobe"
              },
              {
                  "id": "wardrobe-outline",
                  "name": "wardrobe  outline"
              },
              {
                  "id": "warehouse",
                  "name": "warehouse"
              },
              {
                  "id": "washing-machine",
                  "name": "washing  machine"
              },
              {
                  "id": "washing-machine-alert",
                  "name": "washing  machine  alert"
              },
              {
                  "id": "washing-machine-off",
                  "name": "washing  machine  off"
              },
              {
                  "id": "watch",
                  "name": "watch"
              },
              {
                  "id": "watch-export",
                  "name": "watch  export"
              },
              {
                  "id": "watch-export-variant",
                  "name": "watch  export  variant"
              },
              {
                  "id": "watch-import",
                  "name": "watch  import"
              },
              {
                  "id": "watch-import-variant",
                  "name": "watch  import  variant"
              },
              {
                  "id": "watch-variant",
                  "name": "watch  variant"
              },
              {
                  "id": "watch-vibrate",
                  "name": "watch  vibrate"
              },
              {
                  "id": "watch-vibrate-off",
                  "name": "watch  vibrate  off"
              },
              {
                  "id": "water",
                  "name": "water"
              },
              {
                  "id": "water-alert",
                  "name": "water  alert"
              },
              {
                  "id": "water-alert-outline",
                  "name": "water  alert  outline"
              },
              {
                  "id": "water-boiler",
                  "name": "water  boiler"
              },
              {
                  "id": "water-boiler-alert",
                  "name": "water  boiler  alert"
              },
              {
                  "id": "water-boiler-auto",
                  "name": "water  boiler  auto"
              },
              {
                  "id": "water-boiler-off",
                  "name": "water  boiler  off"
              },
              {
                  "id": "water-check",
                  "name": "water  check"
              },
              {
                  "id": "water-check-outline",
                  "name": "water  check  outline"
              },
              {
                  "id": "water-circle",
                  "name": "water  circle"
              },
              {
                  "id": "water-minus",
                  "name": "water  minus"
              },
              {
                  "id": "water-minus-outline",
                  "name": "water  minus  outline"
              },
              {
                  "id": "water-off",
                  "name": "water  off"
              },
              {
                  "id": "water-off-outline",
                  "name": "water  off  outline"
              },
              {
                  "id": "water-opacity",
                  "name": "water  opacity"
              },
              {
                  "id": "water-outline",
                  "name": "water  outline"
              },
              {
                  "id": "water-percent",
                  "name": "water  percent"
              },
              {
                  "id": "water-percent-alert",
                  "name": "water  percent  alert"
              },
              {
                  "id": "water-plus",
                  "name": "water  plus"
              },
              {
                  "id": "water-plus-outline",
                  "name": "water  plus  outline"
              },
              {
                  "id": "water-polo",
                  "name": "water  polo"
              },
              {
                  "id": "water-pump",
                  "name": "water  pump"
              },
              {
                  "id": "water-pump-off",
                  "name": "water  pump  off"
              },
              {
                  "id": "water-remove",
                  "name": "water  remove"
              },
              {
                  "id": "water-remove-outline",
                  "name": "water  remove  outline"
              },
              {
                  "id": "water-sync",
                  "name": "water  sync"
              },
              {
                  "id": "water-thermometer",
                  "name": "water  thermometer"
              },
              {
                  "id": "water-thermometer-outline",
                  "name": "water  thermometer  outline"
              },
              {
                  "id": "water-well",
                  "name": "water  well"
              },
              {
                  "id": "water-well-outline",
                  "name": "water  well  outline"
              },
              {
                  "id": "waterfall",
                  "name": "waterfall"
              },
              {
                  "id": "watering-can",
                  "name": "watering  can"
              },
              {
                  "id": "watering-can-outline",
                  "name": "watering  can  outline"
              },
              {
                  "id": "watermark",
                  "name": "watermark"
              },
              {
                  "id": "wave",
                  "name": "wave"
              },
              {
                  "id": "waveform",
                  "name": "waveform"
              },
              {
                  "id": "waves",
                  "name": "waves"
              },
              {
                  "id": "waves-arrow-left",
                  "name": "waves  arrow  left"
              },
              {
                  "id": "waves-arrow-right",
                  "name": "waves  arrow  right"
              },
              {
                  "id": "waves-arrow-up",
                  "name": "waves  arrow  up"
              },
              {
                  "id": "waze",
                  "name": "waze"
              },
              {
                  "id": "weather-cloudy",
                  "name": "weather  cloudy"
              },
              {
                  "id": "weather-cloudy-alert",
                  "name": "weather  cloudy  alert"
              },
              {
                  "id": "weather-cloudy-arrow-right",
                  "name": "weather  cloudy  arrow  right"
              },
              {
                  "id": "weather-cloudy-clock",
                  "name": "weather  cloudy  clock"
              },
              {
                  "id": "weather-dust",
                  "name": "weather  dust"
              },
              {
                  "id": "weather-fog",
                  "name": "weather  fog"
              },
              {
                  "id": "weather-hail",
                  "name": "weather  hail"
              },
              {
                  "id": "weather-hazy",
                  "name": "weather  hazy"
              },
              {
                  "id": "weather-hurricane",
                  "name": "weather  hurricane"
              },
              {
                  "id": "weather-hurricane-outline",
                  "name": "weather  hurricane  outline"
              },
              {
                  "id": "weather-lightning",
                  "name": "weather  lightning"
              },
              {
                  "id": "weather-lightning-rainy",
                  "name": "weather  lightning  rainy"
              },
              {
                  "id": "weather-night",
                  "name": "weather  night"
              },
              {
                  "id": "weather-night-partly-cloudy",
                  "name": "weather  night  partly  cloudy"
              },
              {
                  "id": "weather-partly-cloudy",
                  "name": "weather  partly  cloudy"
              },
              {
                  "id": "weather-partly-lightning",
                  "name": "weather  partly  lightning"
              },
              {
                  "id": "weather-partly-rainy",
                  "name": "weather  partly  rainy"
              },
              {
                  "id": "weather-partly-snowy",
                  "name": "weather  partly  snowy"
              },
              {
                  "id": "weather-partly-snowy-rainy",
                  "name": "weather  partly  snowy  rainy"
              },
              {
                  "id": "weather-pouring",
                  "name": "weather  pouring"
              },
              {
                  "id": "weather-rainy",
                  "name": "weather  rainy"
              },
              {
                  "id": "weather-snowy",
                  "name": "weather  snowy"
              },
              {
                  "id": "weather-snowy-heavy",
                  "name": "weather  snowy  heavy"
              },
              {
                  "id": "weather-snowy-rainy",
                  "name": "weather  snowy  rainy"
              },
              {
                  "id": "weather-sunny",
                  "name": "weather  sunny"
              },
              {
                  "id": "weather-sunny-alert",
                  "name": "weather  sunny  alert"
              },
              {
                  "id": "weather-sunny-off",
                  "name": "weather  sunny  off"
              },
              {
                  "id": "weather-sunset",
                  "name": "weather  sunset"
              },
              {
                  "id": "weather-sunset-down",
                  "name": "weather  sunset  down"
              },
              {
                  "id": "weather-sunset-up",
                  "name": "weather  sunset  up"
              },
              {
                  "id": "weather-tornado",
                  "name": "weather  tornado"
              },
              {
                  "id": "weather-windy",
                  "name": "weather  windy"
              },
              {
                  "id": "weather-windy-variant",
                  "name": "weather  windy  variant"
              },
              {
                  "id": "web",
                  "name": "web"
              },
              {
                  "id": "web-box",
                  "name": "web  box"
              },
              {
                  "id": "web-cancel",
                  "name": "web  cancel"
              },
              {
                  "id": "web-check",
                  "name": "web  check"
              },
              {
                  "id": "web-clock",
                  "name": "web  clock"
              },
              {
                  "id": "web-minus",
                  "name": "web  minus"
              },
              {
                  "id": "web-off",
                  "name": "web  off"
              },
              {
                  "id": "web-plus",
                  "name": "web  plus"
              },
              {
                  "id": "web-refresh",
                  "name": "web  refresh"
              },
              {
                  "id": "web-remove",
                  "name": "web  remove"
              },
              {
                  "id": "web-sync",
                  "name": "web  sync"
              },
              {
                  "id": "webcam",
                  "name": "webcam"
              },
              {
                  "id": "webcam-off",
                  "name": "webcam  off"
              },
              {
                  "id": "webhook",
                  "name": "webhook"
              },
              {
                  "id": "webpack",
                  "name": "webpack"
              },
              {
                  "id": "webrtc",
                  "name": "webrtc"
              },
              {
                  "id": "wechat",
                  "name": "wechat"
              },
              {
                  "id": "weight",
                  "name": "weight"
              },
              {
                  "id": "weight-gram",
                  "name": "weight  gram"
              },
              {
                  "id": "weight-kilogram",
                  "name": "weight  kilogram"
              },
              {
                  "id": "weight-lifter",
                  "name": "weight  lifter"
              },
              {
                  "id": "weight-pound",
                  "name": "weight  pound"
              },
              {
                  "id": "whatsapp",
                  "name": "whatsapp"
              },
              {
                  "id": "wheel-barrow",
                  "name": "wheel  barrow"
              },
              {
                  "id": "wheelchair",
                  "name": "wheelchair"
              },
              {
                  "id": "wheelchair-accessibility",
                  "name": "wheelchair  accessibility"
              },
              {
                  "id": "whistle",
                  "name": "whistle"
              },
              {
                  "id": "whistle-outline",
                  "name": "whistle  outline"
              },
              {
                  "id": "white-balance-auto",
                  "name": "white  balance  auto"
              },
              {
                  "id": "white-balance-incandescent",
                  "name": "white  balance  incandescent"
              },
              {
                  "id": "white-balance-iridescent",
                  "name": "white  balance  iridescent"
              },
              {
                  "id": "white-balance-sunny",
                  "name": "white  balance  sunny"
              },
              {
                  "id": "widgets",
                  "name": "widgets"
              },
              {
                  "id": "widgets-outline",
                  "name": "widgets  outline"
              },
              {
                  "id": "wifi",
                  "name": "wifi"
              },
              {
                  "id": "wifi-alert",
                  "name": "wifi  alert"
              },
              {
                  "id": "wifi-arrow-down",
                  "name": "wifi  arrow  down"
              },
              {
                  "id": "wifi-arrow-left",
                  "name": "wifi  arrow  left"
              },
              {
                  "id": "wifi-arrow-left-right",
                  "name": "wifi  arrow  left  right"
              },
              {
                  "id": "wifi-arrow-right",
                  "name": "wifi  arrow  right"
              },
              {
                  "id": "wifi-arrow-up",
                  "name": "wifi  arrow  up"
              },
              {
                  "id": "wifi-arrow-up-down",
                  "name": "wifi  arrow  up  down"
              },
              {
                  "id": "wifi-cancel",
                  "name": "wifi  cancel"
              },
              {
                  "id": "wifi-check",
                  "name": "wifi  check"
              },
              {
                  "id": "wifi-cog",
                  "name": "wifi  cog"
              },
              {
                  "id": "wifi-lock",
                  "name": "wifi  lock"
              },
              {
                  "id": "wifi-lock-open",
                  "name": "wifi  lock  open"
              },
              {
                  "id": "wifi-marker",
                  "name": "wifi  marker"
              },
              {
                  "id": "wifi-minus",
                  "name": "wifi  minus"
              },
              {
                  "id": "wifi-off",
                  "name": "wifi  off"
              },
              {
                  "id": "wifi-plus",
                  "name": "wifi  plus"
              },
              {
                  "id": "wifi-refresh",
                  "name": "wifi  refresh"
              },
              {
                  "id": "wifi-remove",
                  "name": "wifi  remove"
              },
              {
                  "id": "wifi-settings",
                  "name": "wifi  settings"
              },
              {
                  "id": "wifi-star",
                  "name": "wifi  star"
              },
              {
                  "id": "wifi-strength-1",
                  "name": "wifi  strength  1"
              },
              {
                  "id": "wifi-strength-1-alert",
                  "name": "wifi  strength  1  alert"
              },
              {
                  "id": "wifi-strength-1-lock",
                  "name": "wifi  strength  1  lock"
              },
              {
                  "id": "wifi-strength-1-lock-open",
                  "name": "wifi  strength  1  lock  open"
              },
              {
                  "id": "wifi-strength-2",
                  "name": "wifi  strength  2"
              },
              {
                  "id": "wifi-strength-2-alert",
                  "name": "wifi  strength  2  alert"
              },
              {
                  "id": "wifi-strength-2-lock",
                  "name": "wifi  strength  2  lock"
              },
              {
                  "id": "wifi-strength-2-lock-open",
                  "name": "wifi  strength  2  lock  open"
              },
              {
                  "id": "wifi-strength-3",
                  "name": "wifi  strength  3"
              },
              {
                  "id": "wifi-strength-3-alert",
                  "name": "wifi  strength  3  alert"
              },
              {
                  "id": "wifi-strength-3-lock",
                  "name": "wifi  strength  3  lock"
              },
              {
                  "id": "wifi-strength-3-lock-open",
                  "name": "wifi  strength  3  lock  open"
              },
              {
                  "id": "wifi-strength-4",
                  "name": "wifi  strength  4"
              },
              {
                  "id": "wifi-strength-4-alert",
                  "name": "wifi  strength  4  alert"
              },
              {
                  "id": "wifi-strength-4-lock",
                  "name": "wifi  strength  4  lock"
              },
              {
                  "id": "wifi-strength-4-lock-open",
                  "name": "wifi  strength  4  lock  open"
              },
              {
                  "id": "wifi-strength-alert-outline",
                  "name": "wifi  strength  alert  outline"
              },
              {
                  "id": "wifi-strength-lock-open-outline",
                  "name": "wifi  strength  lock  open  outline"
              },
              {
                  "id": "wifi-strength-lock-outline",
                  "name": "wifi  strength  lock  outline"
              },
              {
                  "id": "wifi-strength-off",
                  "name": "wifi  strength  off"
              },
              {
                  "id": "wifi-strength-off-outline",
                  "name": "wifi  strength  off  outline"
              },
              {
                  "id": "wifi-strength-outline",
                  "name": "wifi  strength  outline"
              },
              {
                  "id": "wifi-sync",
                  "name": "wifi  sync"
              },
              {
                  "id": "wikipedia",
                  "name": "wikipedia"
              },
              {
                  "id": "wind-power",
                  "name": "wind  power"
              },
              {
                  "id": "wind-power-outline",
                  "name": "wind  power  outline"
              },
              {
                  "id": "wind-turbine",
                  "name": "wind  turbine"
              },
              {
                  "id": "wind-turbine-alert",
                  "name": "wind  turbine  alert"
              },
              {
                  "id": "wind-turbine-check",
                  "name": "wind  turbine  check"
              },
              {
                  "id": "window-close",
                  "name": "window  close"
              },
              {
                  "id": "window-closed",
                  "name": "window  closed"
              },
              {
                  "id": "window-closed-variant",
                  "name": "window  closed  variant"
              },
              {
                  "id": "window-maximize",
                  "name": "window  maximize"
              },
              {
                  "id": "window-minimize",
                  "name": "window  minimize"
              },
              {
                  "id": "window-open",
                  "name": "window  open"
              },
              {
                  "id": "window-open-variant",
                  "name": "window  open  variant"
              },
              {
                  "id": "window-restore",
                  "name": "window  restore"
              },
              {
                  "id": "window-shutter",
                  "name": "window  shutter"
              },
              {
                  "id": "window-shutter-alert",
                  "name": "window  shutter  alert"
              },
              {
                  "id": "window-shutter-auto",
                  "name": "window  shutter  auto"
              },
              {
                  "id": "window-shutter-cog",
                  "name": "window  shutter  cog"
              },
              {
                  "id": "window-shutter-open",
                  "name": "window  shutter  open"
              },
              {
                  "id": "window-shutter-settings",
                  "name": "window  shutter  settings"
              },
              {
                  "id": "windsock",
                  "name": "windsock"
              },
              {
                  "id": "wiper",
                  "name": "wiper"
              },
              {
                  "id": "wiper-wash",
                  "name": "wiper  wash"
              },
              {
                  "id": "wiper-wash-alert",
                  "name": "wiper  wash  alert"
              },
              {
                  "id": "wizard-hat",
                  "name": "wizard  hat"
              },
              {
                  "id": "wordpress",
                  "name": "wordpress"
              },
              {
                  "id": "wrap",
                  "name": "wrap"
              },
              {
                  "id": "wrap-disabled",
                  "name": "wrap  disabled"
              },
              {
                  "id": "wrench",
                  "name": "wrench"
              },
              {
                  "id": "wrench-check",
                  "name": "wrench  check"
              },
              {
                  "id": "wrench-check-outline",
                  "name": "wrench  check  outline"
              },
              {
                  "id": "wrench-clock",
                  "name": "wrench  clock"
              },
              {
                  "id": "wrench-clock-outline",
                  "name": "wrench  clock  outline"
              },
              {
                  "id": "wrench-cog",
                  "name": "wrench  cog"
              },
              {
                  "id": "wrench-cog-outline",
                  "name": "wrench  cog  outline"
              },
              {
                  "id": "wrench-outline",
                  "name": "wrench  outline"
              },
              {
                  "id": "xamarin",
                  "name": "xamarin"
              },
              {
                  "id": "xml",
                  "name": "xml"
              },
              {
                  "id": "xmpp",
                  "name": "xmpp"
              },
              {
                  "id": "yahoo",
                  "name": "yahoo"
              },
              {
                  "id": "yeast",
                  "name": "yeast"
              },
              {
                  "id": "yin-yang",
                  "name": "yin  yang"
              },
              {
                  "id": "yoga",
                  "name": "yoga"
              },
              {
                  "id": "youtube",
                  "name": "youtube"
              },
              {
                  "id": "youtube-gaming",
                  "name": "youtube  gaming"
              },
              {
                  "id": "youtube-studio",
                  "name": "youtube  studio"
              },
              {
                  "id": "youtube-subscription",
                  "name": "youtube  subscription"
              },
              {
                  "id": "youtube-tv",
                  "name": "youtube  tv"
              },
              {
                  "id": "yurt",
                  "name": "yurt"
              },
              {
                  "id": "z-wave",
                  "name": "z  wave"
              },
              {
                  "id": "zend",
                  "name": "zend"
              },
              {
                  "id": "zigbee",
                  "name": "zigbee"
              },
              {
                  "id": "zip-box",
                  "name": "zip  box"
              },
              {
                  "id": "zip-box-outline",
                  "name": "zip  box  outline"
              },
              {
                  "id": "zip-disk",
                  "name": "zip  disk"
              },
              {
                  "id": "zodiac-aquarius",
                  "name": "zodiac  aquarius"
              },
              {
                  "id": "zodiac-aries",
                  "name": "zodiac  aries"
              },
              {
                  "id": "zodiac-cancer",
                  "name": "zodiac  cancer"
              },
              {
                  "id": "zodiac-capricorn",
                  "name": "zodiac  capricorn"
              },
              {
                  "id": "zodiac-gemini",
                  "name": "zodiac  gemini"
              },
              {
                  "id": "zodiac-leo",
                  "name": "zodiac  leo"
              },
              {
                  "id": "zodiac-libra",
                  "name": "zodiac  libra"
              },
              {
                  "id": "zodiac-pisces",
                  "name": "zodiac  pisces"
              },
              {
                  "id": "zodiac-sagittarius",
                  "name": "zodiac  sagittarius"
              },
              {
                  "id": "zodiac-scorpio",
                  "name": "zodiac  scorpio"
              },
              {
                  "id": "zodiac-taurus",
                  "name": "zodiac  taurus"
              },
              {
                  "id": "zodiac-virgo",
                  "name": "zodiac  virgo"
              }
          ]);
          var selected = vue.ref('');
          vue.onMounted(function () {
              selected.value = props.modelValue; // <div>
          });
          function select(selection) {
              selected.value = selection;
              // props.modelValue = selection;
              console.log(selection);
              ctx.emit('update:modelValue', selection);
          }
          var filteredItems = vue.computed(function () {
              return icons.value.filter(function (item) {
                  return (item === null || item === void 0 ? void 0 : item.name.toLowerCase().indexOf(query.value.toLowerCase())) !== -1;
              });
          });
          return {
              select: select,
              query: query,
              selected: selected,
              filteredItems: filteredItems
          };
      },
  });

  const _hoisted_1 = { class: "search-header" };
  const _hoisted_2 = { class: "icon_body" };
  const _hoisted_3 = { class: "container" };
  const _hoisted_4 = { class: "nosubmit" };
  const _hoisted_5 = { class: "flex-row" };
  const _hoisted_6 = { class: "flex-cell" };
  const _hoisted_7 = ["onClick"];
  const _hoisted_8 = { class: "caption" };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("div", _hoisted_1, [
        vue.createElementVNode("div", _hoisted_2, [
          vue.createElementVNode("div", _hoisted_3, [
            vue.createElementVNode("form", _hoisted_4, [
              vue.withDirectives(vue.createElementVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.query) = $event)),
                class: "nosubmit",
                type: "search",
                placeholder: "Search..."
              }, null, 512 /* NEED_PATCH */), [
                [vue.vModelText, _ctx.query]
              ])
            ]),
            vue.createElementVNode("i", {
              class: vue.normalizeClass(['mdi', 'mdi-' + _ctx.selected])
            }, null, 2 /* CLASS */)
          ])
        ])
      ]),
      vue.createElementVNode("div", {
        class: "content",
        style: vue.normalizeStyle({'max-height':_ctx.height})
      }, [
        vue.createElementVNode("div", _hoisted_5, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.filteredItems, (item) => {
            return (vue.openBlock(), vue.createElementBlock("div", _hoisted_6, [
              vue.createElementVNode("div", {
                class: "iconbox",
                onClick: $event => (_ctx.select(item?.id))
              }, [
                vue.createCommentVNode("        <i class=\"medium material-icons\">{{item?.name}}</i>"),
                vue.createElementVNode("i", {
                  class: vue.normalizeClass(['mdi', 'mdi-' + item?.id])
                }, null, 2 /* CLASS */)
              ], 8 /* PROPS */, _hoisted_7),
              vue.createElementVNode("div", _hoisted_8, vue.toDisplayString(item?.name), 1 /* TEXT */)
            ]))
          }), 256 /* UNKEYED_FRAGMENT */))
        ])
      ], 4 /* STYLE */)
    ], 64 /* STABLE_FRAGMENT */))
  }

  script.render = render;
  script.__file = "src/components/IconSelector/IconSelector.vue";

  var index = {
      install: function (Vue) {
          Vue.component(script.name, script);
      }
  };

  var components$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': index,
    IconSelector: script
  });

  var DSLibrary$1 = {
      install: function (app) {
          // Auto import all components
          for (var componentKey in components$1) {
              app.use(components$1[componentKey]);
          }
      }
  };

  var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': DSLibrary$1,
    IconSelector: script
  });

  var DSLibrary = {
      install: function (app) {
          // Auto import all components
          for (var componentKey in components) {
              app.use(components[componentKey]);
          }
      }
  };

  exports.IconSelector = script;
  exports["default"] = DSLibrary;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
