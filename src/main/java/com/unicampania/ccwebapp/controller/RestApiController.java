package com.unicampania.ccwebapp.controller;

import java.util.List;


import com.unicampania.ccwebapp.model.*;
import com.unicampania.ccwebapp.repositories.*;
import com.unicampania.ccwebapp.util.CustomErrorType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/SpringBootCRUDApp/api")
public class RestApiController {

	public static final Logger logger = LoggerFactory.getLogger(RestApiController.class);

	@Autowired
	UserRepository userRepository; //Service which will do all data retrieval/manipulation work

	@Autowired
	FcIntroductionRepository fcIntroductionRepository;

	@Autowired
	FcInformativeNotesRepository fcInformativeNotesRepository;

	@Autowired
	FfamilyReposiory ffamilyReposiory;

	@Autowired
	FComponentRepository fComponentRepository;

	@Autowired
	FcoDependenciesRepository fcoDipendenciesRepository;

	@Autowired
	FcoEvaluatorNotesRepository fcoEvaluatorNotesRepository;

	@Autowired
	ListFcoRepository listFfcoRepository;

	@Autowired
	FfBehaviourRepository ffBehaviourRepository;

	@Autowired
	FcoUserNotesRepository fcoUserNotesRepository;

	@Autowired
	FfUserNotesRepository ffUserNotesRepository;

	@Autowired
	FcoHierarchicalRepository fcoHierarchicalRepository;

	@Autowired
	FcoManagementRepository fcoManagementRepository;

	@Autowired
	FelementRepository felementRepository;

	// -------------------Retrieve Fclass---------------------------------------------

	@RequestMapping(value = "/user/", method = RequestMethod.GET)
	public ResponseEntity<List<User>> listAllUsers() {
		List<User> users = userRepository.findAll();
		if (users.isEmpty()) {
			return new ResponseEntity<List<User>>(HttpStatus.NO_CONTENT);
			// You many decide to return HttpStatus.NOT_FOUND
		}
		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
	}


	// -------------------Ritorna gli elementi di fcintroduction------------------------------------------

