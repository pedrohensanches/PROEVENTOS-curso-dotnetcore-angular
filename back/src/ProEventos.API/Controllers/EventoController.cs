using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.API.Data;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
        private readonly DataContext _context;

        public EventoController(DataContext context)
        {
            this._context = context;
        }

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
            return _context.Eventos;
        }

        [HttpGet("{id}")]
        public Evento GetById(int id)
        {
            return _context.Eventos.Where(e => e.EventoId == id).FirstOrDefault();
        }

        [HttpPost]
        public string Post()
        {
            return "exemplo post";
        }

        [HttpPut("{id}")]
        public string Put(int id)
        {
            return $"exemplo put com id = {id}";
        }

        [HttpDelete("{id}")]
        public string Deleter(int id)
        {
            return $"exemplo delete com id = {id}";
        }
    }
}
