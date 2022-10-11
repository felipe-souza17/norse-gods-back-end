import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.use(express.json())

app.get('/gods', async (request, response) => {
  const gods = await prisma.god.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      bannerUrl: true
    }
  })

  return response.json(gods)
})

app.get('/gods/:id', async (request, response) => {
  const godId = request.params.id

  const god = await prisma.god.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      bannerUrl: true
    },
    where: {
      id: godId
    }
  })

  return response.json(god)
})

app.get('/realms', async (request, response) => {
  const realms = await prisma.realm.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      bannerUrl: true
    }
  })

  return response.json(realms)
})
app.get('/realms/:id', async (request, response) => {
  const realmId = request.params.id

  const realm = await prisma.realm.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      bannerUrl: true
    },
    where: {
      id: realmId
    }
  })

  return response.json(realm)
})

app.get('/tales', async (request, response) => {
  const tales = await prisma.tale.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      bannerUrl: true
    }
  })

  return response.json(tales)
})

app.get('/tales/:id', async (request, response) => {
  const taleId = request.params.id

  const tale = await prisma.tale.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      bannerUrl: true
    },
    where: {
      id: taleId
    }
  })

  return response.json(tale)
})

app.get('/civilization', async (request, response) => {
  const civilization = await prisma.civilization.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      bannerUrl: true
    }
  })
  return response.json(civilization)
})

app.get('/civilization/:id', async (request, response) => {
  const civId = request.params.id

  const civilization = await prisma.civilization.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      bannerUrl: true
    },
    where: {
      id: civId
    }
  })

  return response.json(civilization)
})

app.listen(3333)
