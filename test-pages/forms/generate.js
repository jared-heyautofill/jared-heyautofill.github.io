function generateAll(id) {
  if (!id) {
    throw new Error('Pass all required args to generateAll')
  }

  return `
    <div id="content-root-${id}">
      ${generateTextInputs(id)}
      ${generateButtons(id)}
      ${generateCheckboxes(id)}
      ${generateRadios(id)}
      ${generateSelects(id)}
      ${generateMultiLineInputs(id)}
    </div>
  `;
}

function generateTextInputs(id) {
  return `
    <div class="inputs sections">
      <h2 class="heading top">Inputs</h2>
      <div class="row">
        <label for="color-${id}">Color:</label>
        <input id="color-${id}" placeholder="color" type="color" />
      </div>
      <div class="row">
        <label for="date-${id}">Date:</label>
        <input id="date-${id}" placeholder="date" type="date" />
      </div>
      <div class="row">
        <label for="datetime-${id}">Datetime:</label>
        <input id="datetime-local-${id}" placeholder="datetime-local" type="datetime-local" />
      </div>
      <div class="row">
        <label for="email-${id}">Email:</label>
        <input id="email-${id}" placeholder="email" type="email" />
      </div>
      <div class="row">
        <label for="file-${id}">File:</label>
        <input id="file-${id}" placeholder="file" type="file" />
      </div>
      <div class="row">
        <label for="image-${id}">Image:</label>
        <input id="image-${id}" placeholder="image" type="image" />
      </div>
      <div class="row">
        <label for="month-${id}">Month:</label>
        <input id="month-${id}" placeholder="month" type="month" />
      </div>
      <div class="row">
        <label for="number-${id}">Number:</label>
        <input id="number-${id}" placeholder="number" type="number" />
      </div>
      <div class="row">
        <label for="password-${id}">Password:</label>
        <input id="password-${id}" placeholder="password" type="password" />
      </div>
      <div class="row">
        <label for="range-${id}">Range:</label>
        <input id="range-${id}" placeholder="range" type="range" />
      </div>
      <div class="row">
        <label for="search-${id}">Search:</label>
        <input id="search-${id}" placeholder="search" type="search" />
      </div>
      <div class="row">
        <label for="tel-${id}">Tel:</label>
        <input id="tel-${id}" placeholder="tel" type="tel" />
      </div>
      <div class="row">
        <label for="text-${id}">Text:</label>
        <input id="text-${id}" placeholder="text" type="text" />
      </div>
      <div class="row">
        <label for="time-${id}">Time:</label>
        <input id="time-${id}" placeholder="time" type="time" />
      </div>
      <div class="row">
        <label for="url-${id}">Url:</label>
        <input id="url-${id}" placeholder="url" type="url" />
      </div>
      <div class="row">
        <label for="week-${id}">Week:</label>
        <input id="week-${id}" placeholder="week" type="week" />
      </div>
    </div>
  `;
}

function generateCheckboxes(id) {
  return `
    <div class="checkboxes">
      <h2 class="heading">Checkboxes</h2>
      <div class="section">
        <div class="check-radio">
          <input id="checkbox-1-${id}" type="checkbox" />
          <label for="checkbox-1-${id}">Checkbox 1</label>
        </div>
        <div class="check-radio">
          <input id="checkbox-2-${id}" type="checkbox" />
          <label for="checkbox-2-${id}">Checkbox 2</label>
        </div>
        <div class="check-radio">
          <input id="checkbox-3-${id}" type="checkbox" />
          <label for="checkbox-3-${id}">Checkbox 3</label>
        </div>
      </div>
    </div>
  `;
}

function generateRadios(id) {
  return `
    <div class="radios">
      <h2 class="heading">Radios</h2>
      <div class="section">
        <div class="check-radio">
          <input id="radio-1-${id}" name="radio-${id}" type="radio" />
          <label for="radio-1-${id}">Radio 1</label>
        </div>
        <div class="check-radio">
          <input id="radio-2-${id}" name="radio-${id}" type="radio" />
          <label for="radio-2-${id}">Radio 2</label>
        </div>
        <div class="check-radio">
          <input id="radio-3-${id}" name="radio-${id}" type="radio" />
          <label for="radio-3-${id}">Radio 3</label>
        </div>
      </div>
    </div>
  `;
}

function generateButtons(id) {
  return `
    <div class="buttons">
      <h2 class="heading">Buttons</h2>
      <div class="section">
        <div class="button">
          <input id="input-button-${id}" value="input-button" type="button" />
        </div>
        <div class="button">
          <button id="button-${id}" type="button">Button</button>
        </div>
        <div class="button">
          <button id="button-submit-${id}" type="submit">Button Submit</button>
        </div>
        <div class="button">
          <button id="button-reset-${id}" type="reset">Button Reset</button>
        </div>
      </div>
    </div>
  `;
}

function generateSelects(id) {
  return `
    <div class="selects">
      <h2 class="heading">Selects</h2>
      <div class="section">
        <div class="select-section">
          <div>Select Single</div>
          <select id="select-${id}">
            <option value="option-1">Option 1</option>
            <option value="option-2">Option 2</option>
            <option value="option-3">Option 3</option>
          </select>
        </div>
        <div class="select-section">
          <div>Select Multiple</div>
          <select id="select-multiple-${id}" multiple>
            <option value="option-1">Option 1</option>
            <option value="option-2">Option 2</option>
            <option value="option-3">Option 3</option>
          </select>
        </div>
      </div>
    </div>
  `;
}

function generateMultiLineInputs(id) {
  return `
    <div class="multi-line">
      <h2 class="heading">Multi-line Inputs</h2>
      <div class="section">

        <div class="multi-line-item">
          <textarea id="textarea-${id}" placeholder="textarea"></textarea>
        </div>

        <div class="multi-line-item">
          <div class="multi-line-item-header">Content Editable</div>
          <div class="contenteditable-root" contenteditable id="contenteditable-${id}" placeholder="contenteditable"></div>
        </div>

        <div class="multi-line-item">
          <div class="multi-line-item-header">Content Editable Nested Bullets</div>
          <div class="contenteditable-root" contenteditable id="contenteditable-nested-${id}">
            I'm text at the top level
            <ul>
              <li>Bullet 1</li>
              <li>Bullet 2</li>
            </ul>
          </div>
        </div>

        <div class="multi-line-item">
          <div class="multi-line-item-header">Content Editable Nested Content Editables</div>
          <div class="contenteditable-root" contenteditable id="contenteditable-nested-${id}">
            I'm the root content editable
            <div contenteditable style="padding: 8px 0;">
              I'm a nested content editable
            </div>
            <div contenteditable>
              I'm also a nested content editable
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}