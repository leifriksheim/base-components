---
name: Input
desc: A input element
category: Form
icon: pencil-outline
---

<core-knobs  element="core-input">
<core-input placeholder="Optional placeholder"></core-input>
</core-knobs>

## Sizes

<core-knobs hideTabs  element="core-input">
<core-input size="sm" placeholder="Small"></core-input>
<core-input size="md" placeholder="Medium"></core-input>
<core-input size="lg" placeholder="Large"></core-input>
</core-knobs>

## Search

<core-knobs hideTabs  element="core-input">
<core-input type="search" placeholder="Search...">
  <ion-icon style="font-size: 1em" slot="start" name="search-outline"></ion-icon>
</core-input>
</core-knobs>

## Autocomplete

<core-knobs hideTabs  element="core-input">
<core-input autocomplete="email" type="email" placeholder="Email">
</core-input>
</core-knobs>

## Number

<core-knobs hideTabs  element="core-input">
<style>
  #NumberInput {
    min-width: 50px;
    text-align: center;
  }
</style>
<core-button onclick="NumberInput.stepDown()">-</core-button>
<core-input id="NumberInput" max="100" min="0" readonly step="10" value="0" type="number" ></core-input>
<core-button onclick="NumberInput.stepUp()">+</core-button>
</core-knobs>

## Validation

### Auto validation

To autovalidate an input field, provide the `validate` attribute.

<core-knobs hideTabs  element="core-input">
<core-input required  validate placeholder="Required input">
<div slot="error">This field is required</div>
</core-input>
</core-knobs>

The input field will indicate an error if the input value is invalid.

`Validate` can also be set to `valid`, `invalid` or `both`, depending if you want the validation to indicate when the value is valid, invalid or both.

### Validate on input

Use `validate-on` to decide which event you want to do the validation on.

<core-knobs hideTabs  element="core-input">
<core-input required type="email" validate="both" validate-on="input" placeholder="Enter email">
  <ion-icon style="font-size: 1em" slot="start" name="mail-outline"></ion-icon>
</core-input>
</core-knobs>

### Validation with status icons

<core-knobs hideTabs  element="core-input">
<style>
  @keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  .status [slot="end"] {
    display: none;
  }
  .status[valid] .check,
  .status[invalid] .error {
    display: block;
    animation: fadein 0.2s ease;
  }
  .status[valid] .check {
    color: var(--core-color-success);
  }
  .status[invalid] .error {
    color: var(--core-color-danger);
  }
</style>
<core-input class="status" required type="email" validate="both" validate-on="input" placeholder="Enter email">
  <ion-icon slot="end" class="check" name="checkmark-outline"></ion-icon>
  <ion-icon slot="end" class="error" name="alert-circle-outline"></ion-icon>
</core-input>
</core-knobs>
