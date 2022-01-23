import React from "react";
import "../components/package.css";

export default function PostPackage(props) {
  return (
    <div class="container m-5">
      <h2 class="text-center">Post New Package</h2>
      <form>
      <div class="row justify-content-center">
        <div class="col-sm-12 col-md-4 mb-3">
          <label for="source" class="form-label">Source</label>
          <input type="text" class="form-control" id="source" placeholder="123 Main Street, Toronto ON"></input>
        </div>
        <div class="col-sm-12 col-md-4 mb-3">
          <label for="destination" class="form-label">Destination</label>
          <input type="text" class="form-control" id="destination" placeholder="123 Main Street, Toronto ON"></input>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-8 mb-3">
          <select class="form-select" aria-label="Default select example">
            <option selected>Choose delivery option...</option>
            <option value="1">Same Day</option>
            <option value="2">Next Day</option>
            <option value="3">Within 7 days</option>
          </select>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-8 mb-3">
          <h5>Select Package Size</h5>
          <div class="form-check d-flex align-items-center">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="small"></input>
            <label class="form-check-label" for="small">
                <i class="bi bi-box box-size-small"></i>
                <span>
                  <strong>Small</strong> (1 - 15 lbs)
                </span>
            </label>
          </div>
          <div class="form-check d-flex align-items-center">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="medium"></input>
            <label class="form-check-label" for="medium">
                <i class="bi bi-box box-size-medium"></i>
                <span>
                  <strong>Medium</strong> (16 - 30 lbs)
                </span>
            </label>
          </div>
          <div class="form-check d-flex align-items-center">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="large"></input>
            <label class="form-check-label" for="large">
                <i class="bi bi-box box-size-large"></i>
                <span>
                  <strong>Large</strong> (31 - 50 lbs)
                </span>
            </label>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-8 mb-3">
          <label for="description" class="form-label">Desctiption</label>
          <textarea class="form-control" id="description" rows="2"></textarea>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="d-grid gap-2 col-6">
          <button class="btn btn-lg btn-primary" type="submit">Get it Delivered</button>
        </div>
      </div>
      </form>
    </div>
  );
}