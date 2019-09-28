import copy
import uuid

from Database.PatientRepository import PatientRepository


class PatientRepositoryLocal(PatientRepository):
    def __init__(self):
        self._patientList = {}

    def add_new_patient(self, info):
        patient_id = str(uuid.uuid4())
        self._patientList[patient_id] = copy.deepcopy(info)

        return {'id': patient_id}

    def get(self, patient_id):
        return self._patientList.get(patient_id)

    def get_all(self):
        return copy.deepcopy(self._patientList)