
export default function DriverDetails({values, handleChange}) {
   
    return (
    <div className="flex flex-col">
        <div className="w-full mx-2 flex-1">
            <div className="font-bold font-mono h-6 mt-3 text-gray-500 text-sm
            leading-8 uppercase">
                    name
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input type="text"
            onChange={handleChange('name')}
            value={values.name}
            name='name'
            placeholder="Name"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800 placeholder:text-sm placeholder:gray-500 placeholder:opacity-50 placeholder:font-mono"
            required
            />
            </div>

        </div>

        <div className="w-full mx-2 flex-1">
            <div className="font-bold font-mono h-6 mt-3 text-gray-500 text-sm
            leading-8 uppercase">
                    Email
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input type="email"
            onChange={handleChange('email')}
            value={values.email}
            name='email'
            placeholder="Email"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800 placeholder:text-sm placeholder:gray-500 placeholder:opacity-50 placeholder:font-mono"
           required
           />
            </div>
        </div>

        <div className="w-full mx-2 flex-1">
            <div className="font-bold font-mono h-6 mt-3 text-gray-500 text-sm
            leading-8 uppercase">
                    NIN
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input type="text"
            onChange={handleChange('nin')}
            value={values.nin}
            name='nin'
            placeholder="NIN"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800 placeholder:text-sm placeholder:gray-500 placeholder:opacity-50 placeholder:font-mono"
           required
           />
            </div>
        </div>

        <div className="w-full mx-2 flex-1">
            <div className="font-bold font-mono h-6 mt-3 text-gray-500 text-sm
            leading-8 uppercase">
                    Address
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input type="text"
            onChange={handleChange('address')}
            value={values.address}
            name='address'
            placeholder="Address"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800 placeholder:text-sm placeholder:gray-500 placeholder:opacity-50 placeholder:font-mono"
            required
            />
            </div>
        </div>

    </div>
  )
}