	@RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getUser(@PathVariable("id") String id) {
		logger.info("Fetching User with id {}", id);
		List<FcIntroduction> fcintroductions = fcIntroductionRepository.fclassQuery(id);
		if (fcintroductions.isEmpty() ) {
			logger.error("User with id {} not found.", id);
			return new ResponseEntity<CustomErrorType>(new CustomErrorType("User with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}

        System.out.println(fcintroductions);
		return new ResponseEntity<List<FcIntroduction>>(fcintroductions, HttpStatus.OK);
	}

	// -------------------Ritorna gli elementi di fcinformativenotes------------------------------------------

	@RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getFcInformativeNotes(@PathVariable("id") String id) {
		logger.info("Fetching User with id {}", id);
		List<FcInformativeNotes> fcinformationsnotes = fcInformativeNotesRepository.fcinformativenotesQuery(id);
		if (fcinformationsnotes.isEmpty() ) {
			logger.error("User with id {} not found.", id);
			return new ResponseEntity<CustomErrorType>(new CustomErrorType("User with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<FcInformativeNotes>>(fcinformationsnotes, HttpStatus.OK);
	}

	// -------------------Ritorna gli elementi di ffamily------------------------------------------

	@RequestMapping(value = "/family/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getFfamily(@PathVariable("id") String id) {
		logger.info("Fetching User with id {}", id);
		List<Ffamily> ffamily = ffamilyReposiory.ffamilyclassQuery(id);
		if (ffamily .isEmpty() ) {
			logger.error("User with id {} not found.", id);
			return new ResponseEntity<CustomErrorType>(new CustomErrorType("User with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<Ffamily>>(ffamily , HttpStatus.OK);
	}

	// -------------------Ritorna gli elementi di fcomponent (Requirements)------------------------------------------

	@RequestMapping(value = "/fcomponent/{Name}", method = RequestMethod.GET)
	public ResponseEntity<?> getFcomponent(@PathVariable("Name") String id) {
		logger.info("Fetching User with id {}", id);
		List<FComponent> fcomponents = fComponentRepository.fcomponentQuery(id);
		if ( fcomponents.isEmpty() ) {
			logger.error("User with id {} not found.", id);
			return new ResponseEntity<CustomErrorType>(new CustomErrorType("User with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<FComponent>>( fcomponents , HttpStatus.OK);
	}
	// -------------------Ritorna gli elementi di fcomponent per catalogo (Requirements)------------------------------------------

	@RequestMapping(value = "/fcomponents/{id:.+}", method = RequestMethod.GET)
	public ResponseEntity<?> getFcomponents(@PathVariable("id") String id) {
		logger.info("Fetching User with id {}", id);
		List<FComponent> fcomponents = fComponentRepository.fcomponentCatalogoQuery(id);
		if ( fcomponents.isEmpty() ) {
			logger.error("User with id {} not found.", id);
			return new ResponseEntity<CustomErrorType>(new CustomErrorType("User with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<FComponent>>( fcomponents , HttpStatus.OK);
	}

	// -------------------Ritorna gli elementi di felement (nella descrizione dei Requirements)------------------------------------------

	@RequestMapping(value = "/felement/{id:.+}", method = RequestMethod.GET)
	public ResponseEntity<?> getFelement(@PathVariable("id") String id) {
		logger.info("Fetching User with id {}", id);
		List<Felement> felements = felementRepository.felementQuery(id);
		if ( felements.isEmpty() ) {
			logger.error("User with id {} not found.", id);
			return new ResponseEntity<CustomErrorType>(new CustomErrorType("User with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<Felement>>( felements , HttpStatus.OK);
	}

// -------------------Ritorna gli elementi di fcodipendencies(Dipendenze)------------------------------------------

	@RequestMapping(value = "/fcodependencies/{id:.+}", method = RequestMethod.GET)
	public ResponseEntity<?> getFcoDipendencies(@PathVariable("id") String id) {

		logger.info("Fetching fcodipendencies with id {}", id);
		List<FcoDependencies> fcodependencies = fcoDipendenciesRepository.fcodipendenciesQuery(id);
		if ( fcodependencies.isEmpty() ) {
			FcoDependencies c = new FcoDependencies();
			c.setFcomponent("NO DEPENDECE");
			c.setIdf(id);
			fcodependencies.add(c);
			return new ResponseEntity<List<FcoDependencies>>( fcodependencies , HttpStatus.OK);
		}
		return new ResponseEntity<List<FcoDependencies>>( fcodependencies , HttpStatus.OK);
	}

	// -------------------Ritorna gli elementi di fcofcohierarchical(Dipendenze)------------------------------------------

	@RequestMapping(value = "/fcohierarchical/{id:.+}", method = RequestMethod.GET)
	public ResponseEntity<?> getFcoHierarchical(@PathVariable("id") String id) {

		logger.info("Fetching fcohierarchical with id {}", id);
		List<FcoHierarchical> fcohierarchicals = fcoHierarchicalRepository.fcohierarchicalQuery(id);
		if ( fcohierarchicals.isEmpty() ) {
			FcoHierarchical c = new FcoHierarchical();
			c.setFcomponent("No other components.");
			c.setIdf(id);
			fcohierarchicals.add(c);
			return new ResponseEntity<List<FcoHierarchical>>( fcohierarchicals , HttpStatus.OK);
		}
		return new ResponseEntity<List<FcoHierarchical>>( fcohierarchicals , HttpStatus.OK);
	}
	// -------------------Ritorna gli elementi di fcomanagment------------------------------------------

	@RequestMapping(value = "/fcomanagement/{id:.+}", method = RequestMethod.GET)
	public ResponseEntity<?> getFcoManagment(@PathVariable("id") String id) {

		logger.info("Fetching getListFcoManagement with id {}", id);
		List<FcoManagement> fcomanagement = fcoManagementRepository.fcomanagmentQuery(id);
		if ( fcomanagement.isEmpty() ) {
			FcoManagement c = new FcoManagement();
			c.setText("There are no management activities foreseen");
			c.setIdf(id);
			fcomanagement.add(c);
			return new ResponseEntity<List<FcoManagement>>( fcomanagement , HttpStatus.OK);
		}


		return new ResponseEntity<List<FcoManagement>>( fcomanagement , HttpStatus.OK);
	}

	// -------------------Ritorna gli elementi di  fcoevaluatornotes(Evaluetor Notes)------------------------------------------

	@RequestMapping(value = "/fcoevaluatornotes/{id:.+}", method = RequestMethod.GET)
	public ResponseEntity<?> getFcoEvaluatorNotes(@PathVariable("id") String id) {

		logger.info("Fetching fcoevaluatornotes with id {}", id);
		List<FcoEvaluatorNotes> fcoevaluatornotes = fcoEvaluatorNotesRepository.fcoevaluatornotesQuery(id);
		if ( fcoevaluatornotes.isEmpty() ) {
			FcoEvaluatorNotes c = new FcoEvaluatorNotes();
			c.setId("");
			c.setType("");
			c.setPara("THERE ARE NO ELEMENTS");
			c.setIdf(id);
			fcoevaluatornotes.add(c);
			return new ResponseEntity<List<FcoEvaluatorNotes>>( fcoevaluatornotes , HttpStatus.OK);
		}
		return new ResponseEntity<List<FcoEvaluatorNotes>>( fcoevaluatornotes , HttpStatus.OK);
	}

	// -------------------Ritorna gli elementi di  fcoevaluatornotes(Evaluetor Notes)------------------------------------------

	@RequestMapping(value = "/fcousernotes/{id:.+}", method = RequestMethod.GET)
	public ResponseEntity<?> getFcoUserNotes(@PathVariable("id") String id) {

		logger.info("Fetching fcousernotes with id {}", id);
		List<FcoUserNotes> fcousernotes = fcoUserNotesRepository.fcoUserNotesQuery(id);
		if ( fcousernotes.isEmpty() ) {

			FcoUserNotes c = new FcoUserNotes();
			c.setId("");
			c.setType("");
			c.setPara("THERE ARE NO ELEMENTS");
			c.setIdf(id);
			fcousernotes.add(c);
			return new ResponseEntity<List<FcoUserNotes>>( fcousernotes , HttpStatus.OK);
		}

		return new ResponseEntity<List<FcoUserNotes>>( fcousernotes , HttpStatus.OK);
	}


	// -------------------Ritorna gli elementi di ffbehaviour (Behaviour)------------------------------------------

	@RequestMapping(value = "/ffbehaviour/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getFfBehaviour(@PathVariable("id") String id) {

		logger.info("Fetching ffbehaviour with id {}", id);
		List<FfBehaviour> ffbehaviour = ffBehaviourRepository.ffbehaviourQuery(id);
		if ( ffbehaviour.isEmpty() ) {
			logger.error("ffbehaviour with id {} not found.", id);
			return new ResponseEntity<CustomErrorType>(new CustomErrorType("ffbehaviour with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<FfBehaviour>>(ffbehaviour , HttpStatus.OK);
	}

	// -------------------Ritorna gli elementi di FfUserNotes ------------------------------------------

	@RequestMapping(value = "/ffusernotes/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getFfUserBotes(@PathVariable("id") String id) {

		logger.info("Fetching ffusernotes with id {}", id);
		List<FfUserNotes> ffusernotes = ffUserNotesRepository.ffusernotesQuery(id);
		if ( ffusernotes.isEmpty() ) {
			logger.error("ffusernotes with id {} not found.", id);
			return new ResponseEntity<CustomErrorType>(new CustomErrorType("ffusernotes with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<FfUserNotes>>(ffusernotes , HttpStatus.OK);
	}
	// -------------------Creazione, lettura ed elimina elemento listFclass (Selected Elements)-------------------------------------------

	@RequestMapping(value = "/fco/", method = RequestMethod.POST)
	public ResponseEntity<?> createFco(@RequestBody ListFco f, UriComponentsBuilder ucBuilder) {
		logger.info("Creating ListFclass : {}", f);

		List<ListFco> listfclass = listFfcoRepository.listFcoQuery();
		for (int i = 0; i < listfclass.size(); i++) {
			if (listfclass.get(i).getId().equals(f.getId())) {
				logger.error("Già presente in listFclass, {} already exist", f.getId());
				return new ResponseEntity<CustomErrorType>(new CustomErrorType("Unable to create. A User with name " +
						f.getName() + " already exist."),HttpStatus.CONFLICT);
			}
		}

		listFfcoRepository.save(f);
		return new ResponseEntity<String>(HttpStatus.CREATED);
	}

	// -------------------lettura elementi listFco (Selected Elements)-----------------------
	@RequestMapping(value = "/fco/", method = RequestMethod.GET)
	public ResponseEntity<?> getListClass() {

		logger.info("Fetching listclass with id");
		List<ListFco> listfco = listFfcoRepository.listFclassQuery();
		if ( listfco.isEmpty() ) {
			logger.error("listfclass not found.");
			return new ResponseEntity<CustomErrorType>(new CustomErrorType("listfclass not found"), HttpStatus.OK);
		}


		return new ResponseEntity<List<ListFco>>( listfco, HttpStatus.OK);
	}

	// -------------------lettura dipendenze per la view (Show)-----------------------
	@RequestMapping(value = "/listdependence/", method = RequestMethod.GET)
	public ResponseEntity<?> getShowDependence() {

		List<FcoDependencies> listdependence = fcoDipendenciesRepository.fcodipendenciesshowQuery();
		if (listdependence.isEmpty() ) {
			logger.error("listdependence not found.");
			return new ResponseEntity<CustomErrorType>(new CustomErrorType("listfclass not found"), HttpStatus.OK);
		}

		return new ResponseEntity<List<FcoDependencies>>( listdependence, HttpStatus.OK);
	}
	// -------------------lettura hierarchical per la view (Show)-----------------------
	@RequestMapping(value = "/listhierarchical/", method = RequestMethod.GET)
	public ResponseEntity<?> getShowHierarchical() {

		List<ListFco> fcoListFco;

		List<FcoHierarchical> hierarchicalshow = fcoHierarchicalRepository.fcohierarchicalShowQuery();
		if (hierarchicalshow.isEmpty() ) {
			logger.error("hierarchicalshow not found.");
			return new ResponseEntity<CustomErrorType>(new CustomErrorType("listfclass not found"), HttpStatus.OK);
		}


		return new ResponseEntity<List<FcoHierarchical>>( hierarchicalshow, HttpStatus.OK);
	}


	// -------------------elimina elemento listFclass (Selected Elements)-----------------------
	@RequestMapping(value = "/fco/{id:.+}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deletelistFco(@PathVariable("id") String id) {

		logger.info("Fetching & Deleting User with id {}", id);

		ListFco listFClass = listFfcoRepository.findOne(id);
		if (listFClass  == null) {
			logger.error("Unable to delete. User with id {} not found.", id);
			return new ResponseEntity<CustomErrorType>(new CustomErrorType("Unable to delete. User with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}

		listFfcoRepository.delete(id);
		return new ResponseEntity<ListFco>(HttpStatus.NO_CONTENT);
	}


	// -------- Programma Esempio-----

	// ------------------- Update a User ------------------------------------------------

	@RequestMapping(value = "/user/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateUser(@PathVariable("id") String id, @RequestBody User user) {
		logger.info("Updating User with id {}", id);

		User currentUser = userRepository.findOne(id);

		if (currentUser == null) {
			logger.error("Unable to update. User with id {} not found.", id);
			return new ResponseEntity<CustomErrorType>(new CustomErrorType("Unable to upate. User with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}

		currentUser.setName(user.getName());


		userRepository.save(currentUser);
		return new ResponseEntity<User>(currentUser, HttpStatus.OK);
	}

	// ------------------- Delete a User-----------------------------------------

	@RequestMapping(value = "/user/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteUser(@PathVariable("id") String id) {
		logger.info("Fetching & Deleting User with id {}", id);

		User user = userRepository.findOne(id);
		if (user == null) {
			logger.error("Unable to delete. User with id {} not found.", id);
			return new ResponseEntity<CustomErrorType>(new CustomErrorType("Unable to delete. User with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}
		userRepository.delete(id);
		return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
	}

	// ------------------- Delete All Users-----------------------------

	@RequestMapping(value = "/user/", method = RequestMethod.DELETE)
	public ResponseEntity<User> deleteAllUsers() {
		logger.info("Deleting All Users");

		userRepository.deleteAll();
		return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
	}

}