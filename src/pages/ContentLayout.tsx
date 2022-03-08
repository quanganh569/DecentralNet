import React from 'react';
import banner from '../assets/imgs/Banner.png';
const ContentLayout = () => {
  const array = [
    {
      decentralName: 'Avon',
      address: '0xc',
      duration: 70949,
      expiryDate:"2059-03-23T07:21:40.091Z",
      chain: 'Wagon',
      registrationDate: '2059-03-23T07:21:40.091Z',
      txnHash: '0x9',
      amountPaid: 'application/pkix-crl',
      id: '1',
    },
    {
      decentralName: 'Cambridgeshire',
      address: '0x8',
      duration: 88795,
      expiryDate:"2059-03-23T07:21:40.091Z",
      chain: 'Passenger Van',
      registrationDate: '2046-02-20T11:39:46.593Z',
      txnHash: '0xA',
      amountPaid: 'application/vnd.iptc.g2.newsitem+xml',
      id: '2',
    },
    {
      decentralName: 'Buckinghamshire',
      address: '0xB',
      duration: 63572,
      expiryDate:"2059-03-23T07:21:40.091Z",
      chain: 'Extended Cab Pickup',
      registrationDate: '2015-11-04T09:58:43.900Z',
      txnHash: '0x7',
      amountPaid: 'application/commonground',
      id: '3',
    },
    {
      decentralName: 'Cambridgeshire',
      address: '0xd',
      duration: 99437,
      expiryDate:"2059-03-23T07:21:40.091Z",
      chain: 'Cargo Van',
      registrationDate: '2010-02-21T15:22:08.979Z',
      txnHash: '0x0',
      amountPaid: 'audio/isac',
      id: '4',
    },
    {
      decentralName: 'Borders',
      address: '0xC',
      duration: 27693,
      expiryDate:"2059-03-23T07:21:40.091Z",
      chain: 'SUV',
      registrationDate: '2007-03-15T02:23:35.738Z',
      txnHash: '0x7',
      amountPaid: 'application/vnd.etsi.asic-e+zip',
      id: '5',
    },
    {
      decentralName: 'Cambridgeshire',
      address: '0xf',
      duration: 5614,
      expiryDate:"2059-03-23T07:21:40.091Z",
      chain: 'Sedan',
      registrationDate: '2090-05-30T20:39:17.601Z',
      txnHash: '0x4',
      amountPaid: 'application/vnd.radisys.msml-audit-dialog+xml',
      id: '6',
    },
    {
      decentralName: 'Berkshire',
      address: '0x5',
      duration: 35504,
      expiryDate:"2059-03-23T07:21:40.091Z",
      chain: 'Crew Cab Pickup',
      registrationDate: '2030-12-20T02:43:13.889Z',
      txnHash: '0xC',
      amountPaid: 'application/x-t3vm-image',
      id: '7',
    },
    {
      decentralName: 'Berkshire',
      address: '0x7',
      duration: 44099,
      expiryDate:"2059-03-23T07:21:40.091Z",
      chain: 'SUV',
      registrationDate: '2042-08-11T10:21:28.169Z',
      txnHash: '0x0',
      amountPaid: 'text/x-pascal',
      id: '8',
    },
    {
      decentralName: 'Borders',
      address: '0xf',
      duration: 90195,
      expiryDate:"2059-03-23T07:21:40.091Z",
      chain: 'SUV',
      registrationDate: '2016-04-25T14:51:31.423Z',
      txnHash: '0xD',
      amountPaid: 'application/vnd.ms-pki.stl',
      id: '9',
    },
  
  ];

  return (
    <div className="container  justify-between items-center mx-auto py-5">
      <div className="flex ">
        <img className="mx-auto object-cover h-48 w-96" src={banner}  />
      </div>
      {/* Search */}
      <div className="search text-center">
        <div>
          <div className="hero bg-gredient-dark  flex flex-col px-2">
            <div className="search-box mx-auto my-auto w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4">
              <form className="flex flex-row">
                <span className="flex items-center bg-gray-100 rounded rounded-r-none border-0 px-3 font-bold text-grey-100">
                  🔎
                </span>
                <input
                  className="h-16 bg-gray-100 text-grey-darker py-2 font-normal text-grey-darkest border border-gray-100 font-bold w-full py-1 px-2 outline-none text-lg text-gray-600"
                  type="text"
                  placeholder="Searchs Names or Addresses?"
                />
                <span className="flex items-center bg-gray-100 rounded rounded-l-none border-0 px-3 font-bold text-grey-100">
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm  text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 py-3 px-6 rounded">
                    Search
                  </button>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Table */}
      <div className="flex flex-col py-20">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Decentraname
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Duration(In years)
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Expiry Date
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Chain
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Registration
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      TxnHash
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Amount Paid
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  {array.map((item) => {
                    return (
                      <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {item.decentralName}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                        {item.address}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           {item.duration}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           {item.chain}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           {item.registrationDate}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           {item.txnHash}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           {item.amountPaid}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           {item.decentralName}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentLayout;
