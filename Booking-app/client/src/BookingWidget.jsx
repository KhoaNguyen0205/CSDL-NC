export default function BookingWidget({place}) {
    return(
        <div className="bg-white shadow p-4 rounded-2xl">
                    <div className="text-2xl text-center">
                       Price: ${place.price} / per night
                    </div>
                    <div className="border rounded-2xl">
                        <div className="flex">
                        <div className="py-3 px-4 ">
                         <label className="font-semibold">Check in :</label>
                         <input type="date" /> <br/>
                       </div>
                       <div className="py-3 px-4 border-t">
                         <label  className="font-semibold">Check out :</label>
                         <input type="date" /> <br/>
                       </div>
                        </div>
                        <div>
                        <div className="py-3 px-4 border-t">
                         <label  className="font-semibold">Number of Guests:</label>
                         <input type="number"   /> <br/>
                       </div>
                        </div>
                    </div>
                    <button className="primary mt-4">Book this place</button>
                </div>
    );
}