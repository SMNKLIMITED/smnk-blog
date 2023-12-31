

export default function AmbulanceDetails({values, handleChange}) {
  
    return (
    <div className="flex flex-col">
        <div className="w-full mx-2 flex-1">
            <div className="font-bold font-mono h-6 mt-3 text-gray-500 text-sm
            leading-8 uppercase">
                 DOB
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input type="date"
            onChange={handleChange('DOB')}
            value={values.DOB}
            name='DOB'
            placeholder="DOB"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800 placeholder:text-sm placeholder:gray-500 placeholder:opacity-50 placeholder:font-mono"
            required
            />
            </div>

        </div>

        <div className="w-full mx-2 flex-1">
            <div className="font-bold font-mono h-6 mt-3 text-gray-500 text-sm
            leading-8 uppercase">
                    Gender
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input type="text"
            onChange={handleChange('gender')}
            value={values.gender}
            name='gender'
            placeholder="Gender"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800 placeholder:text-sm placeholder:gray-500 placeholder:opacity-50 placeholder:font-mono"
            required
            />
            </div>
        </div>

        <div className="w-full mx-2 flex-1">
            <div className="font-bold font-mono h-6 mt-3 text-gray-500 text-sm
            leading-8 uppercase">
                    Phone Number
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input type="text"
            onChange={handleChange('phonenumber')}
            value={values.phonenumber}
            name='phonenumber'
            placeholder="Phone Number"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800 placeholder:text-sm placeholder:gray-500 placeholder:opacity-50 placeholder:font-mono"
            required
            />
            </div>
        </div>

    </div>
  )
}
