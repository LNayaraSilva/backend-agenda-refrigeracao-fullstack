const agendamentoDeServicos = require('../models/Refrigeracao');

exports.listEntries = async (req, res) => {
  const entries = await agendamentoDeServicos.find();
  res.json(entries);
};

exports.getEntryById = async (req, res) => {
  const entry = await agendamentoDeServicos.findById(req.params.id);
  if (!entry) return res.status(404).json({ message: 'Agendamento não encontrado.' });
  res.json(entry);
};

exports.createEntry = async (req, res) => {
  const entry = await agendamentoDeServicos.create(req.body);
  res.status(201).json(entry);
};

exports.updateEntry = async (req, res) => {
  const entry = await agendamentoDeServicos.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!entry) return res.status(404).json({ message: 'Agendamento não encontrado.' });

  res.json(entry);
};

exports.deleteEntry = async (req, res) => {
  const entry = await agendamentoDeServicos.findByIdAndDelete(req.params.id);
  if (!entry) return res.status(404).json({ message: 'Agendamento não encontrado.' });
  res.json({ message: 'Agendamento removido com sucesso.' });
};