import { useState } from 'react';
import { Search, MapPin, DollarSign, Calendar, Eye, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SearchEquipment() {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(true);

  const equipmentResults = [
    {
      id: 1,
      name: 'Mahindra 575 DI Tractor',
      category: 'Tractor',
      model: '575 DI, 47 HP',
      owner: 'Ramesh Kumar',
      location: 'Rampur, UP',
      distance: '2.5 km',
      price: '₹800/day',
      availability: 'Available',
      verified: true,
    },
    {
      id: 2,
      name: 'John Deere 5050D Tractor',
      category: 'Tractor',
      model: '5050D, 50 HP',
      owner: 'Sunil Verma',
      location: 'Rampur, UP',
      distance: '3.8 km',
      price: '₹900/day',
      availability: 'Available',
      verified: true,
    },
    {
      id: 3,
      name: 'Rotavator (7 Feet)',
      category: 'Tillage Equipment',
      model: '7 Feet Standard',
      owner: 'Vijay Singh',
      location: 'Meerut, UP',
      distance: '15 km',
      price: '₹500/day',
      availability: 'Available',
      verified: true,
    },
    {
      id: 4,
      name: 'Seed Drill Machine',
      category: 'Seeding Equipment',
      model: '9 Row',
      owner: 'Prakash Yadav',
      location: 'Rampur, UP',
      distance: '4.2 km',
      price: '₹600/day',
      availability: 'Available',
      verified: true,
    },
    {
      id: 5,
      name: 'Harvester Combine',
      category: 'Harvesting Equipment',
      model: 'Mini Combine',
      owner: 'Rajesh Sharma',
      location: 'Muzaffarnagar, UP',
      distance: '22 km',
      price: '₹2,500/day',
      availability: 'Available',
      verified: true,
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Search Equipment</h2>
        <p className="text-sm text-gray-600 mt-1">Find agricultural equipment available for rent near you</p>
      </div>

      {/* Search Form */}
      <div className="bg-white border border-gray-300 rounded-sm p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Equipment Type <span className="text-red-600">*</span>
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="">All Types</option>
              <option value="tractor">Tractor</option>
              <option value="tillage">Tillage Equipment</option>
              <option value="seeding">Seeding Equipment</option>
              <option value="planting">Planting Equipment</option>
              <option value="harvesting">Harvesting Equipment</option>
              <option value="spraying">Spraying Equipment</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your location"
              defaultValue="Rampur, UP"
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Required Date <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="1">1 Day</option>
              <option value="2">2 Days</option>
              <option value="3">3 Days</option>
              <option value="7">1 Week</option>
            </select>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
          >
            <Filter className="w-4 h-4" />
            {showFilters ? 'Hide' : 'Show'} Filters
          </button>
          <button className="px-6 py-2 bg-green-600 text-white rounded-sm hover:bg-green-700 flex items-center gap-2">
            <Search className="w-4 h-4" />
            Search Equipment
          </button>
        </div>
      </div>

      {/* Filters Sidebar */}
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white border border-gray-300 rounded-sm p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Price Range</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-700">Below ₹500/day</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-700">₹500 - ₹1000/day</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-700">₹1000 - ₹2000/day</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-700">Above ₹2000/day</span>
              </label>
            </div>

            <h3 className="text-sm font-semibold text-gray-900 mb-3 mt-6">Distance</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-700">Within 5 km</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-700">5-15 km</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-700">15-30 km</span>
              </label>
            </div>

            <h3 className="text-sm font-semibold text-gray-900 mb-3 mt-6">Availability</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                <span className="text-sm text-gray-700">Available Now</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-700">Verified Owners</span>
              </label>
            </div>
          </div>

          {/* Search Results */}
          <div className="md:col-span-3 space-y-4">
            <div className="bg-gray-50 border border-gray-300 rounded-sm px-4 py-3">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">{equipmentResults.length}</span> equipment found near Rampur, UP
              </p>
            </div>

            {equipmentResults.map((equipment) => (
              <div key={equipment.id} className="bg-white border border-gray-300 rounded-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="w-24 h-24 bg-gray-200 rounded border border-gray-300 flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-8 h-8 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{equipment.name}</h3>
                            <p className="text-sm text-gray-600">{equipment.model}</p>
                          </div>
                          {equipment.verified && (
                            <span className="inline-flex px-2 py-1 text-xs font-medium rounded-sm bg-green-100 text-green-800">
                              Verified
                            </span>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-3">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="w-4 h-4" />
                            <span>{equipment.location} • {equipment.distance}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <DollarSign className="w-4 h-4" />
                            <span className="font-semibold text-gray-900">{equipment.price}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mt-3 text-sm text-gray-600">
                          <span>Owner: {equipment.owner}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ml-6 flex flex-col gap-2">
                    <span className="inline-flex px-3 py-1 text-xs font-medium rounded-sm bg-green-100 text-green-800">
                      {equipment.availability}
                    </span>
                    <button
                      onClick={() => navigate(`/farmer/equipment/${equipment.id}`)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 flex items-center gap-2 text-sm whitespace-nowrap"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!showFilters && (
        <div className="space-y-4">
          <div className="bg-gray-50 border border-gray-300 rounded-sm px-4 py-3">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">{equipmentResults.length}</span> equipment found near Rampur, UP
            </p>
          </div>

          {equipmentResults.map((equipment) => (
            <div key={equipment.id} className="bg-white border border-gray-300 rounded-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-24 h-24 bg-gray-200 rounded border border-gray-300 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-8 h-8 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{equipment.name}</h3>
                          <p className="text-sm text-gray-600">{equipment.model}</p>
                        </div>
                        {equipment.verified && (
                          <span className="inline-flex px-2 py-1 text-xs font-medium rounded-sm bg-green-100 text-green-800">
                            Verified
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4 mt-3">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span>{equipment.location} • {equipment.distance}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <DollarSign className="w-4 h-4" />
                          <span className="font-semibold text-gray-900">{equipment.price}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-3 text-sm text-gray-600">
                        <span>Owner: {equipment.owner}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ml-6 flex flex-col gap-2">
                  <span className="inline-flex px-3 py-1 text-xs font-medium rounded-sm bg-green-100 text-green-800">
                    {equipment.availability}
                  </span>
                  <button
                    onClick={() => navigate(`/farmer/equipment/${equipment.id}`)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 flex items-center gap-2 text-sm whitespace-nowrap"
                  >
                    <Eye className="w-4 h-4" />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
