import { useState, useEffect } from 'react'
import { GithubProfileInfo } from '../../@types'
import { api } from '../../api'
import { Header, Card } from '../../components'
import { HomeContent } from './styles'

export const Home = () => {
  const [profileInfo, setProfileInfo] = useState<GithubProfileInfo | null>(null)

  useEffect(() => {
    // api.get('/users/marceometry').then(({ data }) => {
    //   setProfileInfo({
    //     avatar_url: data.avatar_url,
    //     bio: data.bio,
    //     followers: data.followers,
    //     html_url: data.html_url,
    //     login: data.login,
    //     name: data.name,
    //   })
    // })
    setProfileInfo({
      avatar_url: 'https://avatars.githubusercontent.com/u/76463400?v=4',
      bio: '20 years old - FrontEnd Developer - ReactJS.',
      followers: 14,
      html_url: 'https://github.com/Marceometry',
      login: 'Marceometry',
      name: 'Marcelino Teixeira',
    })
  }, [])

  if (!profileInfo) return <></>

  return (
    <div>
      <Header />

      <HomeContent>
        <Card>
          <img src={profileInfo.avatar_url} alt='' />

          <div>
            <header>
              <h2>{profileInfo.name}</h2>
              <a target='_blank' href={profileInfo.html_url}>
                GITHUB
              </a>
            </header>

            <p>{profileInfo.bio}</p>

            <footer>
              <a target='_blank' href={profileInfo.html_url}>
                {profileInfo.login}
              </a>
              <a target='_blank' href={profileInfo.html_url + '?tab=followers'}>
                {profileInfo.followers}
              </a>
            </footer>
          </div>
        </Card>
      </HomeContent>
    </div>
  )
}
