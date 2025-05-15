const express = require('express')
const { PrismaClient } = require('@prisma/client')
const cors = require('cors')
const app = express()
const port = 3000

const prisma = new PrismaClient()

// Middlewares
app.use(cors())
app.use(express.json())

// Rotas para TiposGastos

// Listar todos os tipos de gastos
app.get('/tipos-gastos', async (req, res) => {
  try {
    const tiposGastos = await prisma.tiposGastos.findMany()
    res.json(tiposGastos)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tipos de gastos' })
  }
})

// Buscar um tipo de gasto específico
app.get('/tipos-gastos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const tipoGasto = await prisma.tiposGastos.findUnique({
      where: { COD: parseInt(id) }
    })
    
    if (!tipoGasto) {
      return res.status(404).json({ error: 'Tipo de gasto não encontrado' })
    }
    
    res.json(tipoGasto)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tipo de gasto' })
  }
})

// Criar novo tipo de gasto
app.post('/tipos-gastos', async (req, res) => {
  try {
    const { DESCRICAO } = req.body
    
    if (!DESCRICAO) {
      return res.status(400).json({ error: 'Descrição é obrigatória' })
    }
    
    const novoTipoGasto = await prisma.tiposGastos.create({
      data: {
        DESCRICAO
      }
    })
    
    res.status(201).json(novoTipoGasto)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar tipo de gasto' })
  }
})

// Atualizar tipo de gasto
app.put('/tipos-gastos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { DESCRICAO } = req.body
    
    if (!DESCRICAO) {
      return res.status(400).json({ error: 'Descrição é obrigatória' })
    }
    
    const tipoGastoAtualizado = await prisma.tiposGastos.update({
      where: { COD: parseInt(id) },
      data: { DESCRICAO }
    })
    
    res.json(tipoGastoAtualizado)
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Tipo de gasto não encontrado' })
    }
    res.status(500).json({ error: 'Erro ao atualizar tipo de gasto' })
  }
})

// Deletar tipo de gasto
app.delete('/tipos-gastos/:id', async (req, res) => {
  try {
    const { id } = req.params
    
    // Verificar se existem gastos relacionados
    const gastosRelacionados = await prisma.gastosRealizados.findFirst({
      where: { tipos_gastos_COD: parseInt(id) }
    })
    
    if (gastosRelacionados) {
      return res.status(400).json({ 
        error: 'Não é possível deletar este tipo de gasto pois existem gastos relacionados a ele' 
      })
    }
    
    await prisma.tiposGastos.delete({
      where: { COD: parseInt(id) }
    })
    
    res.status(204).send()
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Tipo de gasto não encontrado' })
    }
    res.status(500).json({ error: 'Erro ao deletar tipo de gasto' })
  }
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
