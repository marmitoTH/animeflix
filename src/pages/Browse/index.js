import React, { useEffect, useState, Fragment } from 'react'
import Api from '../../services/Api'
import { Rows, Row } from './styles'
import Loading from '../../components/Loading'
import Featured from '../../components/Featured'
import Carrousel from '../../components/Carrousel'

function Browse() {
  const [rows, setRows] = useState([])
  const [featured, setFeatured] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    function loadLocal() {
      const data = JSON.parse(localStorage.getItem('@animeflix/home'))

      if (data) {
        setRows(data.rows)
        setFeatured(data.featured)
        return true
      }

      return false
    }

    async function fetch() {
      setLoading(true)

      const trending = await Api.getTrending()
      const featured = trending[Math.floor(Math.random() * trending.length)]
      const rows = [{
        title: 'Trending',
        animes: trending
      }, {
        title: 'Upcoming',
        animes: await Api.getUpcoming()
      },
      {
        title: 'Shonen',
        animes: await Api.getByCategory('shounen')
      }, {
        title: 'Isekai',
        animes: await Api.getByCategory('isekai')
      }, {
        title: 'Seinen',
        animes: await Api.getByCategory('seinen')
      }, {
        title: 'Mecha',
        animes: await Api.getByCategory('mecha')
      }, {
        title: 'Shoujo',
        animes: await Api.getByCategory('shoujo')
      }, {
        title: 'Josei',
        animes: await Api.getByCategory('josei')
      }, {
        title: 'Slice of Life',
        animes: await Api.getByCategory('slice-of-life')
      }]

      localStorage.setItem('@animeflix/home', JSON.stringify({
        rows: rows,
        featured: featured
      }))

      setRows(rows)
      setFeatured(featured)
      setLoading(false)
    }

    if (!loadLocal()) {
      fetch()
    }
  }, [])

  window.onbeforeunload = () => {
    localStorage.clear()
  }

  function drawBrowse() {
    if (featured && rows) {
      return (
        <Fragment>
          <Featured anime={featured} />
          <Rows>
            {rows.map((row, key) => (
              <Row key={key}>
                <Carrousel
                  title={row.title}
                  animes={row.animes}
                />
              </Row>
            ))}
          </Rows>
        </Fragment>
      )
    }
  }

  return (
    <Fragment>
      <Loading loading={loading} />
      {!loading && drawBrowse()}
    </Fragment>
  )
}

export default Browse
