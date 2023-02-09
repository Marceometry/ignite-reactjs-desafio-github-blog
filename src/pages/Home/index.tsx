import { useState, useEffect } from 'react'
import { GithubProfileInfo } from '../../@types'
import { api } from '../../api'
import { GithubBrand, UserGroup } from '../../assets'
import { ArrowUpRightFromSquare } from '../../assets/arrow-up-right-from-square'
import { Header, Card } from '../../components'
import { HomeContent } from './styles'

export const Home = () => {
  const [profileInfo, setProfileInfo] = useState<GithubProfileInfo | null>(null)

  useEffect(() => {
    api.get('/users/marceometry').then(({ data }) => {
      setProfileInfo({
        avatar_url: data.avatar_url,
        bio: data.bio,
        followers: data.followers,
        html_url: data.html_url,
        login: data.login,
        name: data.name,
      })
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
                <ArrowUpRightFromSquare />
              </a>
            </header>

            <p>{profileInfo.bio}</p>

            <footer>
              <a target='_blank' href={profileInfo.html_url}>
                <GithubBrand />
                {profileInfo.login}
              </a>
              <a target='_blank' href={profileInfo.html_url + '?tab=followers'}>
                <UserGroup />
                {profileInfo.followers} seguidores
              </a>
            </footer>
          </div>
        </Card>
      </HomeContent>
    </div>
  )
}
