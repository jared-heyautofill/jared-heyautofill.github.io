function generateAll(id, title) {
  if (!id || !title) {
    throw new Error('Pass all required args to generateAll')
  }

  return `
    <div class="container">
      <h1>${title}</h1>
      <div class="columns">
        <div>
          ${generateTextInputs(id)}
          ${generateButtons(id)}
        </div>
        <div>
          ${generateCheckboxes(id)}
          ${generateRadios(id)}
          ${generateSelects(id)}
          ${generateMultiLineInputs(id)}
        </div>
      </div>
    </div>
  `;
}

function generateTextInputs(id) {
  return `
    <div class="inputs sections">
      <h2>Inputs</h2>
      <div>
        <label for="color-${id}">Color:</label>
        <input id="color-${id}" placeholder="color" type="color" />
      </div>
      <div>
        <label for="date-${id}">Date:</label>
        <input id="date-${id}" placeholder="date" type="date" />
      </div>
      <div>
        <label for="datetime-${id}">Datetime:</label>
        <input id="datetime-local-${id}" placeholder="datetime-local" type="datetime-local" />
      </div>
      <div>
        <label for="email-${id}">Email:</label>
        <input id="email-${id}" placeholder="email" type="email" />
      </div>
      <div>
        <label for="file-${id}">File:</label>
        <input id="file-${id}" placeholder="file" type="file" />
      </div>
      <div>
        <label for="hidden-${id}">Hidden:</label>
        <input id="hidden-${id}" placeholder="hidden" type="hidden" />
      </div>
      <div>
        <label for="image-${id}">Image:</label>
        <input id="image-${id}" placeholder="image" type="image" />
      </div>
      <div>
        <label for="month-${id}">Month:</label>
        <input id="month-${id}" placeholder="month" type="month" />
      </div>
      <div>
        <label for="number-${id}">Number:</label>
        <input id="number-${id}" placeholder="number" type="number" />
      </div>
      <div>
        <label for="password-${id}">Password:</label>
        <input id="password-${id}" placeholder="password" type="password" />
      </div>
      <div>
        <label for="range-${id}">Range:</label>
        <input id="range-${id}" placeholder="range" type="range" />
      </div>
      <div>
        <label for="search-${id}">Search:</label>
        <input id="search-${id}" placeholder="search" type="search" />
      </div>
      <div>
        <label for="tel-${id}">Tel:</label>
        <input id="tel-${id}" placeholder="tel" type="tel" />
      </div>
      <div>
        <label for="text-${id}">Text:</label>
        <input id="text-${id}" placeholder="text" type="text" />
      </div>
      <div>
        <label for="time-${id}">Time:</label>
        <input id="time-${id}" placeholder="time" type="time" />
      </div>
      <div>
        <label for="url-${id}">Url:</label>
        <input id="url-${id}" placeholder="url" type="url" />
      </div>
      <div>
        <label for="week-${id}">Week:</label>
        <input id="week-${id}" placeholder="week" type="week" />
      </div>
    </div>
  `;
}

function generateCheckboxes(id) {
  return `
    <div class="checkboxes section">
      <h2>Checkboxes</h2>
      <div>
        <input id="checkbox-1-${id}" type="checkbox" />
        <label for="checkbox-1-${id}">Checkbox 1</label>
      </div>
      <div>
        <input id="checkbox-2-${id}" type="checkbox" />
        <label for="checkbox-2-${id}">Checkbox 2</label>
      </div>
      <div>
        <input id="checkbox-3-${id}" type="checkbox" />
        <label for="checkbox-3-${id}">Checkbox 3</label>
      </div>
    </div>
  `;
}

function generateRadios(id) {
  return `
    <div class="radios section">
      <h2>Radios</h2>
      <div>
        <input id="radio-1-${id}" name="radio-${id}" type="radio" />
        <label for="radio-1-${id}">Radio 1</label>
      </div>
      <div>
        <input id="radio-2-${id}" name="radio-${id}" type="radio" />
        <label for="radio-2-${id}">Radio 2</label>
      </div>
      <div>
        <input id="radio-3-${id}" name="radio-${id}" type="radio" />
        <label for="radio-3-${id}">Radio 3</label>
      </div>
    </div>
  `;
}

function generateButtons(id) {
  return `
    <div class="buttons section">
      <h2>Buttons</h2>
      <div>
        <input id="input-button-${id}" value="input-button" type="button" />
      </div>
      <div>
        <button id="button-${id}" type="button">Button</button>
      </div>
      <div>
        <button id="button-submit-${id}" type="submit">Button Submit</button>
      </div>
      <div>
        <button id="button-reset-${id}" type="reset">Button Reset</button>
      </div>
    </div>
  `;
}

function generateSelects(id) {
  return `
    <div class="selects section">
      <h2>Selects</h2>
      <div>
        <div>Select Single</div>
        <select id="select-${id}">
          <option value="option-1">Option 1</option>
          <option value="option-2">Option 2</option>
          <option value="option-3">Option 3</option>
        </select>
      </div>
      <div>
        <div>Select Multiple</div>
        <select id="select-multiple-${id}" multiple>
          <option value="option-1">Option 1</option>
          <option value="option-2">Option 2</option>
          <option value="option-3">Option 3</option>
        </select>
      </div>
    </div>
  `;
}

function generateMultiLineInputs(id) {
  return `
    <div class="multi-line section">
      <h2>Multi-line Inputs</h2>
      <div>
        <textarea id="textarea-${id}" placeholder="textarea"></textarea>
      </div>
      <div>
        <div>Content Editable</div>
        <div contenteditable id="contenteditable-${id}" placeholder="contenteditable"></div>
      </div>
      <div>
        Content Editable Nested Div
        <div contenteditable id="contenteditable-nested-${id}">
          I'm text at the top level
          <p>
            I'm text in a paragraph element
          </p>
        </div>
      </div>
    </div>
  `;
}