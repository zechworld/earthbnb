// Libraries
import { useRouter } from 'next/router'
import { format } from 'date-fns'

// Own Imports
import Header from '../components/Header'
import Footer from '../components/Footer'
import InfoCard from '../components/InfoCard'

const SearchPage = ({ searchResults }) => {
  const router = useRouter()
  const { location, startDate, endDate, numGuests } = router.query
  const formattedStartDate = format(new Date(startDate), 'dd MMMM yyyy')
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yyyy')
  const range = `${formattedStartDate} - ${formattedEndDate}`
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numGuests}`} />

      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">
            300 + Stays - {range} - for {numGuests} number of guests
          </p>

          <h1 className="mt-2 mb-6 text-3xl font-semibold">{`Stays in ${location}`}</h1>

          <div className="mb-5 hidden space-x-3 whitespace-nowrap text-gray-800 md:inline-flex">
            <p className="filterButton">Cancellation flexibility</p>
            <p className="filterButton">Type of Place</p>
            <p className="filterButton">Price</p>
            <p className="filterButton">Rooms and Beds</p>
            <p className="filterButton">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map((item) => (
              <InfoCard key={item.img} {...item} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default SearchPage

export async function getServerSideProps() {
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    (res) => res.json()
  )

  return {
    props: {
      searchResults,
    },
  }
}
