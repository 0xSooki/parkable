export default function Main() {
    return (
      <div className="main">
        <div>
        <h1 style={{fontSize:32}}>Find parking in a button</h1>
        <p>Choose from millions of available spaces,reserve your places</p>
        </div>
        <div className="main-form">
            <button className="btn-secondary main-form-button main-form-button-left">Hourly/Daily</button>
            <button className="btn btn-success main-form-button">Monthly</button>
        </div>
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
        <div className="form">
                <input 
                    type="text"
                    placeholder="Name"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Phone"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Year/Month/Date"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Year/Month/Date"
                    className="form--input"
                />
          <div className="mb-2">
          <label>
            <span className="text-gray-700">Message</span>
                 <textarea style={{border:'1px solid red'}}
                name="message"
                className="
            block
            w-full
            mt-2 px-16 py-8
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "></textarea>
              </label>
                <button 
                    className="form--button"
                >
                  Submit 🖼
                </button>
                </div>
            </div>
            </div>
            </div>
    )
}